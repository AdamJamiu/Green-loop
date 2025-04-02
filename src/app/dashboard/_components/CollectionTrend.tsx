"use client";

import { useState } from "react";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import ProgressBar from "./Progress";
import { formatCurrency } from "@/app/utils/utils";
import { trends } from "@/data/dashboard";

const CollectionTrend = () => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(trends.length / itemsPerPage);
  const [page, setPage] = useState<number>(1);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = trends.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pb-4 p-4 w-full font-clash_display bg-white rounded-lg">
      <div className="w-full flex justify-between items-center gap-3">
        <h2 className="font-clash_display_medium text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl w-full text-left">
          Collection trend
        </h2>

        <div></div>
      </div>

      <div className="mt-5 w-full flex flex-col gap-4">
        {currentItems.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex justify-between items-center gap-3 mb-2">
              <p className="font-clash_display_medium text-neutrals700 text-sm md:text-base">
                {item.name}
              </p>
              <p className="font-clash_display text-neutrals700 text-sm">
                {formatCurrency(item.amount)} kg
              </p>
            </div>
            <ProgressBar percentage={item.percentage} />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end items-center gap-3 mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="p-1 rounded-md border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineChevronLeft size={20} className="text-neutrals200" />
        </button>
        <span className="text-sm text-neutrals700">
          {page} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="p-1 rounded-md border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineChevronRight size={20} className="text-neutrals200" />
        </button>
      </div>
    </div>
  );
};

export default CollectionTrend;
