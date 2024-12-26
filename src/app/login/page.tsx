"use client";

import Image from "next/image";
import logo from "../../images/pakam_logo_white.png";
import AppInput from "../components/ui/Input";
import { FC, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70 font-satoshi">
      <div className="col-span-4 md:block hidden">
        <div className="bg-[#11161b] text-white px-8 py-12 md:p-16 overflow-hidden pattern-1 h-full flex flex-col">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={125} width={125} />
          </Link>

          <h2 className="mt-16 text-[#cbd5e1] text-xl sm:text-2xl sm:w-[69%]">
            Get insights to make better business
            <br /> decisions
          </h2>
        </div>
      </div>

      <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
        <section className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0">
          <h3 className="font-medium text-2xl sm:text-3xl">Login</h3>
          <p className="font-satoshi_Variable mt-2">
            Enter your credentials below to sign in to your account
          </p>

          <div className="w-full space-y-4 mt-7">
            <div className="w-full grid grid-cols-2 gap-4">
              <AppInput
                className="col-span-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email address"
              />

              <AppInput
                className="col-span-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
              />
            </div>
          </div>

          <div className="mt-7 flex justify-start items-start gap-3 w-full">
            <input type="checkbox" className="flex" />
            <div className="font-satoshi_Variable flex gap-1 items-start justify-start">
              Remember me
            </div>
          </div>

          <button className="px-4 py-2 rounded-3xl bg-primary_green text-white mt-14 hover:bg-primary_success ease transition-all">
            Login
          </button>

          <div className="flex justify-start items-center gap-2 mt-5 font-satoshi_Variable">
            <p>New to GreenLoop?</p>
            <Link
              href="/login"
              className="italic text-blue-600 hover:underline"
            >
              Sign up here
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
