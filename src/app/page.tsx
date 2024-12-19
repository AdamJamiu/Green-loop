import Image from "next/image";
import world_map from "../images/World-Map-1.png";
import play_store from "../images/get-it-on-google-play-badge.png";
import app_store from "../images/app store badge.png";
import TextLoopAnimation from "./components/TextLoopAnimation";

export default function Home() {
  return (
    <div className="">
      <div className="w-full flex flex-col items-center justify-center relative bg-[#E2F6DF]">
        <section className="min-h-screen h-full max-w-6xl w-full :isolated px-4 sm:px-0 py-16 flex flex-col items-center">
          <Image
            src={world_map}
            className="absolute inset-0 w-screen h-full z-0"
            alt="logo"
            width={120}
            height={120}
          />
          <div className="w-full text-center space-y-3">
            <h1 className="font-bold  text-[#14261c] text-3xl md:text-5xl lg:text-6xl">
              Turn your waste
            </h1>
            <div className="font-bold  text-primary_green text-3xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center gap-3 text-center">
              <TextLoopAnimation /> <span>into value</span>
            </div>
            <h1 className="font-bold  text-[#14261c] text-3xl md:text-5xl lg:text-6xl">
              With Wecyclers
            </h1>
          </div>

          <div className="w-full flex justify-center items-center gap-8 mt-20">
            <Image src={play_store} alt="app_store" height={100} width={160} />
            <Image src={app_store} alt="app_store" height={100} width={160} />
          </div>
        </section>
      </div>
    </div>
  );
}
