import Image from "next/image";
import Newsletter from "../footers/Newsletter";
import BlobSvg from "./BlobSvg";

// image imports
import google_play from "../../../images/Google play.png";
import apple_store from "../../../images/apple.png";
import logo from "../../../images/pakam_logo_white.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative font-satoshi">
      <BlobSvg color="#1A1F1A" styles="lg:block hidden" />

      <div className="w-full bg-[#1A1F1A] text-white px-5 md:px-20 lg:px-24 pt-10 md:pt-0">
        <div className="w-full flex flex-col justify-center items-center pb-10">
          <h2 className="md:text-5xl text-3xl">Get weekly newsltetter</h2>
          <h2 className="md:text-5xl text-3xl mt-3">
            directly into your inbox
          </h2>

          {/* Subscribe to newsletters */}
          <Newsletter />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7 lg:gap-10 mb-10 mt-16">
          <div className="w-full">
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

          <ul className="text-white text-base sm:text-lg">
            <h2 className="font-satoshi">Partner with Pakam </h2>

            <div className="flex flex-col gap-2 justify-start items-start mt-2 font-satoshi_Variable text-white">
              <button className="hover:underline">Sign up as a business</button>
              <button className="hover:underline">
                Sign up as a collector
              </button>
              <button className="hover:underline">Partner with us</button>
            </div>
          </ul>

          {/* Company */}
          <ul className="text-white text-base">
            <h2 className="font-satoshi">Company</h2>

            <div className="flex flex-col gap-2 justify-start items-start mt-2 font-satoshi_Variable text-white">
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/faqs" className="hover:underline">
                FAQS
              </Link>
              <Link href="/reviews" className="hover:underline">
                Reviews
              </Link>
            </div>
          </ul>

          {/* Legal */}
          <ul className="text-white text-base">
            <h2 className="font-satoshi">Legal</h2>

            <div className="flex flex-col gap-2 justify-start items-start mt-2 font-satoshi_Variable text-white">
              <Link href="/cookiePolicy" className="hover:underline">
                Cookie Policy
              </Link>
              <Link href="/agreement" className="hover:underline">
                End User License Agreement
              </Link>
              <Link href="/privacyPolicy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms and Conditons
              </Link>
            </div>
          </ul>

          {/* Contact Us */}
          <ul className="text-white text-base">
            <h2 className="font-satoshi">Contact Us</h2>

            <div className="flex flex-col gap-2 justify-start items-start mt-2 font-satoshi_Variable text-white">
              <Link href="/cookiePolicy" className="hover:underline">
                Cookie Policy
              </Link>
              <a
                href="mailto:support@example.com"
                aria-label="Call us at +1 234 567 890"
              >
                info@weecooler.ng
              </a>
              <a href="tel:+1234567890" aria-label="Call us at +1 234 567 890">
                +1 (234) 567-890
              </a>
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
