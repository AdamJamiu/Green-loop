"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PartnerCard from "./PartnerCard";

const WhoWeserve = () => {
  return (
    <section className="w-full bg-white font-satoshi py-20">
      <div className="w-full max-w-xl flex flex-col justify-center items-center mx-auto">
        <h1 className="text-5xl font-medium w-full text-center leading-tight lg:block hidden">
          Empowering Communities for a Greener Tomorrow
        </h1>

        <h1 className="text-2xl md:text-4xl font-medium w-full text-center leading-tight hidden sm:block md:hidden">
          Empowering Communities for a Greener Tomorrow
        </h1>

        <h1 className="text-2xl font-medium w-full text-center leading-tight block sm:hidden">
          Empowering Communities for a Greener Tomorrow
        </h1>

        <p className="mt-7 text-gray-700">
          We partner to create sustainable recycling solutions for a better
          future.
        </p>
      </div>

      <div className="w-screen mt-20">
        <Swiper
          //   autoplay={Autoplay}
          speed={3000}
          navigation={false}
          scrollbar={false}
          spaceBetween={30}
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
          <SwiperSlide className="">
            <PartnerCard
              image="https://img.freepik.com/free-photo/medium-shot-smiley-woman-outdoors_23-2149351946.jpg?t=st=1734888461~exp=1734892061~hmac=f7a0bddc64658795b9ee4d752c55d4356860e19a71c2803bb5409b85d534541f&w=996"
              description="Pakam aims to improve citizens engagement in waste management through waste on-demand solutions and incentivisation, allowing citizens the opportunity to make sense of their waste either through our Earn-as-You Waste (Pakam Recycling) or Pay-as-You Waste (Pakam Waste Disposal) eco-system application."
              title="Citizens"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PartnerCard
              image="https://img.freepik.com/free-photo/smiling-woman-writing-notes-tablet-digital-device_53876-128806.jpg?t=st=1734889609~exp=1734893209~hmac=f7f2e2dcef4295982807f659c6414325513afb328ba9a9d7b309cbe48ecf84d0&w=996"
              description="Pakam aims to enable the waste management ecosystem businesses by optimizing their collections and operations to ensure a seamless business transaction flow."
              title="Business Operators"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PartnerCard
              image="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346619.jpg?t=st=1734889712~exp=1734893312~hmac=a83d6f5250ad13546ba51ab09dc64d5b0799bd309ffa6f56d9b1d608f90b6d1b&w=996"
              description="Pakam is proffering solutions for the government and its agencies to build data for insight, track inclusion and build resilience through our smart enforcement and reporting platform."
              title="Agencies"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PartnerCard
              image="https://img.freepik.com/free-photo/medium-shot-smiley-woman-outdoors_23-2149351946.jpg?t=st=1734888461~exp=1734892061~hmac=f7a0bddc64658795b9ee4d752c55d4356860e19a71c2803bb5409b85d534541f&w=996"
              description="Pakam aims to improve citizens engagement in waste management through waste on-demand solutions and incentivisation, allowing citizens the opportunity to make sense of their waste either through our Earn-as-You Waste (Pakam Recycling) or Pay-as-You Waste (Pakam Waste Disposal) eco-system application."
              title="Citizens"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default WhoWeserve;
