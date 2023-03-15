import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OwnerAccount from "../pages/owneraccount/index.js";

describe("OwnerAccount component", () => {
  test("renders 3 buttons with correct text", () => {
    const { getAllByRole, getByText } = render(<OwnerAccount />);

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(3);

    expect(getByText("Book a walk")).toBeInTheDocument();
    expect(getByText("View My Walk History")).toBeInTheDocument();
    expect(getByText("Upcoming Walks")).toBeInTheDocument();
  });
});