"use client";

import Image from "next/image";
import Modal from "@/app/components/ui/Modal";
import Link from "next/link";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const GenerateResetTokenModal = ({ open, onClose }: IProps) => {
  return (
    <Modal isOpen={open} title="Request Submitted" onClose={onClose}>
      <div className="max-w-[500px] w-full bg-white rounded p-5 sm:p-10 fixed inset-0 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50 shadow-md h-fit max-h-[600px] overflow-y-auto font-satoshi">
        <Image
          src="https://superapp.tdafrica.com/images/6.jpg"
          alt="svg image"
        />
        {/* <h1 className="w-full text-center font-bold text-2xl text-gray-900">
          
        </h1> */}
        <p className="text-center w-full mt-3 mb-5">
          We have sent an email to your inbox to complete your request.
        </p>
        <Link href="/login">
          <button
            onClick={onClose}
            className="text-center flex justify-center items-center ease transition-all hover:opacity-75 shadow-md w-full px-2 text-gray-100 rounded-sm bg-red-900 font-semibold h-10"
          >
            Done
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default GenerateResetTokenModal;
