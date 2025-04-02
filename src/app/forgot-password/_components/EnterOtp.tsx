"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import OtpInput from "@/app/components/ui/OtpInput";

interface IEnterOtp {
  setActive: Dispatch<SetStateAction<number>>;
  setOtp: Dispatch<SetStateAction<string[]>>;
  otp: string[];
}

const EnterOtp = ({ setActive, setOtp, otp }: IEnterOtp) => {
  const [loading, setLoading] = useState(false);
  // const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<any[]>([]);

  const handleChange = (event: any, index: number) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < inputRefs.current.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/otp/verify-otp",
        {
          otp,
        },
        {
          headers: {
            tenant: "root",
          },
        }
      );

      setLoading(false);
      // console.log(data);

      if (data) {
        console.log("data", data);
        setActive(3);
        toast.success("OTP verified!");
      } else {
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Error verifying OTP.");
      console.log(err);
    }
  };

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto font-satoshi">
      <section className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl">
          Enter 6 Digits Code
        </p>
        <p className="mt-4 font-satoshi_Variable">
          Enter the 6 digits code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-7">
          <OtpInput otp={otp} setOtp={setOtp} />

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-3xl bg-primary_green text-white hover:bg-primary_success ease transition-all disabled:opacity-45"
          >
            Confirm
          </button>
        </form>
      </section>
    </div>
  );
};

export default EnterOtp;
