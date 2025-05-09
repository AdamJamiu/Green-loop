"use client";

import TopPageName from "../components/TopPageName";
import Image from "next/image";
import team_image from "../../images/team/DSC_4389.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { RiLinkedinBoxLine } from "react-icons/ri";
import AppInput, { AppTextArea } from "../components/ui/Input";
import { useRef, useState } from "react";
import StickyFaq from "../components/StickyFaq";
import { motion, useInView } from "framer-motion";
import LocationMap from "../components/LocationMap";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const messageInputRef = useRef(null); // Create a reference to the component
  const ismessageInputInView = useInView(messageInputRef, {
    once: true,
    margin: "-100px 0px",
  }); // Observe the component

  return (
    <div className="w-full h-full py-20 font-satoshi">
      <TopPageName
        title="We'd love to hear from you"
        subTitle="Have any questions or feedback? We'd love to hear from you"
      />

      <div className="flex justify-center items-center w-full">
        <section className="md:pt-20 xl:px-28 font-satoshi max-w-[80rem] p-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
              animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-full flex justify-center items-center flex-col gap-5"
            >
              <h1 className="lg:font-semibold text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
                Reach out to us anywhere
              </h1>
              <p className="text-gray-600">
                Read through the FAQs and help articles, call, Whatsapp or use
                the form here, we are always ready to serve you.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }} // Initial state: Slightly below and invisible
              animate={{ y: 0, opacity: 1 }} // Final state: At its original position and visible
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8,
              }}
            >
              <Image src={team_image} alt="team image" className="rounded-xl" />
            </motion.div>
          </div>

          {/*  */}

          <div className="w- my-20 w-screen">
            <LocationMap />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-28">
            <div className="w-full">
              <h1 className="text-lg md:text-xl ">Visit GreenLoop</h1>
              <p className="mt-6 text-gray-700">
                Our office is Augusto Estate, Agege Lagos, Lagos. We are open
                Monday through Friday from 9:00am to 5:00pm
              </p>

              <div className="mt-7 mb-4 flex justify-start items-center gap-3">
                <MdOutlineMailOutline
                  size={37}
                  className="p-2 rounded-full border border-gray-300"
                />
                <div className="text-sm">
                  <p className="text-gray-800">Email address</p>
                  <Link
                    className="mt-1"
                    href="mailto:helpdesk@Greenloopcompany.com"
                  >
                    helpdesk@Greenloopcompany.com
                  </Link>
                </div>
              </div>

              <div className="mt-7 mb-4 flex justify-start items-center gap-3">
                <FaWhatsapp
                  size={37}
                  className="p-2 rounded-full border border-gray-300"
                />
                <div className="text-sm">
                  <p className="text-gray-800">Whatsapp</p>
                  <Link
                    className="mt-1"
                    target="_blank"
                    href="https://wa.me/+2349160004254"
                  >
                    +2349160004254
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex justify-start items-center gap-4">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/greenloopng?igsh=MWgwOWZudDV0YzNrMw=="
                  className="px-4 py-3 rounded-3xl border border-gray-300 hover:bg-gray-200"
                >
                  <FaInstagram size={28} />
                </Link>
                <Link
                  target="_blank"
                  href=""
                  className="px-4 py-3 rounded-3xl border border-gray-300 hover:bg-gray-200"
                >
                  <BsTwitterX size={24} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61571488022128&mibextid=ZbWKwL"
                  className="px-4 py-3 rounded-3xl border border-gray-300 hover:bg-gray-200"
                >
                  <LuFacebook size={25} />
                </Link>
                <Link
                  target="_blank"
                  href=""
                  className="px-4 py-3 rounded-3xl border border-gray-300 hover:bg-gray-200"
                >
                  <RiLinkedinBoxLine size={25} />
                </Link>
              </div>
            </div>

            <motion.div
              ref={messageInputRef}
              initial={{ y: 30, opacity: 0 }}
              animate={ismessageInputInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-full rounded-3xl p-4 sm:p-10 shadow-md bg-white"
            >
              <h3 className="text-lg">Let's start a conversation</h3>

              <form className="flex flex-col gap-6">
                <AppInput
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="Full name"
                  type="text"
                  className="mt-8"
                />
                <AppInput
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="Email address"
                  type="email"
                />
                <AppInput
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="Phone number (Optional)"
                  type="tel"
                />
                <AppTextArea
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="Your message"
                />
                <button className="flex justify-start items-center gap-2 rounded-full bg-primary_green text-white w-max px-5 py-1.5 mt-3 hover:bg-btn_primary">
                  <p>Send</p>
                  <BsSend />
                </button>
              </form>
            </motion.div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <StickyFaq />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
