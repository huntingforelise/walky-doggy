import React from "react";
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouterProvider } from "next-router-mock/dist/MemoryRouterProvider";
import { useRouter } from 'next/router';
import Register from '../components/Register';
import * as userService from '../services/UserService';
import { cleanup } from '@testing-library/react';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../services/UserService', () => ({
  register: jest.fn(),
  getUserInfo: jest.fn(),
}));

describe('Register Component', () => {
  beforeEach(() => {
    render(<Register />, { wrapper: MemoryRouterProvider});
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('should render without errors', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('should update state on input change', () => {
    const nameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(nameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(nameInput.value).toBe('testuser');
    expect(emailInput.value).toBe('testemail@mail.com');
    expect(passwordInput.value).toBe('testpassword');
  });

  test('should update state on checkbox change', () => {
    const ownerCheckbox = screen.getByLabelText('Dog Owner');
    const walkerCheckbox = screen.getByLabelText('Dog Walker');

    fireEvent.click(ownerCheckbox);
    fireEvent.click(walkerCheckbox);

    expect(ownerCheckbox.checked).toBe(true);
    expect(walkerCheckbox.checked).toBe(true);
  });

  test('should disable submit button when required fields are missing', () => {
    expect(screen.getByRole('button', { name: 'Register' })).toBeDisabled();
  });

  test('should enable submit button when all required fields are filled', () => {
    const nameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const ownerCheckbox = screen.getByLabelText('Dog Owner');

    fireEvent.change(nameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(ownerCheckbox);

    expect(screen.getByRole('button', { name: 'Register' })).toBeEnabled();
  });

  test('redirects to correct page if user is a walker', async () => {
    const router = { push: jest.fn() };
    useRouter.mockReturnValue(router);
    userService.register.mockResolvedValue({ res: { username: 'testuser' } });
    userService.getUserInfo.mockResolvedValue({
      res: { _id: '12345', isOwner: false, isWalker: true },
    });

    const nameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const walkerCheckbox = screen.getByLabelText('Dog Walker');
    const submitButton = screen.getByText('Register');

    fireEvent.change(nameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(walkerCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenCalledWith('/walkeraccount');
    });
  });

  test('redirects to correct page if user is an owner', async () => {
    const router = { push: jest.fn() };
    useRouter.mockReturnValue(router);
    userService.register.mockResolvedValue({ username: 'testuser', password: 'testpassword', email: 'testemail@mail.com', isOwner: 'true', isWalker: 'false' });

    const nameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const ownerCheckbox = screen.getByLabelText('Dog Owner');
    const submitButton = screen.getByText('Register');

    fireEvent.change(nameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(ownerCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenCalledWith('/owneraccount');
    });
  });
})