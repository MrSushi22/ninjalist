import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link legacyBehavior href="/">
          <a>
            <Image src="/logo1.png" width={170} height={130} />
          </a>
        </Link>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja List</Link>
    </nav>
  );
}

export default Navbar;
