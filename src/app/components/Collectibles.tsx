"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CollectibleItem from "./CollectibleItem";
import bottles from "../../images/Shampoo.png";
import nylon from "../../images/Nylon.png";
import can from "../../images/Can.png";
import papers from "../../images/Essay.png";
import beam from "../../images/beam.svg";
import cartons from "../../images/Carton.png";
import Image from "next/image";
import team1 from "../../images/team/team-5.jpg";
import team2 from "../../images/team/DSC_223.jpg";
import team3 from "../../images/team/DSC_4366.jpg";
import team4 from "../../images/team/DSC_4389.jpg";
import team5 from "../../images/team/DSC_4395.jpg";
import team6 from "../../images/team/DSC_4399.jpg";
import team7 from "../../images/team/DSC_4423.jpg";
import team8 from "../../images/team/DSC_4441.jpg";
import team9 from "../../images/team/DSC_4447.jpg";
import team10 from "../../images/team/DSC_4451.jpg";
import team11 from "../../images/team/DSC_4450.jpg";
import team12 from "../../images/team/DSC_4459.jpg";
import team13 from "../../images/team/DSC_4471.jpg";
import { price_list } from "@/data/price";

const Collectibles = () => {
  return (
    <section className="w-full py-20 font-satoshi overflow-hidden">
      <h1 className="w-full text-center font-semibold text-lg sm:text-2xl">
        COLLECTIBLES
      </h1>
      <div className="w-screen mt-20">
        <Swiper
          autoplay={true}
          modules={[Autoplay]}
          speed={3000}
          navigation={false}
          scrollbar={false}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1.6,
            },
            640: {
              slidesPerView: 2.6,
            },
            768: {
              slidesPerView: 3.6,
            },
            1024: {
              slidesPerView: 4.6,
            },
          }}
          // how many slides to show
          slidesPerView={4.6}
        >
          <SwiperSlide>
            <CollectibleItem name="Bottles" img={bottles} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectibleItem name="Nylons" img={nylon} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectibleItem name="Cartons" img={cartons} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectibleItem name="Cans" img={can} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectibleItem name="Papers" img={papers} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectibleItem name="Aluminum" img={beam} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Price list */}

      <div className="py-16 bg-[#E9F9E0]">
        <h2 className="text-black font-semibold text-left md:text-center text-2xl md:text-3xl lg:text-4xl">
          Item Price List
        </h2>

        <div className="max-w-4xl sm:mx-auto w-full overflow-hidden mt-16">
          <table className="min-w-max w-full overflow-x-auto border border-gray-800">
            <thead className="border-b border-gray-800">
              <th className="rounded-tl-lg py-3 pl-7 text-left border-r border-gray-800">
                Item
              </th>
              <th className="rounded-tr-lg p-3 text-left">Value (Per 1)</th>
            </thead>

            <tbody className="w-full">
              {price_list.map((item, index) => (
                <tr key={index} className="w-full border-b border-gray-800">
                  <td className="border-r border-gray-800 p-4 pl-7">
                    {item.name}
                  </td>
                  <td className="p-4">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative w-full h-80">
        <div className="flex justify-center items-center h-full w-full pl-4 pr-2 z-50">
          <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] flex justify-center items-center">
            <h1 className="self-center font-semibold text-white text-3xl sm:text-4xl md:text-5xl z-50 isolate text-center">
              Collecting recycles and safeguarding the environments
            </h1>
          </div>
        </div>

        <div className="bg-[#0000009a] absolute h-[400px] inset-0 z-20"></div>

        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-0">
              <Image
                alt="team1"
                height={250}
                src={team1}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team2}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team3}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team4}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team5}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team6}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team7}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team8}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team9}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team10}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team13}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team1}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team11}
                className="h-full w-full object-cover"
              />
              <Image
                alt="team1"
                height={250}
                src={team12}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collectibles;
