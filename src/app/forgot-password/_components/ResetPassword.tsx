"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import AppInput from "@/app/components/ui/Input";
import GenerateResetTokenModal from "./GenerateResetTokenModal";

interface IResetPassword {
  email?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<number>>;
}

const ResetPassword = ({ setActive, setEmail, email }: IResetPassword) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const form = e.currentTarget;
      const formData = new FormData(form);

      const email = formData.get("email");

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/users/forgot-password",
        {
          email,
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
        setOpen(true);
        form.reset();
        // setActive(2);
        // toast.success("Email token sent!");
      } else {
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(
        err?.response?.data?.message || "Error generating reset token."
      );
      console.log(err);
    }
  };

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
      <section className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0">
        <p className="font-medium text-xl sm:text-2xl md:text-3xl">
          Forgot password?
        </p>
        <p className="mt-4 font-satoshi_Variable">
          Enter your email address, we are going to send a reset token to your
          mail.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-7">
          <div className="w-full">
            <AppInput
              label="Email"
              value={email}
              className="w-full"
              required
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4 w-full flex justify-end items-end">
            <Link
              href="/login"
              type="button"
              className="text-blue-500 text-base lg:text-[16px] underline"
            >
              Login
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-3xl bg-primary_green text-white hover:bg-primary_success ease transition-all disabled:opacity-45"
          >
            Reset
          </button>
        </form>
      </section>

      <GenerateResetTokenModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ResetPassword;
