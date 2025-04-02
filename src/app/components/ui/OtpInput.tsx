"use client";

import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

interface IOtpInput {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
}

const OtpInput = ({ otp, setOtp }: IOtpInput) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (
      inputRefs.current &&
      index < inputRefs.current.length - 1 &&
      value !== ""
    ) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event: any, index: number) => {
    if (
      event.key === "Backspace" &&
      otp[index] === "" &&
      index > 0 &&
      inputRefs.current?.length
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-3 w-full my-4 items-center">
      {otp.map((value, index) => (
        <input
          key={index}
          className={`${
            value
              ? "text-primary_success bg-primary100 border-primary_green"
              : ""
          } font-bold w-[65px] h-[70px] m-0 border-[2px] text-center rounded-lg focus:border-primary_green outline-none ease transition-all duration-200`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => {
            if (ref) {
              inputRefs.current[index] = ref;
            }
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
