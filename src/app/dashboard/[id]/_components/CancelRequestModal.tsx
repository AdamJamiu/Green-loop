"use client";

import Modal from "@/app/components/ui/Modal";
import { adminCaller } from "@/interceptors";
import { useParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CancelRequestModal = ({ isOpen, setIsOpen }: IProps) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useRouter();

  const onClose = () => setIsOpen(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await adminCaller.delete(
        `users/${params?.id}/delete-user`
      );

      if (response.data && response.data?.data) {
        onClose();
        toast.success("User deleted successfully");

        setTimeout(() => navigate.back(), 1500);
      } else {
        toast.error(response?.data?.data?.message || "Error deleting user");
      }
      setLoading(false);
      console.log("response", response);
    } catch (err: any) {
      setLoading(false);

      toast.error(err?.response?.data?.message || "Error deleting user");
    }
  };

  return (
    <Modal
      withCloseButton={false}
      title=""
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="w-screen max-w-[450px] overflow-y-auto h-max mx-h-[70vh] bg-white rounded-lg p-5 flex flex-col justify-center items-center mt-8">
        <svg
          className="mx-auto"
          width="121"
          height="120"
          viewBox="0 0 121 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.5 110C88 110 110.5 87.5 110.5 60C110.5 32.5 88 10 60.5 10C33 10 10.5 32.5 10.5 60C10.5 87.5 33 110 60.5 110Z"
            stroke="#EBE526"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.5 40V65"
            stroke="#EBE526"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.4727 80H60.5176"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm text-[#1C1C1C] text-center mt-4">
          Do you want to cancel this request?
        </p>

        <div className="w-full gap-4 flex items-center justify-center mt-7">
          <button
            onClick={onClose}
            disabled={loading}
            className="disabled:opacity-55 sm:text-base text-sm rounded-lg bg-neutral-100 text-[#939393] hover:opacity-80 ease transition-all px-4 py-2 ease"
          >
            No, go back
          </button>
          <button
            // onClick={handleDelete}
            disabled={loading}
            className="hover:opacity-80 ease transition-all px-4 py-2 rounded-lg bg-error100 flex justify-center items-center gap-2.5 text-error900"
          >
            Yes confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelRequestModal;
