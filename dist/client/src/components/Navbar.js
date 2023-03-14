import Link from "next/link";
import Image from "next/image";
var Navbar = function () {
    return (React.createElement("nav", null,
        React.createElement("div", { className: "logo" },
            React.createElement(Image, { src: "/dog6.png", alt: "man-with-dag", width: 128, height: 128, priority: true })),
        React.createElement(Link, { href: "/" }, "Home"),
        React.createElement(Link, { href: "/owneraccount/index" }, "Owner"),
        React.createElement(Link, { href: "/walkeraccount/index" }, "Walker")));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map