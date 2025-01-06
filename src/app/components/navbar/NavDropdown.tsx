"use client";

import { TNavDropdown } from "@/types/nav.types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const NavDropdown = ({ title, data }: TNavDropdown) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className="relative font-satoshi group"
    >
      <button
        onMouseOver={() => setOpen(true)}
        className={`${
          open ? "border-b-gray-800" : " border-transparent"
        } flex items-center gap-2 text-sm hover:text-slate-300 ease transition-all`}
        onMouseEnter={() => setOpen(true)}
      >
        {title}
        <BiChevronDown />
      </button>

      {/* dropdown content */}
      <div
        ref={dropdownRef}
        className={`${
          open ? "z-[100]" : "-z-[100] opacity-0 translate-y-10"
        } w-[450px] min-w-max absolute top-5 -left-16 z-[90] ease transition-all duration-300 pt-8`}
      >
        <div className="grid text-black bg-white rounded-xl shadow-lg py-7   px-6 grid-cols-1 sm:grid-cols-2 gap-2">
          {data.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center space-x-3 w-full hover:bg-gray-100 p-5 rounded-xl"
            >
              <div
                className={`${
                  index === 0
                    ? "bg-primary_success"
                    : index === 1
                    ? "bg-primary_yellow"
                    : index === 2
                    ? "bg-red-500"
                    : "bg-blue-500"
                } rounded-full p-2 text-xl md:text-2xl text-white`}
              >
                {item.icon}
              </div>
              <p className="text-sm w-full">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
