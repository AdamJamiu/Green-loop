"use client";

import { useState } from "react";
import Airtime from "./Airtime";
import Data from "./Data";
import Electricity from "./Electricity";
import WasteBill from "./WasteBill";

const UtilitiesCard = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      <div className="p-4 md:py-3.5 md:px-5 w-full bg-white rounded-lg gilroy mb-4">
        <div className="w-full flex justify-start items-center gap-2 font-medium font-gilroy">
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-sm lg:text-base`}
          >
            Airtime
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${
              active === 2
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-sm lg:text-base`}
          >
            Data
          </button>
          <button
            onClick={() => setActive(3)}
            className={`${
              active === 3
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-sm lg:text-base`}
          >
            Electricity
          </button>
          <button
            onClick={() => setActive(4)}
            className={`${
              active === 4
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-sm lg:text-base`}
          >
            Waste bill
          </button>
        </div>
      </div>

      {active === 1 ? <Airtime /> : null}
      {active === 2 ? <Data /> : null}
      {active === 3 ? <Electricity /> : null}
      {active === 4 ? <WasteBill /> : null}
    </div>
  );
};

export default UtilitiesCard;
