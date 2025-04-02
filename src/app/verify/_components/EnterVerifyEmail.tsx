"use client";

import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import logo from "../../../images/logo white.png";
import AppInput from "../../components/ui/Input";

interface IEnterOtpScreen {
  email: string;
  active?: number;
  setEmail: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<number>>;
}

const EnterVerifyEmail = ({
  setEmail,
  email,
  setActive,
  active,
}: IEnterOtpScreen) => {
  const handleSubmit = () => {
    setActive(2);
  };

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0"
      >
        <h3 className="font-medium text-2xl sm:text-3xl">Verify account</h3>
        <p className="font-satoshi_Variable mt-2">
          Enter your email address below to continue.
        </p>

        <div className="w-full space-y-4 mt-7">
          <div className="w-full grid grid-cols-2 gap-4">
            <AppInput
              required
              className="col-span-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email address"
            />
          </div>
        </div>

        <button
          disabled={!email}
          className="px-4 py-2 rounded-3xl bg-primary_green text-white mt-14 hover:bg-primary_success ease transition-all disabled:opacity-45"
        >
          Continue
        </button>

        <div className="flex justify-start items-center gap-2 mt-5 font-satoshi_Variable">
          <p>Already verified your account?</p>
          <Link href="/login" className="italic text-blue-600 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EnterVerifyEmail;
