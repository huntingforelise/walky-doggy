import Footer from "./Footer";
import Navbar from "./Navbar";
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "content" },
        React.createElement(Navbar, null),
        children,
        React.createElement(Footer, null)));
};
export default Layout;
//# sourceMappingURL=Layout.js.map