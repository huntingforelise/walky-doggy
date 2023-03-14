import Link from "next/link";
import Image from "next/image";
var Navbar = function () {
    return (<nav>
      <div className="logo">
        <Image src="/dog6.png" alt="man-with-dag" width={128} height={128} priority/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/owneraccount/index">Owner</Link>
      <Link href="/walkeraccount/index">Walker</Link>
    </nav>);
};
export default Navbar;
//# sourceMappingURL=Navbar.jsx.map