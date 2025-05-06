"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import DatePicker from "react-datepicker";

export interface IOption {
  label: string;
  value: string;
}

interface SelectProps {
  fromDate: Date | null;
  toDate: Date | null;
  onFromChange: (value: Date) => void;
  onToChange: (value: Date) => void;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
}

const DateRangeSelect = ({
  Icon,
  label,
  toDate,
  fromDate,
  onToChange,
  placeholder,
  onFromChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const today: any = new Date().toISOString().split("T")[0];

  const selectRef = useRef<HTMLDivElement | null>(null);

  function formatDateToReadable(date: Date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      {label ? (
        <p className="mb-3 text-neutral-900 text-sm lg:text-base">{label}</p>
      ) : null}
      {/* Select Box */}
      <div
        className={`${
          isOpen || fromDate ? "bg-gray-50" : ""
        } ease transition-all duration-200 flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:border-gray-400 relative`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={fromDate ? "" : "text-neutrals500"}>
          {fromDate
            ? formatDateToReadable(fromDate)
            : placeholder || "Select date"}
        </span>
        {Icon ? (
          Icon
        ) : (
          <IoChevronDown
            className={`text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="p-2 absolute top-20 w-full z-[50] shadow-md flex justify-stretch items-stretch">
          <div className="w-max grid grid-cols-2">
            <DatePicker
              selected={fromDate}
              onChange={(date) => {
                onFromChange(date as Date);
                // if (selected) {
                setIsOpen(false);
                // }
              }}
              inline
              minDate={today}
              className="!border-none !rounded-lg !shadow-md h-full"
            />

            <DatePicker
              selected={toDate}
              onChange={(date) => {
                onToChange(date as Date);
                // if (selected) {
                setIsOpen(false);
                // }
              }}
              inline
              minDate={fromDate as any}
              className="!border-none !rounded-lg !shadow-md h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelect;
