"use client";

import { motion } from "framer-motion";
import Counter from "./global/Counter";
import { useState } from "react";
import VideoPlayer from "./global/VideoPlayer";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import videoThumbnail from "../../images/thumbnail.png";

const MakeDifferenceSection = () => {
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

  // const handleOpenVideoPlayer = useCallback(() => {

  // }, [])
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
      animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing
      }}
    >
      <div className="bg-[#DFF0D7] w-full grid grid-cols-1 lg:grid-cols-2 px-4 md:px-7 lg:px-10 py-14 my-6 xl:gap-10 lg:gap-20 gap-20 relative lg:h-[590px]">
        <div className="w-full flex flex-col justify-between items-start">
          <div>
            <h1 className="font-semibold text-2xl md:text-3xl text-[#0C0C0C]">
              Make a difference, earn while you help the Planet
            </h1>
            <p className="mt-5 text-[#676767]">
              See how Greenloop is transforming waste management and creating a
              sustainable future.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 mt-10">
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-primary_green text-2xl flex sm:w-full text-left ">
                <Counter target={20} speed={80} /> +
              </h2>
              <p className="text-sm text-[#676767]  text-left w-full">
                See how Greenloop is transforming waste managem
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-primary_green text-2xl flex sm:w-full text-left ">
                <Counter target={2} speed={80} />
                k+
              </h2>
              <p className="text-sm text-[#676767] text-left w-full">
                See how Greenloop is transforming waste managem
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-primary_green text-2xl flex sm:w-full text-left">
                <Counter target={5} speed={80} />
                k+
              </h2>
              <p className="text-sm text-[#676767] text-left w-full">
                See how Greenloop is transforming waste managem
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-[76%] rounded-xl mx-auto lg:ml-auto">
          <div className="absolute inset-0 z-10 opacity-65 bg-black rounded-2xl"></div>
          <button
            onClick={() => setIsVideoPlayerOpen(true)}
            className="hover:opacity-55 p-2.5 rounded-full hover:scale-105 ease transition-all duration-500 absolute z-[90] -translate-y-[45%] -translate-x-[45%] top-[50%] left-[50%]"
          >
            <BsPlayCircleFill size={43} color="white" />
          </button>
          <Image
            alt="thumbnail"
            src={videoThumbnail}
            className="rounded-xl lg:h-[500px] object-contain"
          />
        </div>
      </div>
      <VideoPlayer open={isVideoPlayerOpen} setOpen={setIsVideoPlayerOpen} />
    </motion.div>
  );
};

export default MakeDifferenceSection;
