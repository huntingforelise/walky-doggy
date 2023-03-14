const { describe, expect, beforeAll, afterAll } = require("@jest/globals");
const express = require("express");
const router = require("../router");
const supertest = require("supertest");
const User = require("../models/user.js");
const mongoose = require("mongoose");
const conf = require("../config");

describe("User Controller Tests", () => {
  let app;
  let request;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use(router);
    request = supertest(app);
    const url = `${conf.mongoUrl}:${conf.mongoPort}/${conf.testDbName}`;
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(url, { useNewUrlParser: true });
    }
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    if (process.env.NODE_ENV === "test") {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
    }
  });

  describe("POST /login", () => {
    it("returns a 400 error if missing fields", async () => {
      const response = await request.post("/login").send({});
      expect(response.status).toEqual(400);
      expect(response.body.error).toEqual(true);
    });

    it("returns a 401 error if incorrect username or password", async () => {
      const user = new User({ username: "testuser", password: "testpassword" });
      await user.save();
      const response = await request
        .post("/login")
        .send({ username: "testuser", password: "wrongpassword" });
      expect(response.status).toEqual(401);
      expect(response.body.error).toEqual(true);
    });

    it("logs in a user with correct credentials", async () => {
      const user = new User({
        username: "testuser",
        password: "testpassword",
        isOwner: true,
        email: "test@test.com",
      });
      await user.save();
      const response = await request
        .post("/login")
        .send({ username: "testuser", password: "testpassword" });
      expect(response.statusCode).toEqual(200);
      expect(response.body.error).toEqual(false);
      expect(response.body.res.username).toEqual("testuser");
    });
  });

  describe("POST /register", () => {
    it("returns a 409 error if email already exists", async () => {
      const user = new User({ email: "test@test.com", username: "testuser" });
      await user.save();
      const response = await request
        .post("/register")
        .send({ email: "test@test.com", username: "newuser" });
      expect(response.status).toEqual(409);
      expect(response.body.error).toEqual(true);
      expect(response.body.message).toEqual(
        "User with this E-mail already exists"
      );
    });

    it("returns a 409 error if username already exists", async () => {
      const user = new User({ email: "test@test.com", username: "testuser" });
      await user.save();
      const response = await request
        .post("/register")
        .send({ email: "new@test.com", username: "testuser" });
      expect(response.status).toEqual(409);
      expect(response.body.error).toEqual(true);
      expect(response.body.message).toEqual("Username already exists");
    });

    it("creates a new user with valid inputs", async () => {
      const response = await request.post("/register").send({
        email: "test@test.com",
        username: "testuser",
        password: "testpassword",
        isOwner: true,
      });
      expect(response.status).toEqual(201);
      expect(response.body.email).toEqual("test@test.com");
      expect(response.body.username).toEqual("testuser");
    });
  });
});
