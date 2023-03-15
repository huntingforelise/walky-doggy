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
import auth from "../utils/auth";
import * as userService from "../services/UserService";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var initialState = {
    username: "",
    email: "",
    password: "",
    isOwner: false,
    isWalker: false,
};
var Register = function () {
    var router = useRouter();
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleCheckChange = function (e) {
        var _a = e.target, name = _a.name, checked = _a.checked;
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = checked, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var isOwner, isWalker, username, email, password, user, res, errorToast, userId, isOwner_1, isWalker_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    isOwner = state.isOwner, isWalker = state.isWalker, username = state.username, email = state.email, password = state.password;
                    user = { isOwner: isOwner, isWalker: isWalker, username: username, email: email, password: password };
                    return [4 /*yield*/, userService.register(user)];
                case 1:
                    res = _a.sent();
                    errorToast = function () { return toast(res.message); };
                    if (res.error) {
                        errorToast();
                        setState(initialState);
                    }
                    else {
                        userId = res._id;
                        isOwner_1 = res.isOwner;
                        isWalker_1 = res.isWalker;
                        localStorage.setItem("userId", userId);
                        localStorage.setItem("isOwner", isOwner_1);
                        localStorage.setItem("isWalker", isWalker_1);
                        if (res.isOwner) {
                            auth.login(function () { return router.push("/owneraccount"); });
                        }
                        else
                            auth.login(function () { return router.push("/walkeraccount"); });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var validateForm = function () {
        return (!(state.isOwner || state.isWalker) ||
            !state.username ||
            !state.email ||
            !state.password);
    };
    return (<section>
      <div className="form-control" style={{ textAlign: "center" }}>
        <form className="add-form" onSubmit={handleSubmit}>
          <label style={{ display: "inline-block", textAlign: "center" }}>
            Dog Owner
            <input type="checkbox" name="isOwner" checked={state.isOwner} onChange={handleCheckChange}/>
          </label>
          <label style={{ display: "inline-block" }}>
            <span>Dog Walker</span>
            <input type="checkbox" name="isWalker" checked={state.isWalker} onChange={handleCheckChange}/>
          </label>
          <label>
            Username
            <input type="text" placeholder="username" name="username" value={state.username} onChange={handleChange} autoComplete="off"/>
          </label>
          <label>
            E-mail
            <input type="text" placeholder="name@mail.com" name="email" value={state.email} onChange={handleChange} autoComplete="off"/>
          </label>
          <label>
            Password
            <input type="password" placeholder="******" name="password" value={state.password} onChange={handleChange}/>
          </label>
          <div className="login-container">
            <button className="btn-clicked" type="submit" disabled={validateForm()}>
              Register
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>);
};
export default Register;
//# sourceMappingURL=register.jsx.map