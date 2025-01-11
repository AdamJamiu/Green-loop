"use client";

import Image from "next/image";

import picker from "../../images/pickers.jpg";
import agent_image from "../../images/agent.jpg";
import partner from "../../images/partner.jpg";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { SignUpAsCardProps } from "@/types";
import { motion } from "framer-motion";

const SignUpAs = () => {
  return (
    <div id="sign-up-as" className="w-full font-satoshi my-16">
      <h1 className="w-full text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
        Sign up as ...
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 sm:mt-28">
        <SignUpAsCard
          description="Individuals who are interested in collecting recyclable materials from homes and businesses."
          title="A Green Individual"
          link="/signup-individual"
          img={picker}
        />

        <SignUpAsCard
          description="Coordinate and manage community recycling efforts."
          title="A Green Agent"
          link="/signup-agent"
          img={agent_image}
          delay={1}
        />
        <SignUpAsCard
          description="Collaborate to promote and support recycling initiatives."
          title="A Green Partner"
          link="/signup-partner"
          img={partner}
          delay={2}
        />
      </div>
    </div>
  );
};

const SignUpAsCard = ({
  title,
  description,
  link,
  img,
  delay = 0.5,
}: SignUpAsCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Initial state: Slightly below and invisible
      animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing
        delay,
      }}
      className="w-full flex flex-col justify-center items-center md:justify-start md:items-start font-satoshi space-y-5"
    >
      <Image
        src={img}
        alt="image"
        width={200}
        height={210}
        className="w-[260px] h-[220px] md:w-[300px] md:h-[270px] rounded-lg object-cover mr-auto sm:m-0"
      />

      <p className="w-full text-left font-medium text-lg sm:text-xl">{title}</p>

      <p className="font-light">{description}</p>

      <Link
        href={link}
        className="text-primary_green border-[#5eb237] border flex justify-center hover:bg-slate-200 items-center gap-2 group self-start px-7 py-2 rounded-full"
      >
        <p>Get started</p>
        <BiChevronRight
          size={23}
          className="group-hover:translate-x-1 ease transition-all duration-300"
        />
      </Link>
    </motion.div>
  );
};

export default SignUpAs;
