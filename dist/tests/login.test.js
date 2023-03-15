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
import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from 'next/router';
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Login from "../components/Login";
import * as userService from "../services/UserService";
jest.mock('next/router', function () { return ({
    useRouter: jest.fn(),
}); });
jest.mock('../services/UserService', function () { return ({
    login: jest.fn(),
    getUserInfo: jest.fn(),
}); });
describe('Login Component', function () {
    test("loads and displays login", function () {
        render(<Login />, { wrapper: MemoryRouterProvider });
        var usernameField = screen.getByLabelText(/username/i);
        var passwordField = screen.getByLabelText(/password/i);
        var submitButton = screen.getByText(/Login/i);
        expect(usernameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
    test('redirects to correct page based on user role', function () { return __awaiter(void 0, void 0, void 0, function () {
        var router, _a, getByLabelText, getByText, usernameInput, passwordInput, submitButton;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    router = { push: jest.fn() };
                    useRouter.mockReturnValue(router);
                    userService.login.mockResolvedValue({ res: { username: 'testuser' } });
                    userService.getUserInfo.mockResolvedValue({
                        res: { _id: '123', isOwner: true, isWalker: false },
                    });
                    _a = render(<Login />), getByLabelText = _a.getByLabelText, getByText = _a.getByText;
                    usernameInput = getByLabelText('Username');
                    passwordInput = getByLabelText('Password');
                    submitButton = getByText('Login');
                    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
                    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
                    fireEvent.click(submitButton);
                    return [4 /*yield*/, waitFor(function () {
                            expect(router.push).toHaveBeenCalledTimes(1);
                            expect(router.push).toHaveBeenCalledWith('/owneraccount');
                        })];
                case 1:
                    _b.sent();
                    userService.getUserInfo.mockResolvedValue({
                        res: { _id: '123', isOwner: false, isWalker: true },
                    });
                    fireEvent.click(submitButton);
                    return [4 /*yield*/, waitFor(function () {
                            expect(router.push).toHaveBeenCalledTimes(2);
                            expect(router.push).toHaveBeenCalledWith('/walkeraccount');
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=login.test.js.map