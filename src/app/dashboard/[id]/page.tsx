"use client";

import { useState } from "react";
import { transaction_history } from "@/data/dashboard";
import AdminAuthWrapper from "../../components/auth/AdminAuth";
import { useParams } from "next/navigation";
import CancelRequestModal from "./_components/CancelRequestModal";
import Image from "next/image";
import check_icon from "../../../images/check.png";

export default function Page() {
  const [active, setActive] = useState(1);
  const [isCancelRequestModal, setIsCancelRequestModal] = useState(false);
  const { id } = useParams();

  const data = transaction_history.find((item) => item.id === Number(id));

  const handleCancel = () => {
    if (active === 1) {
      setIsCancelRequestModal(true);
    } else {
      setActive(1);
    }
  };

  return (
    <AdminAuthWrapper>
      <div className="w-full flex justify-between items-center gap-4 bg-white rounded-xl p-4 gilroy">
        <div className="flex justify-start items-center gap-2 sm:gap-4 md:gap-5">
          <p>Schedule ID: {data?.id}</p>
          <p
            className={`${
              data?.status === "completed"
                ? "bg-primary100 text-primary_success border-primary_success"
                : data?.status === "pending"
                ? "bg-warning100 text-warning border-warning"
                : data?.status === "missed"
                ? "bg-error100 text-error900 border-error900"
                : ""
            } border-2 rounded-full px-2 py-0.5 capitalize w-fit text-sm font-medium`}
          >
            {data?.status}
          </p>
        </div>

        <div className="flex justify-start items-center gap-4">
          {active === 1 ? (
            <button
              onClick={() => setActive(2)}
              className="px-4 py-1.5 hover:bg-primary100 ease transition-all duration-150 rounded-lg border border-primary_green text-primary_green"
            >
              Report
            </button>
          ) : null}

          <button
            onClick={handleCancel}
            className="px-4 py-1.5 hover:opacity-55 bg-error100 ease transition-all duration-150 rounded-lg text-error500"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="w-full mt-8">
        {active === 1 ? <Details data={data} /> : null}
        {active === 2 ? <Report /> : null}
      </div>

      <CancelRequestModal
        setIsOpen={setIsCancelRequestModal}
        isOpen={isCancelRequestModal}
      />
    </AdminAuthWrapper>
  );
}

const Details = ({ data }: { data: any }) => {
  return (
    <div className="w-full grid md:grid-cols-5 gap-7">
      <div className="w-full col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-xl p-4">
        <h2 className="w-full border-b pb-1.5 text-neutral-900 text-base md:text-lg border-neutral-100">
          Schedule progress
        </h2>

        <div className="w-full space-y-6 mt-6">
          <div className="flex w-full justify-start items-center gap-4">
            <Image src={check_icon} width={20} height={20} alt="check icoon" />

            <div className="text-sm font-medium">
              <p className="text-neutral-500">Recycle submitted</p>
              <p className="text-neutral-400">24 Jan, 2026, 12:05pm</p>
            </div>
          </div>

          <div className="flex w-full justify-start items-center gap-4">
            <Image src={check_icon} width={20} height={20} alt="check icoon" />

            <div className="text-sm font-medium">
              <p className="text-neutral-500">Recycle submitted</p>
              <p className="text-neutral-400">24 Jan, 2026, 12:05pm</p>
            </div>
          </div>

          <div className="flex w-full justify-start items-center gap-4">
            <Image src={check_icon} width={20} height={20} alt="check icoon" />

            <div className="text-sm font-medium">
              <p className="text-neutral-500">Recycle submitted</p>
              <p className="text-neutral-400">24 Jan, 2026, 12:05pm</p>
            </div>
          </div>

          <div className="flex w-full justify-start items-center gap-4">
            <Image src={check_icon} width={20} height={20} alt="check icoon" />

            <div className="text-sm font-medium">
              <p className="text-neutral-500">Recycle submitted</p>
              <p className="text-neutral-400">24 Jan, 2026, 12:05pm</p>
            </div>
          </div>

          <div className="flex w-full justify-start items-center gap-4">
            <Image src={check_icon} width={20} height={20} alt="check icoon" />

            <div className="text-sm font-medium">
              <p className="text-neutral-500">Recycle submitted</p>
              <p className="text-neutral-400">24 Jan, 2026, 12:05pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl p-4">
        <h2 className="w-full border-b pb-1.5 text-neutral-900 text-base md:text-lg border-neutral-100">
          Recycle details
        </h2>

        <div className="mt-6 w-full space-y-6 font-medium text-sm lg:text-base border-b-2 border-dashed pb-10">
          <div className="w-full flex justify-between items-center gap-3">
            <p className="text-neutral-500">Schedule ID</p>
            <p className="text-neutral-700">{data?.id}</p>
          </div>

          <div className="w-full flex justify-between items-center gap-3">
            <p className="text-neutral-500">Service type</p>
            <p className="text-neutral-700">{data?.type}</p>
          </div>

          <div className="w-full flex justify-between items-center gap-3">
            <p className="text-neutral-500">Date</p>
            <p className="text-neutral-700">{data?.date}</p>
          </div>

          <div className="w-full flex justify-between items-center gap-3">
            <p className="text-neutral-500">Address</p>
            <p className="text-neutral-700">{data?.address}</p>
          </div>
        </div>

        <div className="mt-6 w-full space-y-6 text-sm lg:text-base pt-5 pb-10">
          <p className="">Waste details</p>
          <div className="w-full flex justify-start items-center gap-2 text-sm">
            <p className="rounded-full px-3 py-1.5 bg-secondary200 text-secondary">
              Plastic
            </p>
            <p className="rounded-full px-3 py-1.5 bg-secondary200 text-secondary">
              Metals
            </p>
            <p className="rounded-full px-3 py-1.5 bg-secondary200 text-secondary">
              Cans
            </p>
          </div>
          <div className="w-full flex justify-between items-center gap-3 font-medium">
            <p className="text-neutral-500">Category</p>
            <p className="text-neutral-700">
              PVC pipes, house-hold plastics, iron rod, soft drink cans
            </p>
          </div>

          <div className="w-full flex justify-between items-center gap-3 font-medium">
            <p className="text-neutral-500">Quantity</p>
            <p className="text-neutral-700">------</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Report = () => {
  return (
    <div className="w-full grid md:grid-cols-5 gap-7">
      <div className="w-full col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl p-5">
        <h2 className="w-full text-neutral-900 text-base md:text-lg font-semibold">
          Need help?
        </h2>

        <p className="text-neutral-500 text-sm md:text-base mt-3">
          Report the issue with your pickup
        </p>

        <textarea
          rows={4}
          className="p-4 border border-neutral-200 rounded-md text-neutral-600 placeholder:text-neutral-400 w-full mt-7 mb-10"
          placeholder="Send us a message"
        />

        <div className="w-full flex justify-end items-end">
          <button className="px-4 py-1.5 hover:bg-primary600 ease transition-all duration-150 rounded-lg text-white bg-primary_green">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
