import TextLoopAnimation from "./components/TextLoopAnimation";
// import Image from "next/image";

// image imports
// import world_map from "../images/8.jpg";
// import play_store from "../images/get-it-on-google-play-badge.png";
// import app_store from "../images/app store badge.png";
// import user1 from "../images/User1.png";
// import user2 from "../images/User2.png";
import WhysUs from "./components/WhyUs";
import WeAreMembersOf from "./components/WeAreMembersOf";
import HowItWorks from "./components/HowItWorks";
import WhoWeserve from "./components/WhoWeserve";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Home() {
  const TEXTS: string[] = ["Plastics", "Papers", "Cartons", "Metals", "Cans"];

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center to-[#11100f relative overflow-hidden bg-[#001402 bg-[#F8FFF4] bg-gradient-to-b from-[#11100f pb-32 sm:pt-40 pt-20 md:pb-32 md:text-center min-h-screen h-full">
          {/* <div className="bg-white rounded-lg shadow-md absolute left-[6%] sm:top-[10%] top-[2%] z-10 p-2 text-[#1d1d1d] text-xs w-72 float">
            <Image src={user1} alt="user1" width={30} height={30} />
            <p className="font-medium my-1.5">
              You Confirmed a Drop-Off request
            </p>
            <p className="font-satoshi_Variable">20 MINS ago</p>
          </div> */}
          <div className="absolute inset-0 min-h-screen animate-wide bg-hero bg opacity-"></div>

          <section className="h-full max-w-6xl w-full px-4 sm:px-0 sm:py-16 flex flex-col items-center isolate z-[90]">
            {/* <Image
              src={world_map}
              className="absolute inset-0 w-screen h-full z-0"
              alt="logo"
              width={120}
              height={120}
            /> */}

            <div className="w-full text-left sm:text-center sm:space-y-3 font-satoshi">
              <h1 className="font-extrabold text-[40px] sm:text-6xl lg:text-7xl text-black">
                Turn your waste
              </h1>
              <div className="font-extrabold  text-primary_green text-[40px]  sm:text-6xl lg:text-7xl flex sm:justify-center justify-start items-center gap-3 sm:text-center flex-wrap">
                <TextLoopAnimation data={TEXTS} />{" "}
                <span className="text-black">into value</span>
              </div>
              <h1 className="font-extrabold text-[40px] sm:text-6xl lg:text-7xl text-black">
                With GreenLoop
              </h1>
            </div>

            <div className="w-full text-left sm:text-center mt-10 max-w-lg space-y-14">
              <p className="text-left sm:text-center text-slate-900">
                We aim to help individuals, businesses, and communities monetize
                waste materials like plastics, e-waste, and metals.
              </p>

              <div>
                <Link
                  href="/become-partner"
                  className="px-4 md:px-7 py-3 rounded-full text-white bg-primary_green hover:opacity-75 ease transition-all flex justify-center items-center gap-1 w-max self-center sm:mx-auto"
                >
                  <p className="text-base">Become a partner</p>
                  <BiChevronRight size={22} />
                </Link>
              </div>
            </div>

            {/* <div className="w-full flex justify-center items-center gap-8 mt-10 md:mt-20">
              <Image
                src={play_store}
                alt="app_store"
                height={100}
                width={160}
                className="w-[100px] h-[40px] md:w-[120px] md:h-[40px] rounded-md"
              />
              <Image
                src={app_store}
                alt="app_store"
                height={100}
                width={160}
                className="w-[100px] h-[40px] md:w-[120px] md:h-[40px] rounded-md"
              />
            </div> */}
          </section>
        </div>

        <WeAreMembersOf />
        <WhoWeserve />

        <HowItWorks />
        <WhysUs />
        <Footer />
      </div>
    </div>
  );
}
