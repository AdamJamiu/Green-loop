"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import OtpInput from "@/app/components/ui/OtpInput";

const EnterOtpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown (300 seconds)
  const [resendDisabled, setResendDisabled] = useState(true);
  const email = sessionStorage.getItem("email");
  const userName = sessionStorage.getItem("userName");

  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/otp/verify-otp",
        {
          otp: otp.join(""),
        },
        {
          headers: {
            tenant: "root",
          },
        }
      );

      setLoading(false);

      if (data) {
        console.log("data", data);

        sessionStorage.clear();
        toast.success("Account confirmed, you can now login!");
        setTimeout(() => navigate.push("/login"), 1500);
      } else {
        toast.error("Error creating account, try again!");
      }
    } catch (err: any) {
      setLoading(false);

      console.log("creating account error catch", err);
      if (err?.response?.data?.message) {
        toast.error(err?.response?.data?.message);
      } else if (err?.response?.data?.errors) {
        handleApiErrors(err?.response?.data?.errors);
      } else {
        toast.error("Error creating account, try again!");
      }

      console.log(err);
    }
  };

  const handleResendOtp = async () => {
    setResendDisabled(true);
    setTimeLeft(300); // Reset the timer to 5 minutes

    try {
      await axios.post(
        "https://greenloop-latest.onrender.com/api/otp/get-otp",
        {
          email,
          userName,
        },
        {
          headers: {
            tenant: "root",
          },
        }
      );

      toast.success("New OTP sent successfully!");
    } catch (err: any) {
      toast.error("Failed to resend OTP, please try again!");
      setResendDisabled(false);
    }
  };

  const handleApiErrors = (errors: Record<string, string[]>) => {
    Object.entries(errors).forEach(([field, messages]) => {
      messages.forEach((message) => {
        toast.error(`${field}: ${message}`);
      });
    });
  };

  // Countdown Timer Logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setResendDisabled(false);
    }
  }, [timeLeft]);

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto py-20 min-h-max">
      <div className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0">
        <h3 className="font-medium text-2xl sm:text-3xl">
          Enter 6 Digits Code
        </h3>
        <p className="font-satoshi_Variable mt-2">
          Enter the 6 digits code sent to your email address to confirm your
          account.
        </p>

        <form onSubmit={handleSubmit} className="w-full mt-4">
          <OtpInput otp={otp} setOtp={setOtp} />

          {/* Register Button */}
          <button
            disabled={loading || otp.some((digit) => digit.trim() === "")}
            type="submit"
            className="disabled:opacity-55 disabled:cursor-not-allowed px-4 py-2 rounded-3xl bg-primary_green text-white mt-10 hover:bg-primary_success ease transition-all"
          >
            Confirm
          </button>
        </form>

        {/* Login Link */}
        <div className="flex justify-start items-center gap-2 mt-5 font-satoshi_Variable">
          <p>Didn't get the code?</p>
          <button
            onClick={handleResendOtp}
            disabled={resendDisabled}
            className={`italic text-blue-600 hover:underline ${
              resendDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Resend{" "}
            {resendDisabled &&
              `in ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                .toString()
                .padStart(2, "0")}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterOtpScreen;
