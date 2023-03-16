import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("renders a logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("man-with-dag");
    expect(logo).toBeInTheDocument();
  });

  test("renders links to Login account", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const LoginLink = screen.getByText("Login");
    expect(LoginLink).toBeInTheDocument();
  });
});