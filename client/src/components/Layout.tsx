import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Navbar />

      <Footer />
    </div>
  );
};

export default Layout;
