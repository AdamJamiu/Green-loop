"use client";

import Image from "next/image";
import logo from "../../../images/greenloop.png";
import logo_white from "../../../images/pakam_logo_white.png";
import NavDropdown from "../navbar/NavDropdown";
import { help, products } from "@/data/nav";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";

const PageNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
          ? "backdrop-blur-sm shadow-lg bg-gray-100 text-[#1f2937]"
          : "bg-[#1A1F1A] pt-5 md:pt-7 text-white"
      } w-full px-4 md:px-10 lg:pl-40 lg:pr-52 md:pr-40 flex justify-between items-center font-satoshi sticky top-0 right-0 left-0 ease duration-200 transition-all z-50`}
    >
      {scrollPosition >= 40 ? (
        <Image
          src={logo}
          alt="logo"
          width={120}
          height={120}
          className="w-[100px] h-[60px] md:w-[120px] md:h-[90px]"
        />
      ) : (
        <Image
          src={logo_white}
          alt="logo"
          width={90}
          height={90}
          className="w-[90px] h-[30px] md:w-[120px] md:h-[40px]"
        />
      )}

      <div className="md:flex space-x-12 text-sm items-center hidden">
        <NavDropdown title="Company" data={products} />
        <NavDropdown title="Products" data={products} />
        <NavDropdown data={help} title="Help Center" />
        <NavDropdown data={help} title="Help Center" />

        <div className="flex justify-start items-center gap-4 flex-nowrap">
          <button
            className={` ${
              scrollPosition >= 40
                ? "bg-gray-300 hover:bg-gray-200 text-gray-600"
                : "bg-[#293129] hover:bg-[#445344]"
            } px-3 md:px-5 py-2 rounded-full text-sm`}
          >
            Sign In
          </button>

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
        className={`${
          scrollPosition >= 40 ? "text-primary_success" : "text-white"
        } md:hidden block`}
      >
        <RiMenu3Fill size={26} />
      </button>
    </nav>
  );
};

export default PageNavbar;
