"use client";

import { useEffect, useRef } from "react";
import img1 from "../../images/C40 cities logo.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.png";
import img10 from "../../images/Lagos state.png";
import img7 from "../../images/Lasepa.png";
import img8 from "../../images/Rethinking.png";
import Image from "next/image";

const WeAreMembersOf = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      let scrollAmount = 0;

      const scrollMarquee = () => {
        scrollAmount += 1; // Adjust this value to change speed
        if (
          marqueeElement.scrollLeft + marqueeElement.clientWidth >=
          marqueeElement.scrollWidth
        ) {
          scrollAmount = 0; // Reset scroll
        }
        marqueeElement.scrollLeft = scrollAmount;
      };

      const interval = setInterval(scrollMarquee, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full font-satoshi flex flex-col justify-center items-start pt-10 pb-20 bg-white">
      <h1 className="sm:text-lg md:text-xl text-[#35393f] uppercase w-full text-center font-bold">
        We are Members Of.
      </h1>

      <div className="relative">
        {/* Left and right fade effect */}
        <div className="h-20 w-20 absolute top-0 bottom-0 left-0 bg-gradient-to-r from-white to-transparent z-40 hidden md:block"></div>
        <div className="h-20 w-20 absolute top-0 bottom-0 right-0 bg-gradient-to-l from-white to-transparent z-40 hidden md:block"></div>

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="flex overflow-x-hidden whitespace-nowrap items-center mt-10 space-x-14"
        >
          {[img1, img10, img2, img3, img4, img5, img6, img7, img8].map(
            (logo: any, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-12 w-auto object-contain"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeAreMembersOf;
