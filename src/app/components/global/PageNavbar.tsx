"use client";

import Image from "next/image";
import logo from "../../../images/greenloop.png";
import NavDropdown from "../navbar/NavDropdown";
import { help, products } from "@/data/nav";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import MobileNav from "./MobileNav";

const PageNavbar = () => {
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
        scrollPosition >= 40
          ? "backdrop-blur-sm shadow-lg bg-gray-100 text-[#1f2937] py-3 md:py-8"
          : "bg-[#1A1F1A] py-7 text-white"
      } w-full px-4 lg:px-10 xl:pl-40 2xl:pr-52 xl:pr-40 flex justify-between items-center font-satoshi sticky top-0 right-0 left-0 ease duration-200 transition-all z-50`}
    >
      <Link href="/">
        {scrollPosition >= 40 ? (
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={120}
            className="w-[90px] h-[60px] md:w-[80px] md:h-[50px]"
          />
        ) : (
          <Image
            src={logo}
            alt="logo"
            width={90}
            height={90}
            className="w-[90px] h-[30px] md:w-[80px] md:h-[50px]"
          />
        )}
      </Link>

      <div
        className={`${
          scrollPosition >= 40 ? "space-x-8" : "space-x-12"
        } md:flex text-sm items-center hidden`}
      >
        <NavDropdown title="Company" data={products} />
        <NavDropdown title="Products" data={products} />
        <NavDropdown data={help} title="Help Center" />
        {/* <NavDropdown data={help} title="Help Center" /> */}

        <div className="flex justify-start items-center gap-4 flex-nowrap">
          <Link
            href="/login"
            className={` ${
              scrollPosition >= 40
                ? "bg-gray-300 hover:bg-gray-200 text-gray-600"
                : "bg-[#293129] hover:bg-[#445344]"
            } px-3 md:px-5 py-2 rounded-full text-sm`}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={`${
              scrollPosition < 40 ? "hidden" : "block"
            } px-3 md:px-5 py-2 rounded-full bg-btn_primary text-white hover:opacity-75 ease transition-all text-sm`}
          >
            Get started
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsMobileNvOpen(true)}
        className={`${
          scrollPosition >= 40 ? "text-primary_success" : "text-white"
        } md:hidden block`}
      >
        <RiMenu3Fill size={26} />
      </button>

      <MobileNav isOpen={isMobileNvOpen} setIsOpen={setIsMobileNvOpen} />
    </nav>
  );
};

export default PageNavbar;
