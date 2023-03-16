import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {
  const { userId, isOwner, isWalker } = useAuth();

  return (
    <nav>
      <div className="logo">
        <Image
          src="/dog6.png"
          alt="man-with-dag"
          width={128}
          height={128}
          priority
        />
      </div>
      {/* <Link href="/">Home</Link> */}
      {isOwner && <Link href="/owneraccount/">Owner</Link>}
      {isWalker && <Link href="/walkeraccount/">Walker</Link>}
      {userId ? (
        <Link href="/logout">Logout</Link>
      ) : (
        <Link href="/">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
