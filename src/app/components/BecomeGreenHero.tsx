"use client";

import TextLoopAnimation from "./TextLoopAnimation";
import mockup from "../../images/mobile-mockup.png";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import TypewriterTextLoop from "./TypewriterTextLoop";
import BlobSvg from "./global/BlobSvg";

const BecomeGreenHero = () => {
  const TEXTS: string[] = [
    "Ensure waste scarcity",
    "Be your own boss",
    "Earn Money",
    "Recycle today",
    "Save the planet",
  ];

  return (
    <section className="w-full pb-48 lg:pb-96 bg-[#F8FFF4] font-inter pt-10 px-4 sm:px-10 md:px-28 lg:px-40 relative min-h-screen scroll-smooth">
      <div className="flex justify-between items-center gap-10 md:gap-2 lg:gap-0">
        <motion.div
          initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
          animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
          transition={{
            duration: 0.6, // Animation duration
            ease: "easeOut", // Smooth easing
          }}
          className="w-full space-y-10"
        >
          <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl space-y-4">
            <h1>
              <TypewriterTextLoop data={TEXTS} />
            </h1>
            <h1>
              with <span className="text-primary_green">GreenLoop</span>
            </h1>
          </div>
          <p className="text-base md:text-lg">
            Let’s work together to create a world with minimal waste.
          </p>

          <Link
            href="#sign-up-as"
            className="bg-primary_green text-white border flex justify-center hover:bg-slate-200 items-center gap-2 group self-start px-6 py-2.5 rounded-full w-max"
          >
            <p>Join now</p>
            <BiChevronRight
              size={23}
              className="group-hover:translate-x-1 ease transition-all duration-300"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
          animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
          transition={{
            duration: 0.6,
            ease: "easeIn",
            delay: 0.5,
          }}
          className="w-full"
        >
          <Image src={mockup} alt="mobile app mockup" />
        </motion.div>
      </div>

      <BlobSvg
        className="absolute left-0 right-0 -bottom-10 lg:block hidden"
        color="#F1F1F8"
      />
    </section>
  );
};

export default BecomeGreenHero;
