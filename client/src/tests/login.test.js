import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from 'next/router';
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Login from "../components/Login";
import * as userService from "../services/UserService";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../services/UserService', () => ({
  login: jest.fn(),
  getUserInfo: jest.fn(),
}));

describe('Login Component', () => {
  test("loads and displays login", () => {
    render(<Login />, { wrapper: MemoryRouterProvider });

    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/Login/i);

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('redirects to correct page based on user role', async () => {
    const router = { push: jest.fn() };
    useRouter.mockReturnValue(router);
    userService.login.mockResolvedValue({ res: { username: 'testuser' } });
    userService.getUserInfo.mockResolvedValue({
      res: { _id: '123', isOwner: true, isWalker: false },
    });

    const { getByLabelText, getByText } = render(<Login />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenCalledWith('/owneraccount');
    });

    userService.getUserInfo.mockResolvedValue({
      res: { _id: '123', isOwner: false, isWalker: true },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledTimes(2);
      expect(router.push).toHaveBeenCalledWith('/walkeraccount');
    });
  });
});