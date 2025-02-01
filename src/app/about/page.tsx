"use client";

// import TopPageName from "../components/TopPageName";
import team_image from "../../images/slide-4.jpg";
import Image from "next/image";

// icons import
import { PiRecycleDuotone } from "react-icons/pi";
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import { PiHandshakeDuotone } from "react-icons/pi";
// import Accordion from "../components/ui/Accordion";
import Team from "../components/Team";
import StickyFaq from "../components/StickyFaq";
import LocationMap from "../components/LocationMap";
import MakeDifferenceSection from "../components/MakeDifferenceSection";

const Page = () => {
  return (
    <div className="w-full h-full pb-20 font-satoshi">
      {/* <TopPageName title="About Us" /> */}

      <section className="pt-28 xl:px-28 w-full">
        {/* <LocationMap /> */}
        <div className="lg:p-16 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">
          <Image
            src={team_image}
            alt="team image"
            height={500}
            width={550}
            className="rounded-2xl w-[300px] h-[205px] sm:h-[360px] sm:w-full mx-auto"
          />

          <div className="w-full font-medium text-3xl sm:text-3xl text-center sm:text-left px-4 pt-10">
            <h1 className="font-semibold">Transforming Waste Into Wealth</h1>

            <p className="text-sm lg:text-base xl:text-lg mt-5 font-satoshi_Variable">
              Join GreenLoop Waste Services in revolutionizing waste management
              in Nigeria. Through innovative technology and sustainable
              practices, we empower individuals, businesses, and communities to
              monetize waste materials like plastics, e-waste, and metals. With
              the GreenLoop App, you can earn rewards while contributing to a
              cleaner, greener future. Together, let’s drive a circular economy
              and make a lasting impact on the environment.
            </p>
          </div>
        </div>

        {/* Make a ifference section */}
        <MakeDifferenceSection />

        <div id="mission" className="custom-scroll">
          <div
            id="vision"
            className="w-full mt-16 flex xl:flex-row flex-col justify-start items-start gap-5"
          >
            <h1 className="tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[45px] w-full xl:w-[69%] xl:text-left text-center pl-0 sm:pl-4 md:pl-16 md:sticky top-36">
              Who we are
            </h1>
            <div className="w-full p-4 h-full">
              <p className="text-sm xl:text-base pl-1 font-satoshi_Variable">
                GreenLoop Waste Services Limited is a waste management and
                recycling company based in Nigeria, dedicated to turning waste
                into value. Leveraging innovative technology and sustainable
                practices, we aim to help individuals, businesses, and
                communities monetize waste materials like plastics, e-waste, and
                metals. By incentivizing recycling through our digital platform,
                the GreenLoop App, we bridge the gap between waste generation
                and resource recovery, contributing to environmental
                sustainability and creating economic value.
              </p>

              <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-5 md:gap-10 font-satoshi_Variable">
                <div className="p-7 md:p-10 bg-white rounded-2xl border-gray-200 border">
                  <p className="">
                    <b>Vision:</b> To revolutionize waste management in Nigeria
                    by empowering communities to earn from waste, reducing
                    pollution, and driving a circular economy.
                  </p>
                </div>
                <div
                  id="mission"
                  className="p-7 md:p-10 bg-white rounded-2xl border-gray-200 border"
                >
                  <p className="">
                    <b>Mission:</b> To build a scalable, tech-driven waste
                    management system that rewards users, promotes recycling,
                    and fosters sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-16 flex xl:flex-row flex-col justify-start items-start gap-5">
            <h1 className="tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[45px] w-full xl:w-[69%] xl:text-left text-center pl-0 sm:pl-4 md:pl-16 md:sticky top-36">
              What we do
            </h1>
            <div className="w-full p-4">
              <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-5 md:gap-10 lg:gap-14">
                <div className="p-7 md:p-10 lg:py-16 bg-white rounded-2xl border-gray-200 border">
                  <PiRecycleDuotone
                    size={54}
                    color="red"
                    className="opacity-40"
                  />
                  <h2 className="font-medium text-lg mt-8">Recycling Hubs</h2>

                  <p className="mt-4 font-satoshi_Variable">
                    Create a network of recycling hubs across Nigeria to make
                    waste management accessible to everyone.
                  </p>
                </div>

                <div className="p-7 md:p-10 lg:py-16 bg-white rounded-2xl border-gray-200 border">
                  <PiHandshakeDuotone
                    size={54}
                    color="orange"
                    className="opacity-40"
                  />
                  <h2 className="font-medium text-lg mt-8">
                    Industrial Partnership
                  </h2>

                  <p className="mt-4 font-satoshi_Variable">
                    Partner with industries to supply high-quality recycled
                    materials and support the circular economy.
                  </p>
                </div>

                <div className="p-7 md:p-10 lg:py-16 bg-white rounded-2xl border-gray-200 border">
                  <PiMedalMilitaryDuotone
                    size={54}
                    color="blue"
                    className="opacity-40"
                  />
                  <h2 className="font-medium text-lg mt-8">
                    GreenLoop App Rewards
                  </h2>

                  <p className="mt-4 font-satoshi_Variable">
                    Create a network of recycling hubs across Nigeria to make
                    waste management accessible to everyone.
                  </p>
                </div>

                <div className="p-7 md:p-10 lg:py-16 bg-white rounded-2xl border-gray-200 border">
                  <PiMedalMilitaryDuotone
                    size={54}
                    color="green"
                    className="opacity-40"
                  />
                  <h2 className="font-medium text-lg mt-8">
                    10 Tons Monthly Recycling
                  </h2>

                  <p className="mt-4 font-satoshi_Variable">
                    Achieve collection and recycling of 10 tons of plastic waste
                    monthly within two years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team section */}
          <Team />

          <div className="my-20 flex justify-center items-center mx-auto">
            <LocationMap />
          </div>

          <div
            id="faqs"
            className="w-full mt-16 flex xl:flex-row flex-col justify-start items-start gap-5 md:p-0 p-4"
          >
            <h1 className="tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[45px] w-full xl:w-[69%] xl:text-left text-center pl-0 sm:pl-4 md:pl-16 md:sticky top-36">
              Frequently asked questions
            </h1>
            <StickyFaq />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
