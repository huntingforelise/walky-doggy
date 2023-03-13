import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import userEvent from "@testing-library/user-event";

import Login from "./components/Login";

test("loads and displays login", async () => {
  // ARRANGE
  render(<Login />);

  // ACT
  await userEvent.click(screen.getByTestId("loginbutton"));
  // await screen.findByRole("heading");

  // ASSERT
  // const footer = screen.getByTestId("footer");
  // expect(footer).toHaveTextContent("Copyright");
  // expect(screen.getByRole("button")).toBeDisabled();
});
