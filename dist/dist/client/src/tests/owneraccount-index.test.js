import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OwnerAccount from "../pages/owneraccount/index.js";
test("renders OwnerAccount component", function () {
    render(React.createElement(OwnerAccount, null));
    var ownerAccountElement = screen.getByText(/Owner/i);
    expect(ownerAccountElement).toBeInTheDocument();
});
//# sourceMappingURL=owneraccount-index.test.js.map
//# sourceMappingURL=owneraccount-index.test.js.map