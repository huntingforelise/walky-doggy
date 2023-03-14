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
import React, { useState } from "react";
import userService from "../Services/UserService";
import { useRouter } from "next/router";
var initialState = {
    username: "",
    password: "",
};
var Login = function () {
    var router = useRouter();
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var username, password, user, output, userInfo, userId, isOwner, isWalker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    username = state.username, password = state.password;
                    user = { username: username, password: password };
                    return [4 /*yield*/, userService.login(user)];
                case 1:
                    output = _a.sent();
                    if (!output.error) return [3 /*break*/, 2];
                    alert("".concat(output.message));
                    setState(initialState);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, userService.getUserInfo(output.res.username)];
                case 3:
                    userInfo = _a.sent();
                    userId = userInfo.res._id;
                    isOwner = userInfo.res.isOwner;
                    isWalker = userInfo.res.isWalker;
                    localStorage.setItem("userId", userId);
                    localStorage.setItem("isOwner", isOwner);
                    localStorage.setItem("isWalker", isWalker);
                    if (isOwner) {
                        router.push("/owneraccount");
                    }
                    else
                        router.push("/walkeraccount");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var validateForm = function () {
        return !state.username || !state.password;
    };
    return (React.createElement("section", null,
        React.createElement("div", { className: "form-control", style: { textAlign: "center" } },
            React.createElement("form", { className: "add-form", onSubmit: handleSubmit },
                React.createElement("label", { htmlFor: "username" }, "Username"),
                React.createElement("input", { id: "username", type: "text", placeholder: "username", name: "username", value: state.username, onChange: handleChange, autoComplete: "off" }),
                React.createElement("label", { htmlFor: "password" }, "Password"),
                React.createElement("input", { id: "password", type: "password", placeholder: "******", name: "password", value: state.password, onChange: handleChange }),
                React.createElement("p", null),
                React.createElement("button", { className: "btn-clicked", type: "submit", disabled: validateForm() }, "Login")))));
};
export default Login;
//# sourceMappingURL=login.js.map