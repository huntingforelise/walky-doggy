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

  test("renders links to home, owner account, and walker account pages", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    const ownerLink = screen.getByText("Owner");
    const walkerLink = screen.getByText("Walker");
    expect(homeLink).toBeInTheDocument();
    expect(ownerLink).toBeInTheDocument();
    expect(walkerLink).toBeInTheDocument();
  });

  test("navigates to the correct pages when links are clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    const ownerLink = screen.getByText("Owner");
    const walkerLink = screen.getByText("Walker");
    expect(homeLink.getAttribute("href")).toBe("/");
    expect(ownerLink.getAttribute("href")).toBe("/owneraccount/index");
    expect(walkerLink.getAttribute("href")).toBe("/walkeraccount/index");
  });
});