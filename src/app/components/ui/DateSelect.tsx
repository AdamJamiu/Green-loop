"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import DatePicker from "react-datepicker";

export interface IOption {
  label: string;
  value: string;
}

interface SelectProps {
  selected: Date | null;
  onChange: (value: Date) => void;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  Icon?: React.ReactNode;
}

const DateSelect = ({
  selected,
  onChange,
  placeholder,
  label,
  defaultValue,
  Icon,
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
          isOpen || selected ? "bg-gray-50" : ""
        } ease transition-all duration-200 flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:border-gray-400 relative`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? "" : "text-neutrals500"}>
          {selected
            ? formatDateToReadable(selected)
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
          <DatePicker
            selected={selected}
            onChange={(date) => {
              onChange(date);
              // if (selected) {
              setIsOpen(false);
              // }
            }}
            inline
            minDate={today}
            className="!border-none !rounded-lg !shadow-md h-full"
          />
        </div>
      )}
    </div>
  );
};

export default DateSelect;
