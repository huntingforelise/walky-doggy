import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";

test("loads and displays login", () => {
  render(<Login />, { wrapper: MemoryRouterProvider });

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Login/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("logs in owner", () => {
  render(<Login />, { wrapper: MemoryRouterProvider });

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Login/i);

  userEvent.type(usernameField, "owner3");
  userEvent.type(passwordField, "owner");
  userEvent.click(submitButton);

  expect(mockRouter.asPath).toEqual("/owneraccount");
});
