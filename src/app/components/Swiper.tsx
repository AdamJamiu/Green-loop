"use client";

import { wecyclersComments } from "@/data/comments";
import React, { useState } from "react";
import WhyUsCommentCard from "./WhyUsCommentCard";

type SwiperProps = {
  amount: number;
  children: React.ReactNode;
};

const Swiper = ({ amount, children }: SwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % amount);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + amount) % amount);
  };

  return (
    <div className="relative flex items-center justify-center w-full  mx-auto overflow-x-hidden">
      {/* Previous Button */}

      {/* Cards Wrapper */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {wecyclersComments.map((comment, index) => (
          <WhyUsCommentCard comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
