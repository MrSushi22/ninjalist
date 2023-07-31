import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja list</h1>
      </div>
      <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja List</Link>
    </nav>
   );
}

export default Navbar;
