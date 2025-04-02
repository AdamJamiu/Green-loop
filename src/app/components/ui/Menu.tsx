"use client";

import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { IoClose } from "react-icons/io5";

interface IMenu {
  title?: string;
  className?: string;
  btnStyles?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  MenuIcon: ReactElement;
  Content?: ReactElement;
  withCloseBtn?: boolean;
}

const Menu = ({
  MenuIcon,
  className,
  btnStyles,
  Content,
  title,
  withCloseBtn,
  isOpen,
  setIsOpen,
}: IMenu) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(true)} className={`${btnStyles}`}>
        {MenuIcon}
      </div>

      {/* Menu Content Wrapper */}
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute top-12 right-0 z-[90] transition-all duration-200"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div
            className={`${className} w-[200px] p-3 h-max bg-white shadow-md rounded-xl relative`}
          >
            {withCloseBtn && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 rounded-full p-1.5 hover:bg-gray-100 ease transition"
              >
                <IoClose color="#898384" size={24} />
              </button>
            )}

            {/* Ensure Content clicks don't close the menu */}
            <div onClick={(e) => e.stopPropagation()}>{Content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
