"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export interface IOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: IOption[];
  selected: IOption | null;
  onChange: (option: IOption) => void;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
}

const Select = ({
  options = [],
  selected,
  onChange,
  placeholder,
  label,
  defaultValue,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

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
          isOpen || selected?.value ? "bg-gray-50" : ""
        } ease transition-all duration-200 flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:border-gray-400 relative`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="">
          {selected?.label
            ? selected.label
            : defaultValue || placeholder || "Select an option"}
        </span>
        <IoChevronDown
          className={`text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
          {options.length < 1 ? (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-center text-gray-500"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              No options
            </li>
          ) : null}
          {options.map((option) => (
            <li
              key={option.value}
              className={`${
                selected?.value === option.value
                  ? "bg-gray-50 font-medium text-black"
                  : "text-gray-500"
              } px-4 py-2 cursor-pointer hover:bg-gray-100`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
