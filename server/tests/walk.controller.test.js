const walk = require("../models/walk");
const controller = require("./walk.controller");
const mongoose = require("mongoose");
const conf = require("../config");

describe("Walk Controller", () => {

  beforeAll(async () => {
    const url = `${conf.mongoUrl}:${conf.mongoPort}/${conf.testDbName}`;
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(url, { useNewUrlParser: true });
    }
  });

  afterEach(async () => {
    await walk.deleteMany({});
  });

  afterAll(async () => {
    if (process.env.NODE_ENV === 'test') {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
    }
  });

  const mockWalk = {
    ownerID: "6410452b71b06b124439db12",
    dogName: "Rex",
    date: new Date(),
    pickUpLocation: "Goose Green",
    walkerID: null,
    imageURL: [],
    coordinates: [],
    didPee: false,
    didPoo: false,
  };

  describe("getWalk function", () => {
    it("should return a walk instance by ID", async () => {
      const mockWalkInstance = await walk.create(mockWalk);
      const mockRequest = { params: { id: mockWalkInstance._id } };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await controller.getWalk(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.send).toHaveBeenCalledWith(mockWalkInstance);
    });
  });

  describe("getWalks function", () => {
    it("should return an object with past and future walks", async () => {
      await walk.create(mockWalk);
      const mockRequest = {};
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await controller.getWalks(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.send).toHaveBeenCalledWith({
        past: expect.any(Array),
        future: expect.any(Array),
      });
    });
  });

  describe("postWalk function", () => {
    it("should create a new walk instance", async () => {
      const mockRequest = {
        body: mockWalk,
      };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await controller.postWalk(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.send).toHaveBeenCalledWith({
        res: expect.any(Object),
        error: false,
      });
    });
  });

  describe("deleteWalk function", () => {
    it("should delete a walk instance by ID", async () => {
      const mockWalkInstance = await walk.create(mockWalk);
      const mockRequest = { params: { id: mockWalkInstance._id } };
      const mockResponse = {
        sendStatus: jest.fn(),
      };
      await controller.deleteWalk(mockRequest, mockResponse);
      expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
      const deletedWalk = await walk.findById(mockWalkInstance._id);
      expect(deletedWalk).toBeNull();
    });
  });

  describe("joinWalk function", () => {
    it("should update a walk instance with a walker ID", async () => {
      const mockWalkInstance = await walk.create(mockWalk);
      const mockRequest = {
        params: { id: mockWalkInstance._id },
        body: { walkerID: "6410452b71b06b124439db13" },
      };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await controller.joinWalk(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.send).toHaveBeenCalledWith({
        res: expect.any(Object),
        error: false,
      });
      const updatedWalk = await walk.findById(mockWalkInstance._id);
      expect(updatedWalk.walkerID).toEqual(mockRequest.body.walkerID);
    });
  });

  describe("updateWalkRecord function", () => {
    test("should update a walk record with new pee and poo status", async () => {
      const mockWalk = new walk({
        _id: "607824dd30480c0398457b95",
        dogName: "Buddy",
        ownerID: "60781f267d073c7ce3f2089d",
        walkerID: "60781f267d073c7ce3f2089e",
        date: "2022-01-01T10:00:00.000Z",
        pickUpLocation: "Goose Green",
        didPee: false,
        didPoo: false,
      });

      const mockRequest = {
        params: { _id: mockWalk._id },
        body: { didPee: true, didPoo: false },
      };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn(),
      };

      walk.findById = jest.fn().mockResolvedValueOnce(mockWalk);
      walk.updateOne = jest.fn();
      walk.updateOne = jest.fn();
      await walk.updateOne({ _id: mockWalk._id }, {
        didPee: mockRequest.body.didPee,
        didPoo: mockRequest.body.didPoo,
      });

      walk.findById = jest.fn().mockResolvedValueOnce({
        ...mockWalk.toObject(),
        didPee: true,
      });

      await controller.updateWalkRecord(mockRequest, mockResponse);

      expect(walk.findById).toHaveBeenCalledWith(mockWalk._id);
      expect(walk.updateOne).toHaveBeenCalledWith(mockWalk, {
        didPee: true,
        didPoo: false,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.send).toHaveBeenCalledWith({
        ...mockWalk.toObject(),
        didPee: true,
      });
    });

    test("should return status 500 if an error occurs", async () => {
      const mockRequest = {
        params: { _id: "607824dd30480c0398457b95" },
        body: { didPee: true, didPoo: false },
      };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn(),
      };

      walk.findById = jest.fn().mockRejectedValueOnce(new Error("Database error"));

      await controller.updateWalkRecord(mockRequest, mockResponse);

      expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
    });
  });

});