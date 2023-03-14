import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from 'next/router';
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Login from "../components/Login";
import userService from "../services/UserService";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../services/UserService', () => ({
  login: jest.fn(),
  getUserInfo: jest.fn(),
}));


test("loads and displays login", () => {
  render(<Login />, { wrapper: MemoryRouterProvider });

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Login/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

describe('Login Component', () => {
  it('should log in successfully and redirect to the correct page', async () => {
    const routerPushMock = jest.fn();
    const mockUserInfo = {
      res: {
        _id: '123',
        isOwner: true,
        isWalker: false,
      },
    };
    userService.login.mockResolvedValueOnce({ res: { username: 'testuser' } });
    userService.getUserInfo.mockResolvedValueOnce(mockUserInfo);
    const mockRouter = {
      push: routerPushMock,
    };
    useRouter.mockReturnValueOnce({ push: routerPushMock });
    const { getByLabelText, getByText } = render(<Login />);

    fireEvent.change(getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(userService.login).toHaveBeenCalledTimes(1);
      expect(userService.login).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'testpassword',
      });
      expect(userService.getUserInfo).toHaveBeenCalledTimes(1);
      expect(userService.getUserInfo).toHaveBeenCalledWith('testuser');
      expect(localStorage.getItem('userId')).toEqual('123');
      expect(localStorage.getItem('isOwner')).toEqual('true');
      expect(localStorage.getItem('isWalker')).toEqual('false');
      expect(routerPushMock).toHaveBeenCalledTimes(1);
      expect(routerPushMock).toHaveBeenCalledWith('/owneraccount');
    });
  });
});