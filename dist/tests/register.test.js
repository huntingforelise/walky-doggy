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
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouterProvider } from "next-router-mock/dist/MemoryRouterProvider";
import { useRouter } from 'next/router';
import Register from '../components/Register';
import * as userService from '../services/UserService';
import { cleanup } from '@testing-library/react';
jest.mock('next/router', function () { return ({
    useRouter: jest.fn(),
}); });
jest.mock('../services/UserService', function () { return ({
    register: jest.fn(),
    getUserInfo: jest.fn(),
}); });
describe('Register Component', function () {
    beforeEach(function () {
        render(<Register />, { wrapper: MemoryRouterProvider });
    });
    afterEach(function () {
        jest.clearAllMocks();
        cleanup();
    });
    test('should render without errors', function () {
        expect(screen.getByRole('form')).toBeInTheDocument();
    });
    test('should update state on input change', function () {
        var nameInput = screen.getByLabelText('Username');
        var emailInput = screen.getByLabelText('E-mail');
        var passwordInput = screen.getByLabelText('Password');
        fireEvent.change(nameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        expect(nameInput.value).toBe('testuser');
        expect(emailInput.value).toBe('testemail@mail.com');
        expect(passwordInput.value).toBe('testpassword');
    });
    test('should update state on checkbox change', function () {
        var ownerCheckbox = screen.getByLabelText('Dog Owner');
        var walkerCheckbox = screen.getByLabelText('Dog Walker');
        fireEvent.click(ownerCheckbox);
        fireEvent.click(walkerCheckbox);
        expect(ownerCheckbox.checked).toBe(true);
        expect(walkerCheckbox.checked).toBe(true);
    });
    test('should disable submit button when required fields are missing', function () {
        expect(screen.getByRole('button', { name: 'Register' })).toBeDisabled();
    });
    test('should enable submit button when all required fields are filled', function () {
        var nameInput = screen.getByLabelText('Username');
        var emailInput = screen.getByLabelText('E-mail');
        var passwordInput = screen.getByLabelText('Password');
        var ownerCheckbox = screen.getByLabelText('Dog Owner');
        fireEvent.change(nameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(ownerCheckbox);
        expect(screen.getByRole('button', { name: 'Register' })).toBeEnabled();
    });
    test('redirects to correct page if user is a walker', function () { return __awaiter(void 0, void 0, void 0, function () {
        var router, nameInput, emailInput, passwordInput, walkerCheckbox, submitButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    router = { push: jest.fn() };
                    useRouter.mockReturnValue(router);
                    userService.register.mockResolvedValue({ res: { username: 'testuser' } });
                    userService.getUserInfo.mockResolvedValue({
                        res: { _id: '12345', isOwner: false, isWalker: true },
                    });
                    nameInput = screen.getByLabelText('Username');
                    emailInput = screen.getByLabelText('E-mail');
                    passwordInput = screen.getByLabelText('Password');
                    walkerCheckbox = screen.getByLabelText('Dog Walker');
                    submitButton = screen.getByText('Register');
                    fireEvent.change(nameInput, { target: { value: 'testuser' } });
                    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
                    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
                    fireEvent.click(walkerCheckbox);
                    fireEvent.click(submitButton);
                    return [4 /*yield*/, waitFor(function () {
                            expect(router.push).toHaveBeenCalledTimes(1);
                            expect(router.push).toHaveBeenCalledWith('/walkeraccount');
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('redirects to correct page if user is an owner', function () { return __awaiter(void 0, void 0, void 0, function () {
        var router, nameInput, emailInput, passwordInput, ownerCheckbox, submitButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    router = { push: jest.fn() };
                    useRouter.mockReturnValue(router);
                    userService.register.mockResolvedValue({ username: 'testuser', password: 'testpassword', email: 'testemail@mail.com', isOwner: 'true', isWalker: 'false' });
                    nameInput = screen.getByLabelText('Username');
                    emailInput = screen.getByLabelText('E-mail');
                    passwordInput = screen.getByLabelText('Password');
                    ownerCheckbox = screen.getByLabelText('Dog Owner');
                    submitButton = screen.getByText('Register');
                    fireEvent.change(nameInput, { target: { value: 'testuser' } });
                    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
                    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
                    fireEvent.click(ownerCheckbox);
                    fireEvent.click(submitButton);
                    return [4 /*yield*/, waitFor(function () {
                            expect(router.push).toHaveBeenCalledTimes(1);
                            expect(router.push).toHaveBeenCalledWith('/owneraccount');
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=register.test.js.map