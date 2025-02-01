"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";

interface IVideoPlayer {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const VideoPlayer = ({ open, setOpen }: IVideoPlayer) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: { target: any }) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      if (open) setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) return;
  return (
    <div
      className={`${
        open ? "z-[9999] fixed" : "-z-[999] opacity-0 invisible"
      } p-3 overflow-hidden`}
    >
      <div
        className={`${
          open ? "bg-black opacity-90" : "opacity-0"
        } fixed top-0 bottom-0 left-0 right-0 ease duration-300 transition-all z-50`}
      ></div>

      <div
        ref={contentRef}
        className={`${
          open ? "z-[999999]" : "translate-y-5 -z-[100]"
        } ease-in-out transition-transform duration-100 overflow-hidden fixed inset-0 top-[50%] left-[50%] rounded-[34px] -translate-y-[50%] -translate-x-[50%] shadow-md w-full max-w-max min-h-max p-6`}
      >
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="bg-white p-2 rounded-full absolute top-4 sm:right-3 right-0 z-[999] hover:opacity-75 ease transition-all hover:scale-105"
          >
            <CgClose size={30} />
          </button>
          <video
            className="w-[80vw] h-[80vh] object-contain"
            width="500"
            height="140"
            controls
          >
            <source src="/video/greenloop.mp4" type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg" /> */}
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
