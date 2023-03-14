import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/Footer";
test("loads and displays footer", function () {
    render(React.createElement(Footer, null));
    var footer = screen.getByTestId("footer");
    expect(footer).toHaveTextContent("Copyright");
});
//# sourceMappingURL=footer.test.js.map