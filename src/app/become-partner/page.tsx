"use client";

import HowItWorks from "../components/HowItWorks";
import StickyFaq from "../components/StickyFaq";
import SignUpAs from "../components/SignUpAs";
import BecomeGreenHero from "../components/BecomeGreenHero";
import WhysUs from "../components/WhyUs";

const Page = () => {
  return (
    <section className="w-full h-full py-20 scroll-smooth">
      <BecomeGreenHero />
      <div className="sm:px-10 md:px-20 lg:px-36 xl:px-40 px-4 mt-10">
        <SignUpAs />
      </div>
      <WhysUs />
      <HowItWorks />
      <section className="sm:px-10 md:pl-20 lg:pl-36 px-4 mt-10 w-full lg:w-[80%]">
        <StickyFaq />
      </section>
    </section>
  );
};

export default Page;
