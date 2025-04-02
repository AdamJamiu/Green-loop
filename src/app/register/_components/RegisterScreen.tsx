"use client";

import AppInput from "../../components/ui/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "../../components/ui/Select";
import { allStates, nigeriaStates } from "@/data/states";
import { IRegisterUserBodyType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { adminCaller, httpClient } from "@/interceptors";

interface IRegisterProps {
  setActive: Dispatch<SetStateAction<number>>;
}

interface IStatesResponse {
  data: {
    data: IStatesType[];
  };
}

interface IStatesType {
  id: number;
  name: string;
}

interface ILgaResponse {
  data: {
    data: ILgasType[];
  };
}

interface ILgasType {
  stateId: number;
  name: string;
}

const RegisterScreen = ({ setActive }: IRegisterProps) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [stateId, setStateId] = useState<string>("1");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [zone, setZone] = useState<string>("");
  const [referalCode, setReferalCode] = useState<string>("");
  const [lga, setLga] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [nearestBusStop, setNearestBusStop] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [userType, setUserType] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [zonesArr, setZonesArr] = useState<string[]>([]);

  const [lgasList, setLgasList] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post<IRegisterUserBodyType>(
        "https://greenloop-latest.onrender.com/api/users/self-register",
        {
          lga,
          email,
          state,
          address,
          fullName: `${firstName} ${lastName}`,
          password,
          userType,
          phoneNumber,
          referalCode,
          nearestBusStop,
          confirmPassword,
          zone,
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

        toast.success("Account created successfully!");
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("userName", `${firstName} ${lastName}`);
        setActive(2);
        // setTimeout(() => navigate.push("/login"), 1500);
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

  const { data = [], isLoading } = useQuery({
    queryKey: ["zones", state, lga],
    queryFn: async () =>
      await httpClient
        .post("v1/zones/search", {
          pageSize: 999,
          pageNumber: 1,
          lga,
          state,
        })
        .then((res) => res.data?.data),
    enabled: !!(state && lga),
    refetchOnWindowFocus: false,
  });

  const { data: lgaArr = [], isLoading: lgaLoading } = useQuery({
    queryKey: ["lgas", stateId],
    queryFn: async () =>
      await httpClient
        .get<any, ILgaResponse>(`locations/getlgas?stateId=${stateId}`)
        .then((res) => res.data?.data),
    enabled: !!stateId,
    refetchOnWindowFocus: false,
  });

  const { data: statesArr = [], isLoading: statesLoading } = useQuery({
    queryKey: ["states"],
    queryFn: async () =>
      await httpClient
        .get<any, IStatesResponse>(`locations/getstates`)
        .then((res) => res.data?.data),
    refetchOnWindowFocus: false,
  });

  const handleApiErrors = (errors: Record<string, string[]>) => {
    Object.entries(errors).forEach(([field, messages]) => {
      messages.forEach((message) => {
        toast.error(`${field}: ${message}`);
      });
    });
  };

  console.log("zone", zonesArr);
  // console.log("states", statesArr);

  useEffect(() => {
    if (state) {
      const data = allStates.find(
        (item) => item.state.toLowerCase() === state.toLowerCase()
      )?.lgas;
      setLgasList(data || []);
    }
  }, [state]);

  return (
    <div className="h-full w-full col-span-8 flex flex-col justify-center items-center overflow-y-auto py-20 min-h-max">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-start w-full max-w-md flex-col h-full p-4 md:p-0"
      >
        <h3 className="font-medium text-2xl sm:text-3xl">Create an account</h3>
        <p className="font-satoshi_Variable mt-2">
          Kindly fill in all fields below correctly
        </p>

        <div className="w-full space-y-4 mt-4">
          <div className="w-full grid grid-cols-2 gap-5">
            {/* Full Name */}
            <AppInput
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
            />
            <AppInput
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
            />

            {/* Email */}
            <AppInput
              required
              type="email"
              className="col-span-2 w-full"
              value={email}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Phone Number */}
            <AppInput
              required
              type="tel"
              className="col-span-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="Phone Number"
            />

            {/* Address */}
            <AppInput
              required
              type="text"
              className="col-span-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              label="Address"
            />
            <AppInput
              type="text"
              className="col-span-2"
              value={nearestBusStop}
              onChange={(e) => setNearestBusStop(e.target.value)}
              label="Nearest Bus Stop"
            />

            {/* State & LGA */}
            <div className="w-full col-span-2">
              <Select
                selected={{ value: state, label: state }}
                options={(statesArr || []).map(({ id, name }) => ({
                  value: String(id),
                  label: name,
                }))}
                placeholder="Select State"
                onChange={(value) => {
                  setState(value.label);
                  setStateId(value.value);
                }}
              />
            </div>
            <div className="w-full col-span-2">
              <Select
                selected={{ value: lga, label: lga }}
                options={lgaArr?.map(({ name, stateId }) => ({
                  value: name,
                  label: name,
                }))}
                placeholder="Select Local Government Area"
                onChange={(value) => setLga(value.value)}
              />
            </div>

            <AppInput
              type="text"
              className="col-span-2"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              label="Zone"
            />

            {/* User Type */}
            <div className="w-full col-span-2">
              <Select
                selected={{ value: userType, label: userType }}
                options={[
                  { value: "Individual", label: "Individual" },
                  { value: "Company", label: "Company" },
                  { value: "Vendor", label: "Vendor" },
                ]}
                placeholder="Select Account Type"
                onChange={(value) => setUserType(value.value)}
              />
            </div>

            {/* Password */}
            <AppInput
              className="col-span-2"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <AppInput
              className="col-span-2"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
            />

            {/* Referral Code */}
            <AppInput
              type="text"
              className="col-span-2"
              value={referalCode}
              onChange={(e) => setReferalCode(e.target.value)}
              label="Referral Code (Optional)"
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-7 flex justify-start items-center gap-3 w-full">
          <input
            required
            type="checkbox"
            className="h-4 w-4"
            onChange={(e) => {
              setIsAgreed(e.target.checked);
            }}
          />
          <div className="font-satoshi_Variable flex items-start justify-start flex-nowrap w-full whitespace-nowrap">
            I agree to GreenLoop's{" "}
            <Link
              className="italic text-blue-600 hover:underline px-1"
              href="/termsAndConditions"
            >
              terms and conditions
            </Link>{" "}
            and
            <Link
              className="italic text-blue-600 hover:underline px-1"
              href="/privacyPolicy"
            >
              privacy policy
            </Link>
          </div>
        </div>

        {/* Register Button */}
        <button
          disabled={loading || !isAgreed}
          type="submit"
          className="disabled:opacity-55 disabled:cursor-not-allowed px-4 py-2 rounded-3xl bg-primary_green text-white mt-10 hover:bg-primary_success ease transition-all"
        >
          Register
        </button>

        {/* Login Link */}
        <div className="flex justify-start items-center gap-2 mt-5 font-satoshi_Variable">
          <p>Already have an account?</p>
          <Link href="/login" className="italic text-blue-600 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
