"use client";

import Image from "next/image";
import logo from "../../../images/pkam-logo.svg";
import NavDropdown from "../navbar/NavDropdown";
import { help, products } from "@/data/nav";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
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
        scrollPosition > 40
          ? "backdrop-blur-sm shadow-lg bg-gray-100"
          : "bg-[#E2F6DF] md:pt-4"
      } w-full px-4 md:px-10 lg:pl-40 lg:pr-52 md:pr-40 flex justify-between items-center font-satoshi sticky top-0 right-0 left-0 ease duration-200 transition-all z-50`}
    >
      <Image
        src={logo}
        alt="logo"
        width={120}
        height={120}
        className="w-[100px] h-[60px] md:w-[120px] md:h-[90px]"
      />

      <div className="md:flex space-x-12 text-sm items-center hidden">
        <NavDropdown title="Company" data={products} />
        <NavDropdown title="Products" data={products} />
        <NavDropdown data={help} title="Help Center" />
        <NavDropdown data={help} title="Help Center" />

        <div className="flex justify-start items-center gap-4 flex-nowrap">
          <button className="px-3 md:px-5 py-2 rounded-full bg-[#D7D9DA] text-[#1f2937] hover:bg-[#C7CACD] text-sm">
            Sign In
          </button>

          <button
            className={`${
              scrollPosition < 40 ? "hidden" : "block"
            } px-3 md:px-5 py-2 rounded-full bg-btn_primary text-white hover:opacity-75 ease transition-all text-sm`}
          >
            Get started
          </button>
        </div>
      </div>
      <button className="text-primary_success md:hidden block">
        <RiMenu3Fill size={26} />
      </button>
    </nav>
  );
};

export default Navbar;
