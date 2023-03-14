var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var walk = require("../models/walk");
var controller = require("../controller/walk.controller");
var mongoose = require("mongoose");
var conf = require("../config");
describe("Walk Controller", function () {
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "".concat(conf.mongoUrl, ":").concat(conf.mongoPort, "/").concat(conf.testDbName);
            if (mongoose.connection.readyState === 0) {
                mongoose.connect(url, { useNewUrlParser: true });
            }
            return [2 /*return*/];
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, walk.deleteMany({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(process.env.NODE_ENV === "test")) return [3 /*break*/, 3];
                    return [4 /*yield*/, mongoose.connection.dropDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, mongoose.connection.close()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
    var mockWalk = {
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
    describe("getWalk function", function () {
        it("should return a walk instance by ID", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockWalkInstance, mockRequest, mockResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, walk.create(mockWalk)];
                    case 1:
                        mockWalkInstance = _a.sent();
                        mockRequest = { params: { id: mockWalkInstance._id } };
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                        };
                        return [4 /*yield*/, controller.getWalk(mockRequest, mockResponse)];
                    case 2:
                        _a.sent();
                        expect(mockResponse.status).toHaveBeenCalledWith(200);
                        expect(mockResponse.send).toHaveBeenCalledWith(mockWalkInstance);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("getWalks function", function () {
        it("should return an object with past and future walks", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockRequest, mockResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, walk.create(mockWalk)];
                    case 1:
                        _a.sent();
                        mockRequest = {};
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                        };
                        return [4 /*yield*/, controller.getWalks(mockRequest, mockResponse)];
                    case 2:
                        _a.sent();
                        expect(mockResponse.status).toHaveBeenCalledWith(200);
                        expect(mockResponse.send).toHaveBeenCalledWith({
                            past: expect.any(Array),
                            future: expect.any(Array),
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("postWalk function", function () {
        it("should create a new walk instance", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockRequest, mockResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockRequest = {
                            body: mockWalk,
                        };
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                        };
                        return [4 /*yield*/, controller.postWalk(mockRequest, mockResponse)];
                    case 1:
                        _a.sent();
                        expect(mockResponse.status).toHaveBeenCalledWith(201);
                        expect(mockResponse.send).toHaveBeenCalledWith({
                            res: expect.any(Object),
                            error: false,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("deleteWalk function", function () {
        it("should delete a walk instance by ID", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockWalkInstance, mockRequest, mockResponse, deletedWalk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, walk.create(mockWalk)];
                    case 1:
                        mockWalkInstance = _a.sent();
                        mockRequest = { params: { id: mockWalkInstance._id } };
                        mockResponse = {
                            sendStatus: jest.fn(),
                        };
                        return [4 /*yield*/, controller.deleteWalk(mockRequest, mockResponse)];
                    case 2:
                        _a.sent();
                        expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
                        return [4 /*yield*/, walk.findById(mockWalkInstance._id)];
                    case 3:
                        deletedWalk = _a.sent();
                        expect(deletedWalk).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("joinWalk function", function () {
        it("should update a walk instance with a walker ID", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockWalkInstance, mockRequest, mockResponse, updatedWalk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, walk.create(mockWalk)];
                    case 1:
                        mockWalkInstance = _a.sent();
                        mockRequest = {
                            params: { id: mockWalkInstance._id },
                            body: { walkerID: "6410452b71b06b124439db13" },
                        };
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                        };
                        return [4 /*yield*/, controller.joinWalk(mockRequest, mockResponse)];
                    case 2:
                        _a.sent();
                        expect(mockResponse.status).toHaveBeenCalledWith(200);
                        expect(mockResponse.send).toHaveBeenCalledWith({
                            res: expect.any(Object),
                            error: false,
                        });
                        return [4 /*yield*/, walk.findById(mockWalkInstance._id)];
                    case 3:
                        updatedWalk = _a.sent();
                        expect(updatedWalk.walkerID).toEqual(mockRequest.body.walkerID);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("updateWalkRecord function", function () {
        test("should update a walk record with new pee and poo status", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockWalk, mockRequest, mockResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockWalk = new walk({
                            _id: "607824dd30480c0398457b95",
                            dogName: "Buddy",
                            ownerID: "60781f267d073c7ce3f2089d",
                            walkerID: "60781f267d073c7ce3f2089e",
                            date: "2022-01-01T10:00:00.000Z",
                            pickUpLocation: "Goose Green",
                            didPee: false,
                            didPoo: false,
                        });
                        mockRequest = {
                            params: { _id: mockWalk._id },
                            body: { didPee: true, didPoo: false },
                        };
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                            sendStatus: jest.fn(),
                        };
                        walk.findById = jest.fn().mockResolvedValueOnce(mockWalk);
                        walk.updateOne = jest.fn();
                        return [4 /*yield*/, walk.updateOne(mockWalk, {
                                didPee: mockRequest.body.didPee,
                                didPoo: mockRequest.body.didPoo,
                            })];
                    case 1:
                        _a.sent();
                        walk.findById = jest.fn().mockResolvedValueOnce(__assign(__assign({}, mockWalk.toObject()), { didPee: true }));
                        return [4 /*yield*/, controller.updateWalkRecord(mockRequest, mockResponse)];
                    case 2:
                        _a.sent();
                        expect(walk.findById).toHaveBeenCalledWith(mockWalk._id);
                        expect(walk.updateOne).toHaveBeenCalledWith(mockWalk, {
                            didPee: true,
                            didPoo: false,
                        });
                        expect(mockResponse.status).toHaveBeenCalledWith(200);
                        expect(mockResponse.send).toHaveBeenCalledWith(__assign(__assign({}, mockWalk.toObject()), { didPee: true }));
                        return [2 /*return*/];
                }
            });
        }); });
        test("should return status 500 if an error occurs", function () { return __awaiter(_this, void 0, void 0, function () {
            var mockRequest, mockResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockRequest = {
                            params: { _id: "607824dd30480c0398457b95" },
                            body: { didPee: true, didPoo: false },
                        };
                        mockResponse = {
                            status: jest.fn().mockReturnThis(),
                            send: jest.fn(),
                            sendStatus: jest.fn(),
                        };
                        walk.findById = jest
                            .fn()
                            .mockRejectedValueOnce(new Error("Database error"));
                        return [4 /*yield*/, controller.updateWalkRecord(mockRequest, mockResponse)];
                    case 1:
                        _a.sent();
                        expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=walk.controller.test.js.map