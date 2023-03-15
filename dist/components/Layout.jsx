import Footer from "./Footer";
import Navbar from "./Navbar";
var Layout = function (_a) {
    var children = _a.children;
    return (<div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>);
};
export default Layout;
//# sourceMappingURL=Layout.jsx.map