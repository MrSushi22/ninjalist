import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja list</h1>
      </div>
      <Link href="/">
        <a>Home</a>
        </Link>
    </nav>
   );
}

export default Navbar;
