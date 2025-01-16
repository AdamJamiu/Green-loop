"use client";

import Image from "next/image";
import logo from "../../../images/logo design white.png";
// import logo_white from "../../../images/logo white.png";
import NavDropdown from "../navbar/NavDropdown";
import { company, help, products } from "@/data/nav";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileNvOpen, setIsMobileNvOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Tracks vertical scroll position
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <nav
      className={`${
        scrollPosition > 40
          ? "backdrop-blur-xl bg- top-0 right-0 left-0"
          : "pt-4"
      } w-full px-4 lg:px-10 2xl:pl-40 2xl:pr-52 lg:pr-40 fixed flex justify-between items-center font-satoshi ease duration-200 transition-all z-[110]`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="Greenloop logo"
          width={110}
          height={120}
          className="w-[80px] h-[60px] md:w-[110px] md:h-[90px]"
        />
      </Link>

      <div
        className={`${scrollPosition >= 40 ? "" : "text-inherit"}
        md:flex space-x-12 text-sm items-center hidden`}
      >
        <NavDropdown title="Company" data={company} />
        <NavDropdown title="Products" data={products} />
        <NavDropdown data={help} title="Help Center" />
        <Link
          href="/become-partner"
          className="px-3 md:px-5 py-2 rounded-full bg-btn_primary text-white hover:opacity-75 ease transition-all text-sm"
        >
          Become a partner
        </Link>

        <div className="flex justify-start items-center gap-4 flex-nowrap">
          <Link
            href="/login"
            className="px-3 md:px-5 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-600 text-sm"
          >
            Sign In
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsMobileNvOpen(true)}
        className="md:hidden block"
      >
        <RiMenu3Fill size={26} />
      </button>

      <MobileNav isOpen={isMobileNvOpen} setIsOpen={setIsMobileNvOpen} />
    </nav>
  );
};

export default Navbar;
