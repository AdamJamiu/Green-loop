"use client";

import Image from "next/image";
import logo from "../../images/logo white.png";
import { FC, useState } from "react";
import Link from "next/link";
import RegisterScreen from "./_components/RegisterScreen";
import EnterOtpScreen from "./_components/EnterOtpScreen";

export interface PageType extends FC {
  excludeLayout?: boolean;
}

const Page: PageType = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full min-h-screen h-full flex flex-col lg:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70 font-satoshi">
      <div className="col-span-4 lg:block hidden relative">
        <div className="bg-[#11161b] text-white px-8 py-12 md:p-16 overflow-hidden pattern-1 h-full flex flex-col fixed">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={145} width={145} />
          </Link>

          <h2 className="mt-16 text-[#cbd5e1] text-xl sm:text-2xl sm:w-[69%] font-satoshi">
            Make Every Decision Count for a Sustainable Tomorrow
          </h2>
        </div>
      </div>

      {active === 1 ? <RegisterScreen setActive={setActive} /> : null}
      {active === 2 ? <EnterOtpScreen /> : null}
    </div>
  );
};

Page.excludeLayout = true;

export default Page;
