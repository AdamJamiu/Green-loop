"use client";

import AppInput from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import { useState } from "react";

const WasteBill = () => {
  const [accountNumber, setAccontNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedWasteCategory, setSelectedWasteCategory] = useState({
    value: "",
    label: "",
  });

  return (
    <div className="p-4 md:p-5 w-full bg-white rounded-lg gilroy">
      <h2 className="text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl w-full text-left font-semibold">
        Waste Bill
      </h2>

      <div className="w-full mt-7">
        <div className="w-full grid grid-cols-2 gap-7">
          <div className="w-full font-medium">
            <Select
              onChange={(value) => setSelectedWasteCategory(value)}
              selected={selectedWasteCategory}
              options={[{ value: "", label: "" }]}
              label="Network provider"
              placeholder="Select network provider"
            />
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Phone nunber
            </p>
            <AppInput
              type="tel"
              label="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccontNumber(e.target.value)}
            />
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">Amount</p>
            <AppInput
              type="number"
              name="amount"
              value={amount}
              label="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4 mb-10 mt-12 w-full">
        <button
          //   onClick={onOpenModal}
          className="text-sm md:text-base flex justify-start items-center gap-2 bg-primary text-white h-10 px-6 rounded-lg ease transition-all duration-200 hover:opacity-55"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default WasteBill;
