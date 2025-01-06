"use client";

import { greenLoopComments } from "@/data/comments";
import QuoteSvg from "./QuoteSvg";

import WhyUsCommentCard from "./WhyUsCommentCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WhysUs = () => {
  return (
    <section className="w-full py-28 bg-[#F1F1F8] font-satoshi">
      <div className="flex justify-center items-center flex-col -space-y-44 sm:-space-y-28">
        <div className="w-full max-w-5xl flex justify-center items-center">
          <div className="w-full bg-white rounded-lg shadow-lg px-10 py-7 relative h-96">
            <QuoteSvg className="absolute md:text-[7rem] text-[2rem] top-10 md:left-[7rem] text-black opacity-10" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold -end-full text-center mt-16">
              See what people are
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold -end-full text-center">
              saying about us
            </h1>
          </div>
        </div>

        <div className="w-screen">
          <Swiper
            autoplay={true}
            modules={[Autoplay]}
            speed={3000}
            navigation={false}
            scrollbar={false}
            centeredSlides
            centeredSlidesBounds
            centerInsufficientSlides
            spaceBetween={30}
            // different breakpoints
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 1.6,
              },
              768: {
                slidesPerView: 2.6,
              },
              1024: {
                slidesPerView: 3.6,
              },
            }}
            // how many slides to show
            slidesPerView={3.6}
          >
            {greenLoopComments.map((comment, index) => (
              <SwiperSlide key={index} className="pb-1">
                <WhyUsCommentCard comment={comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhysUs;
