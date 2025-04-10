"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../images/logo white.png";
import AppInput from "../components/ui/Input";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/tokens",
        {
          email,
          password,
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
        sessionStorage.setItem("green-loop-user", JSON.stringify(data?.data));
        sessionStorage.setItem("token", data?.data?.token);
        toast.success("You are in, enjoy your session!");
        navigate.push("/dashboard");
      } else {
        toast.error("Invalid email/password");
      }
    } catch (err: any) {
      setLoading(false);
      if (err?.status === 401) {
        toast.error("Invalid email/password");
      }
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70 font-satoshi">
      <div className="col-span-4 md:block hidden">
        <div className="bg-[#11161b] text-white px-8 py-12 md:p-16 overflow-hidden pattern-1 h-full flex flex-col">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={145} width={145} />
          </Link>

          <h2 className="mt-16 text-[#cbd5e1] text-xl sm:text-2xl sm:w-[69%] font-satoshi">
            Make Every Decision Count for a Sustainable Tomorrow
          </h2>
        </div>
      </div>

      <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0"
        >
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
                required
                disabled={loading}
              />

              <AppInput
                className="col-span-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                required
                disabled={loading}
              />
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:underline underline text-sm italic"
              >
                Forgot password
              </Link>
            </div>
          </div>

          {/* <div className="mt-7 flex justify-start items-start gap-3 w-full">
            <input type="checkbox" className="flex" />
            <div className="font-satoshi_Variable flex gap-1 items-start justify-start">
              Remember me
            </div>
          </div> */}

          <div className="w-full flex justify-between items-center gap-5 mt-14">
            <button
              disabled={loading}
              type="submit"
              className="px-4 py-2 rounded-3xl bg-primary_green text-white hover:bg-primary_success ease transition-all disabled:opacity-45"
            >
              Login
            </button>

            <Link
              href="/verify"
              className="text-blue-500 hover:underline underline"
            >
              Verify account
            </Link>
          </div>

          <div className="flex justify-start items-center gap-2 mt-5 font-satoshi_Variable">
            <p>New to GreenLoop?</p>
            <Link
              href="/register"
              className="italic text-blue-600 hover:underline"
            >
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
