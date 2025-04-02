"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../images/logo white.png";
import EnterVerifyEmail from "./_components/EnterVerifyEmail";
import EnterOtpScreen from "./_components/EnterOtpScreen";

const Page = () => {
  const [active, setActive] = useState<number>(1);
  const [email, setEmail] = useState("");

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70 font-satoshi">
      <div className="col-span-4 md:block hidden">
        <div className="bg-[#11161b] text-white px-8 py-12 md:p-16 overflow-hidden pattern-1 h-full flex flex-col">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={145} width={145} />
          </Link>

          <h2 className="mt-16 text-[#cbd5e1] text-xl sm:text-2xl sm:w-[69%]">
            Make Every Decision Count for a Sustainable Tomorrow
          </h2>
        </div>
      </div>

      {active === 1 ? (
        <EnterVerifyEmail
          setEmail={setEmail}
          email={email}
          setActive={setActive}
          active={active}
        />
      ) : null}

      {active === 2 ? (
        <EnterOtpScreen
          setEmail={setEmail}
          email={email}
          setActive={setActive}
          active={active}
        />
      ) : null}
    </div>
  );
};

export default Page;
