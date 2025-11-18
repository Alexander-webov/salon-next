import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import Container from "./Container";

function NavBar() {
  return (
    <Container>
      <div className="py-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            {" "}
            <Image src={logo} alt="stylicle" width={194} height={42} />
          </Link>

          <ul className="flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
