"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import AppInput from "@/app/components/ui/Input";
import { useRouter } from "next/navigation";

const EnterNewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [noTokenEmailError, setNoTokenEmailError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (password !== confirmPassword) {
        toast.error("Password must match");
      }

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/users/reset-password",
        {
          email,
          password,
          token,
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
        setTimeout(() => navigate.push("/login"), 1500);
        toast.success("Password reset sucessfully!");
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Error resetting password.");
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== null) {
      const urlParams = new URLSearchParams(window.location.search);

      const retreivedEmail = urlParams.get("email");
      const retreivedToken = urlParams.get("token");

      if (retreivedEmail || retreivedToken) {
        setToken(urlParams.get("token") || "");

        setEmail(urlParams.get("email") || "");
      } else {
        setNoTokenEmailError(true);
      }
    }
  }, []);

  if (noTokenEmailError) {
    return <ErrorPage />;
  }

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
      <section className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0">
        <p className="font-medium text-xl sm:text-2xl md:text-3xl">
          Reset password?
        </p>
        <p className="mt-4 font-satoshi_Variable">
          Enter your new password to reset password.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-7">
          <AppInput
            label="New password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            value={password}
            type="password"
            name="password"
            required
          />

          <AppInput
            label="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="w-full"
            required
            type="password"
            name="confirmPassword"
          />

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
    </div>
  );
};

const ErrorPage = () => {
  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
      <h1 className="text-2xl font-bold text-red-600">
        Invalid or Missing Credentials
      </h1>
      <p className="mt-4 text-gray-600">
        The reset password link is invalid or missing required parameters.
      </p>
      <Link
        href="/login"
        className="mt-6 px-4 py-2 bg-primary_green text-white rounded-md hover:opacity-45 transition"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default EnterNewPassword;
