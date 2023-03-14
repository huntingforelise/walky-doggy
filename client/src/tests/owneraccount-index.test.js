import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OwnerAccount from "../pages/owneraccount/index.js";

test("renders OwnerAccount component", () => {
  render(<OwnerAccount />);
  const ownerAccountElement = screen.getByText(/Owner/i);
  expect(ownerAccountElement).toBeInTheDocument();
});
