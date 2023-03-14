var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var walk = require("../models/walk");
exports.getWalk = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var ID, walkInstance, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ID = req.params.id;
                    return [4 /*yield*/, walk.findById(ID)];
                case 1:
                    walkInstance = _a.sent();
                    res.status(200).send(walkInstance);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.sendStatus(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.getWalks = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var pastWalks, futureWalks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, walk
                            .find({ date: { $lte: new Date().toISOString() } })
                            .sort({ date: 1 })];
                case 1:
                    pastWalks = _a.sent();
                    return [4 /*yield*/, walk
                            .find({ date: { $gte: new Date().toISOString() } })
                            .sort({ date: 1 })];
                case 2:
                    futureWalks = _a.sent();
                    res.status(200).send({ past: pastWalks, future: futureWalks });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.sendStatus(500);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.postWalk = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var newWalk, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, walk.create(req.body)];
                case 1:
                    newWalk = _a.sent();
                    res.status(201).send({ res: newWalk, error: false });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).send({ res: "Internal server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.deleteWalk = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var output, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, walk.deleteOne({ _id: req.params.id })];
                case 1:
                    output = _a.sent();
                    if (output.deletedCount === 1) {
                        res
                            .status(200)
                            .send({ res: "Your walky has been deleted", error: false });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    res.status(500).send({ res: "Internal server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.joinWalk = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var ID, walkerID, walkToBeUpdated, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ID = req.params.id;
                    walkerID = req.body.walkerID;
                    return [4 /*yield*/, walk.findByIdAndUpdate(ID, {
                            walkerID: walkerID,
                        })];
                case 1:
                    walkToBeUpdated = _a.sent();
                    res.status(200).send({ res: walkToBeUpdated, error: false });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.status(500).send({ res: "Internal server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
//we could also include another function that makes it possible for a walker to unsubscribe, this would be a PUT
exports.updateWalkRecord = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var ID, walkToBeUpdated, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ID = req.params.id;
                    return [4 /*yield*/, walk.findByIdAndUpdate(ID, {
                            didPee: req.body.pee,
                            didPoo: req.body.poo,
                        })];
                case 1:
                    walkToBeUpdated = _a.sent();
                    res.status(200).send({ res: walkToBeUpdated, error: false });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    res.status(500).send({ res: "Internal server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.updateWalkImage = function (req, res) {
    return __awaiter(_this, void 0, void 0, function () {
        var ID, URL_1, walkToBeUpdated, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ID = req.params.id;
                    URL_1 = req.body.URL;
                    return [4 /*yield*/, walk.findByIdAndUpdate(ID, {
                            $addToSet: { imageURL: URL_1 },
                        })];
                case 1:
                    walkToBeUpdated = _a.sent();
                    res.status(200).send({ res: walkToBeUpdated, error: false });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    res.status(500).send({ res: "Internal server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
// exports.updateWalkLocation = async (req, res) => {
//   //this is a walker only function
//   console.log("controller", req.body);
//   try {
//     const ID = req.params.id;
//     const walkToBeUpdated = await walk.findById(ID);
//     await walk.updateOne(walkToBeUpdated, { coordinates: req.body });
//     const updatedWalk = await walk.findById(ID);
//     console.log(updatedWalk);
//     res.status(200).send(updatedWalk);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// };
// I will complete this once we've got the rest working
// exports.deleteImage = async (req, res) => {
//   //console.log("From DELETE:" + JSON.stringify(req.params));
//   imageModel.deleteOne({ _id: req.params["id"] }).then(res.json(req.params));
// };
//# sourceMappingURL=walk.controller.js.map
//# sourceMappingURL=walk.controller.js.map