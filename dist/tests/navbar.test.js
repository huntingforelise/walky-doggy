import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";
describe("Navbar", function () {
    test("renders a logo", function () {
        render(<MemoryRouter>
        <Navbar />
      </MemoryRouter>);
        var logo = screen.getByAltText("man-with-dag");
        expect(logo).toBeInTheDocument();
    });
    test("renders links to home, owner account, and walker account pages", function () {
        render(<MemoryRouter>
        <Navbar />
      </MemoryRouter>);
        var homeLink = screen.getByText("Home");
        var ownerLink = screen.getByText("Owner");
        var walkerLink = screen.getByText("Walker");
        expect(homeLink).toBeInTheDocument();
        expect(ownerLink).toBeInTheDocument();
        expect(walkerLink).toBeInTheDocument();
    });
    test("navigates to the correct pages when links are clicked", function () {
        render(<MemoryRouter>
        <Navbar />
      </MemoryRouter>);
        var homeLink = screen.getByText("Home");
        var ownerLink = screen.getByText("Owner");
        var walkerLink = screen.getByText("Walker");
        expect(homeLink.getAttribute("href")).toBe("/");
        expect(ownerLink.getAttribute("href")).toBe("/owneraccount/index");
        expect(walkerLink.getAttribute("href")).toBe("/walkeraccount/index");
    });
});
//# sourceMappingURL=navbar.test.js.map