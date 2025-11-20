import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

import logo from "@/public/logo.png";

import iconsoc1 from "@/public/icon-soc1.png";
import iconsoc2 from "@/public/icon-soc2.png";
import iconsoc3 from "@/public/icon-soc3.png";
import iconsoc4 from "@/public/icon-soc4.png";

import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="bg-[#241520] pt-20 text-white">
      <Container>
        <div className="flex justify-between items-center pb-20 border-b border-white flex-wrap gap-5">
          <Image src={logo} alt="stylicle" width={194} height={42} />
          <ul className="flex gap-x-3">
            <li>
              <Link href="/">
                <Image
                  src={iconsoc1}
                  alt="soc"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                />{" "}
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={iconsoc2}
                  alt="soc"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                />{" "}
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={iconsoc3}
                  alt="soc"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                />{" "}
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={iconsoc4}
                  alt="soc"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                />{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 flex justify-between mb-40 flex-wrap">
          <div>
            <h4
              className={`text-2xl  font-bold ${playfairDisplay.className} mb-5`}
            >
              Explore
            </h4>
            <ul className="flex flex-col gap-y-1">
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
          <div>
            <h4
              className={`text-2xl  font-bold ${playfairDisplay.className} mb-5`}
            >
              Utility Pages
            </h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <Link href="/">Privacy Policy </Link>
              </li>
              <li>
                <Link href="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`text-2xl  font-bold ${playfairDisplay.className} mb-5`}
            >
              Keep in Touch
            </h4>
            <ul className="flex flex-col gap-y-1 ">
              <li className="flex gap-2">
                <span className="font-bold">Address :</span>
                <p>Mariendalsvej 50D 2 2000 Frederiksberg.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Mail :</span>
                <p>support@servicemarket.com</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Phone :</span>
                <p>(+22) 123 - 4567 - 900</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="bg-[#160813] text-center p-5">
        Copyright 2025, ServiceMarket.dk | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
