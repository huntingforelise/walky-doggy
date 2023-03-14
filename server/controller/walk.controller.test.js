const { describe, expect, beforeAll, afterEach, afterAll } = require("@jest/globals");
const express = require("express");
const router = require("../router");
const supertest = require("supertest");
const mongoose = require("mongoose");
const conf = require("../config");
const controller = require("./walk.controller");

describe("Walk Controller Tests", () => {
  let app;
  let request;

  beforeAll(async () => {
    const url = `${conf.mongoUrl}:${conf.mongoPort}/${conf.testDbName}`;
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(url, { useNewUrlParser: true });
    }
    app = express();
    app.use(express.json());
    app.use(router);
    request = supertest(app);
  });

  // afterEach(async () => {
  //   await walk.deleteMany({});
  // });

  afterAll(async () => {
    if (process.env.NODE_ENV === 'test') {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
    }
  });

  describe("GET /walks/:id", () => {
    it("should return the walk with the given ID", async () => {
      const walkId = "607b997a38b4da65d8db28c4";
      const walkData = {
        ownerID: "1",
        dogName: "Rex",
        date: "2023-03-14T16:00:00.000Z",
        pickUpLocation: "Peckham Rye",
        walkerID: "2",
        imageURL: [],
        coordinates: [],
        didPee: false,
        didPoo: false,
      };
      const walkMock = {
        findById: jest.fn().mockReturnValue(walkData),
      };
      const req = { params: { id: walkId } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      await controller.getWalk(req, res);
      expect(walkMock.findById).toHaveBeenCalledWith(walkId);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(walkData);
    });
  
    it("should return a 500 status code if an error occurs", async () => {
      const walkId = "invalidId";
      const walkMock = {
        findById: jest.fn().mockRejectedValue(new Error("Server error")),
      };
      const req = { params: { id: walkId } };
      const res = { sendStatus: jest.fn() };
      await controller.getWalk(req, res);
      expect(walkMock.findById).toHaveBeenCalledWith(walkId);
      expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
  });  
})