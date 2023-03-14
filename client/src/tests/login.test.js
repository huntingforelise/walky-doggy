import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import userEvent from "@testing-library/user-event";

import Login from "./components/Login";

test("loads and displays login", async () => {
  // ARRANGE
  render(<Login />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Login/i);

  // ACT
  // await userEvent.click(screen.getByTestId("loginbutton"));
  // await screen.findByRole("heading");

  // ASSERT

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  // const footer = screen.getByTestId("footer");
  // expect(footer).toHaveTextContent("Copyright");
  // expect(screen.getByRole("button")).toBeDisabled();
});
