"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import logo from "../../../images/logo design white.png";
import Link from "next/link";
import { NavAccordion } from "../ui/Accordion";
import { company, help, products } from "@/data/nav";

interface IMobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({ isOpen, setIsOpen }: IMobileNavProps) => {
  return (
    <nav
      className={`${
        isOpen
          ? "z-[99999] translate-x-0"
          : "translate-x-[1000px] opacity-0 -z-[999]"
      } ease-linear transition-all duration-300 h-screen fixed inset-0 bg-white md:hidden block`}
    >
      <div className="w-full pt-3">
        <Image
          src={logo}
          alt="logo"
          width={120}
          height={120}
          className="w-[90px] h-[70px] md:w-[110px] md:h-[90px]"
        />
        <IoClose
          role="button"
          className="absolute top-7 right-5 text-black"
          onClick={() => setIsOpen(false)}
          size={24}
        />

        <div className="p-4 flex flex-col gap-3 text-sm items-center justify-center w-full">
          <NavAccordion
            label="Company"
            ContentElement={
              <div className="flex flex-col justify-start items-start gap-3 pl-4 border-l border-primary_success">
                {company.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-lg text-slate-500 font-satoshi"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            }
          />
          <NavAccordion
            label="Products"
            ContentElement={
              <div className="flex flex-col justify-start items-start gap-3 pl-4 border-l border-primary_success">
                {products.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-lg text-slate-500 font-satoshi"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            }
          />
          <NavAccordion
            label="Help Center"
            ContentElement={
              <div className="flex flex-col justify-start items-start gap-3 pl-4 border-l border-primary_success">
                {help.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-lg text-slate-500 font-satoshi"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            }
          />

          <div className="flex justify-start items-center gap-4 flex-nowrap mt-4 w-full">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-full bg-[#D7D9DA] text-[#1f2937] hover:bg-[#C7CACD]"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="px-5 py-2.5 rounded-full bg-btn_primary text-white hover:opacity-75 ease transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
