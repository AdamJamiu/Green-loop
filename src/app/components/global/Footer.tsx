import Image from "next/image";
import Newsletter from "../footers/Newsletter";
import BlobSvg from "./BlobSvg";

// icons imports
// import { BsArrowRight } from "react-icons/bs";

// image imports
import google_play from "../../../images/Google play.png";
import apple_store from "../../../images/apple.png";
import logo from "../../../images/pakam_logo_white.png";

const Footer = () => {
  return (
    <footer className="relative font-satoshi">
      <BlobSvg color="" styles="lg:block hidden" />

      <div className="w-full bg-primary_green text-white px-5 md:px-20 lg:px-24 pt-10 md:pt-0">
        <div className="w-full flex flex-col justify-center items-center pb-10">
          <h2 className="md:text-5xl text-3xl">Get weekly newsltetter</h2>
          <h2 className="md:text-5xl text-3xl mt-3">
            directly into your inbox
          </h2>

          {/* Subscribe to newsletters */}
          <Newsletter />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-16">
          <div>
            <Image
              src={logo}
              height={120}
              width={120}
              alt="logo"
              className="w-[100px] md:w-[120px]"
            />
            <p className="text-white font-satoshi_Variable mt-8 mb-4">
              Pakam enabling people, planet and profit
            </p>
            <div className="flex justify-start items-center gap-2">
              <Image
                src={google_play}
                height={40}
                width={120}
                alt="google play"
              />
              <Image
                src={apple_store}
                height={40}
                width={120}
                alt="apple play"
              />
            </div>
          </div>

          <ul className="text-white">
            <h2 className="font-satoshi">Partner with Pakam </h2>
            <button className="text-white font-satoshi_Variable mt-8 mb-4">
              Sign up as a business
            </button>
            <button className="text-white font-satoshi_Variable mt-8 mb-4">
              Sign up as a collector
            </button>
            <button className="text-white font-satoshi_Variable mt-8 mb-4">
              Partner with us
            </button>
            <div className="flex justify-start items-center gap-2">
              <Image
                src={google_play}
                height={40}
                width={120}
                alt="google play"
              />
              <Image
                src={apple_store}
                height={40}
                width={120}
                alt="apple play"
              />
            </div>
          </ul>
        </div>

        <div className="w-full text-center border-t border-t-[#cce6cc] pt-4">
          © 2024 Wecyclers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
