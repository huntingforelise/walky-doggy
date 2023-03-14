"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var User = require("../models/user.js");
exports.login = function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, username, password, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    if (!username || !password) {
                        return [2 /*return*/, res.status(400).send({ res: "Missing fields!", error: true })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, User.findOne({ username: username })];
                case 2:
                    user = _b.sent();
                    if (user.password === password) {
                        req.session.uid = user._id;
                        res.status(200).send({ res: user, error: false });
                    }
                    else {
                        return [2 /*return*/, res.status(401).send({
                                error: true,
                                message: "Username or password is incorrect",
                            })];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res
                        .status(401)
                        .send({ message: "Username or password is incorrect", error: true });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.create = function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, username, userEmail, userUsername, newUser, user, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, username = _a.username;
                    return [4 /*yield*/, User.findOne({ email: email })];
                case 1:
                    userEmail = _b.sent();
                    return [4 /*yield*/, User.findOne({ username: username })];
                case 2:
                    userUsername = _b.sent();
                    if (userEmail) {
                        return [2 /*return*/, res
                                .status(409)
                                .send({ error: true, message: "User with this E-mail already exists" })];
                    }
                    else if (userUsername) {
                        return [2 /*return*/, res
                                .status(409)
                                .send({ error: true, message: "Username already exists" })];
                    }
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    newUser = new User(__assign({}, req.body));
                    return [4 /*yield*/, newUser.save()];
                case 4:
                    user = _b.sent();
                    req.session.uid = user._id;
                    res.status(201).send(user);
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    res.status(400).send({ error: true, message: "Could not create user" });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.profile = function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var username, findUser, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    username = req.params.user;
                    console.log("req params: " + username);
                    return [4 /*yield*/, User.findOne({ username: username })];
                case 1:
                    findUser = _a.sent();
                    if (findUser) {
                        res.status(200).send({ res: findUser, error: false });
                    }
                    else {
                        res.status(404).send({ message: "User not found", error: true });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send({ message: "Server error", error: true });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.logout = function (req, res) {
    req.session.destroy(function (error) {
        if (error) {
            res
                .status(500)
                .send({ error: true, message: "Could not log out, please try again" });
        }
        else {
            res.clearCookie("sid");
            res.status(200).send({ error: false, message: "Logout successful" });
        }
    });
};
//# sourceMappingURL=user.controller.js.map