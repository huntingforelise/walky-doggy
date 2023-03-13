import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "../components/Footer";

test("loads and displays footer", () => {
  render(<Footer />);

  const footer = screen.getByTestId("footer");
  expect(footer).toHaveTextContent("Copyright");
});
