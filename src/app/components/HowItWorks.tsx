"use client";

import HowItWorkCard from "./HowItWorkCard";
import { FaUserPlus } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import CurveSvg from "./CurveSvg";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-28 xl:pb-96 bg-primary_green font-satoshi w-full relative overflow-hidden z-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
        animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
        transition={{
          duration: 0.6, // Animation duration
          ease: "easeOut", // Smooth easing
        }}
        className="w-full flex flex-col justify-center items-center"
      >
        <h2 className="font-semibold text-2xl md:text-5xl text-white">
          How it works
        </h2>
        <p className="mt-3 text-balance text-white">
          Get started in these simple steps:
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center max-w-6xl mt-14 px-4 xl:px-0">
          <HowItWorkCard
            Icon={FaUserPlus}
            title="Create an account"
            description="Get the GreenLoop Household App from Google Play Store or IOS App Store"
          />
          <HowItWorkCard
            Icon={GiConfirmed}
            title="Verify and sign in"
            description="Verify your phone number, fill in necessary details, and sign in to the app."
          />
          <HowItWorkCard
            Icon={BsCardChecklist}
            title="Submit Request"
            description="Click on your preferred recycling option, fill in the required details, and submit your request"
          />
          <HowItWorkCard
            Icon={TfiWallet}
            title="Pickup schedule"
            description="Click on your preferred recycling option, fill in the required details, and submit your request"
          />
        </div>
      </motion.div>

      <CurveSvg
        className="xl:block hidden absolute bottom-[-2rem] w-full text-gray-100 fill-gray-50"
        fill=""
      />
    </section>
  );
};

export default HowItWorks;
