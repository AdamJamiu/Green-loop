"use client";

import { useEffect, useState } from "react";

type ITopPageProps = {
  title: string;
  subTitle?: string;
};

const TopPageName = ({ title, subTitle }: ITopPageProps) => {
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
    <div
      className={`${
        scrollPosition > 40 ? "h-[10vh]" : "md:h-[30vh] h-[25vh]"
      } z-10 bg-[#1A1F1A bg-transparent flex flex-col justify-end items-center font-satoshi pb-10 gap-4`}
    >
      <h1 className="w-full text-center text-slate-900 text-xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="w-full text-center text-slate-600 text-sm md:text-base">
        {subTitle}
      </p>
    </div>
  );
};

export default TopPageName;
