import TextLoopAnimation from "./components/TextLoopAnimation";
import Image from "next/image";

// image imports
import world_map from "../images/World-Map-1.png";
import play_store from "../images/get-it-on-google-play-badge.png";
import app_store from "../images/app store badge.png";
import user1 from "../images/User1.png";
import user2 from "../images/User2.png";
import WhysUs from "./components/WhyUs";
import WeAreMembersOf from "./components/WeAreMembersOf";
import HowItWorks from "./components/HowItWorks";
import WhoWeserve from "./components/WhoWeserve";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center relative sm:bg-[#E2F6DF]">
        <div className="bg-white rounded-lg shadow-md absolute left-[6%] sm:top-[10%] top-[2%] z-10 p-2 text-[#1d1d1d] text-xs w-72 float">
          <Image src={user1} alt="user1" width={30} height={30} />
          <p className="font-medium my-1.5">You Confirmed a Drop-Off request</p>
          <p className="font-satoshi_Variable">20 MINS ago</p>
        </div>

        <div className="bg-white rounded-lg shadow-md absolute right-[10%] sm:bottom-[40%] bottom-[25%] z-10 p-2 text-[#1d1d1d] text-xs w-72 float delay-1000">
          <Image src={user2} alt="user1" width={30} height={30} />
          <p className="font-medium my-1.5">You Confirmed a Drop-Off request</p>
          <p className="font-satoshi_Variable">20 MINS ago</p>
        </div>

        <section className="min-h-screen h-full max-w-6xl w-full px-4 sm:px-0 sm:py-16 pt-20 flex flex-col items-center">
          <Image
            src={world_map}
            className="absolute inset-0 w-screen h-full z-0"
            alt="logo"
            width={120}
            height={120}
          />

          <div className="w-full sm:text-center space-y-3 font-satoshi mt-10 sm:mt-0">
            <h1 className="md:font-bold font-extrabold text-4xl sm:text-5xl md:text-6xl">
              Turn your waste
            </h1>
            <div className="md:font-bold font-extrabold  text-primary_green text-4xl sm:text-5xl md:text-6xl flex justify-center items-center gap-3 sm:text-center">
              <TextLoopAnimation />{" "}
              <span className="text-[#14261c]">into value</span>
            </div>
            <h1 className="md:font-bold font-extrabold  text-[#14261c] text-4xl sm:text-5xl md:text-6xl">
              With Wecyclers
            </h1>
          </div>

          <div className="w-full flex justify-center items-center gap-8 mt-10 md:mt-20">
            <Image
              src={play_store}
              alt="app_store"
              height={100}
              width={160}
              className="w-[100px] h-[40px] md:w-[120px] md:h-[50px] rounded-md"
            />
            <Image
              src={app_store}
              alt="app_store"
              height={100}
              width={160}
              className="w-[100px] h-[40px] md:w-[120px] md:h-[50px] rounded-md"
            />
          </div>
        </section>
      </div>

      <WeAreMembersOf />
      <WhoWeserve />

      <HowItWorks />
      <WhysUs />
    </div>
  );
}
