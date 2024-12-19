import { BiChevronRight } from "react-icons/bi";
import BlobSvg from "./BlobSvg";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative font-satoshi">
      <BlobSvg color="" styles="lg:block hidden" />

      <div className="w-full bg-primary_green text-white">
        <div className="w-full flex flex-col justify-center items-center pb-10">
          <h2 className="text-5xl">Get weekly newsltetter</h2>
          <h2 className="text-5xl mt-3">directly into your inbox</h2>

          <form className="mt-16 flex justify-start gap-4 items-center">
            <input
              className="rounded-full w-56 py-3 pl-6 border-none outline-none bg-success_opacity text-gray-800 placeholder:text-gray-700 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
              placeholder="Full name"
            />
            <input
              type="email"
              className="gap-2 rounded-full w-64 py-3 pl-6 border-none outline-none bg-success_opacity text-gray-800 placeholder:text-gray-700 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
              placeholder="Email address"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex gap-2 items-center rounded-full bg-white text-gray-800 py-3 px-6 hover:opacity-75 ease transition-all"
            >
              <span>Subscribe</span>
              <BsArrowRight />
            </button>
          </form>
        </div>
        <div className="w-full text-center">
          © 2024 Wecyclers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
