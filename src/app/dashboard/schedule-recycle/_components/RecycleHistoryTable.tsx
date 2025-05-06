"use client";

import { useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { adminCaller } from "@/interceptors";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import Select from "@/app/components/ui/Select";
import { transaction_history } from "@/data/dashboard";
import { TCustomerSchedulesResponse } from "./types";

type ScheduleItem = {
  [key: string]: string | number | Date | undefined;
};

const RecycleHistoryTable = () => {
  const itemsPerPage = 10;
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<
    | "Submitted"
    | "Completed"
    | "Accept"
    | "Accepted"
    | "Confirmed"
    | "Assigned"
    | null
  >(null);
  const [schedule, setSchedule] = useState({ value: "", label: "" });

  const { data: recycleschedules, isLoading } = useQuery<
    TCustomerSchedulesResponse[]
  >({
    queryKey: ["getcustomerschedules", status],
    queryFn: async () =>
      adminCaller
        .post("v1/recycleschedules/getcustomerschedules", {
          ...(status && { status }),
        })
        .then((res) => res.data?.data),
    refetchOnWindowFocus: false,
  });

  console.log("recycleschedules", recycleschedules);

  const totalPages = Math.ceil(transaction_history?.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = (recycleschedules || [])?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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

  const sortedItems = [...(recycleschedules || [])].sort(
    (a: ScheduleItem, b: ScheduleItem) => {
      if (!sortKey) return 0;

      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }
    }
  );

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="w-full gilroy">
      <div className="mb-2 w-full p-4 md:p-5 rounded-lg flex justify-between items-center gap-4 bg-white md:flex-nowrap flex-wrap">
        <div className="flex justify-start items-center gap-7 min-w-max">
          <h2 className="font-semibold text-base xl:text-lg text-neutral-900 min-w-max w-full">
            Recycle History
          </h2>

          <div className="min-w-max">
            <Select
              onChange={(value) => setSchedule(value)}
              selected={schedule}
              placeholder="All schedule"
              options={[]}
            />
          </div>
          <div className="min-w-max">
            <Select
              onChange={(value) => setSchedule(value)}
              selected={schedule}
              placeholder="Select date range"
              options={[]}
            />
          </div>
        </div>
      </div>

      <div className="mb-2 w-full p-4 md:p-5 rounded-lg flex justify-between items-center gap-4 bg-white md:flex-nowrap flex-wrap">
        <div className="w-full flex justify-start items-center gap-4 font-medium">
          <button
            onClick={() => setStatus(null)}
            className={`${
              status === null
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("Submitted")}
            className={`${
              status === "Submitted"
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            Submitted
          </button>

          <button
            onClick={() => setStatus("Accepted")}
            className={`${
              status === "Accepted"
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            Accepted
          </button>

          <button
            onClick={() => setStatus("Assigned")}
            className={`${
              status === "Assigned"
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            Assigned
          </button>

          <button
            onClick={() => setStatus("Confirmed")}
            className={`${
              status === "Confirmed"
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            Confirmed
          </button>

          <button
            onClick={() => setStatus("Completed")}
            className={`${
              status === "Completed"
                ? "bg-primary100 text-primary_success"
                : "text-neutral-400"
            } px-4 py-2.5 rounded-lg ease transition-all duration-200 text-base xl:text-lg`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
          <thead className="text-neutrals500 text-xs sm:text-sm md:text-base  border-b border-neutrals100 rounded-t-lg">
            <tr className="w-full">
              <th className="p-3 rounded-tl-xl font-normal hover:bg-gray-100">
                <div
                  onClick={() => handleSort("categories")}
                  title="Waste category"
                  className="flex justify-start items-center gap-2"
                >
                  <input className="h-4 w-4 rounded-lg bg-transparent border" />
                  <p>Waste category</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>
              <th className="p-3 font-normal hover:bg-gray-100">
                <div
                  onClick={() => handleSort("recycleType")}
                  title="Sort by Schedule type"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Schedule type</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>

              <th className="p-3 font-normal hover:bg-gray-100">
                <div
                  title="Sort by address"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Address</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>

              <th className="p-3 font-normal hover:bg-gray-100">
                <div className="flex justify-start items-center gap-2">
                  <p>Date</p>
                  {/* <LuChevronsUpDown role="button" /> */}
                </div>
              </th>

              <th className="p-3 font-normal hover:bg-gray-100">
                <div
                  onClick={() => handleSort("status")}
                  title="Sort by Status"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Status</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedItems?.map((item, index) => (
              <tr
                key={index}
                className="gilroy w-full border-b border-neutrals100 _medium text-neutrals700 text-xs md:text-sm ease transition-all duration-300 hover:bg-gray-100"
              >
                <td className="p-4">
                  <p>{item?.categories}</p>
                </td>
                <td className="p-4">{item?.recycleType || "N/A"}</td>
                <td className="p-4">
                  {item?.dropOffAddress || item.pickupAddress || "N/A"}
                </td>
                <td className="p-4">{item?.recycleDate || "N/A"}</td>
                <td className="p-4 text-center flex justify-center items-center">
                  <p
                    className={`status-${item.status} border-2 rounded-full font-medium gilroy px-2 py-0.5 capitalize w-fit`}
                  >
                    {item?.status}
                  </p>
                </td>
              </tr>
            ))}

            {isLoading ? <LoadingSkeleton length={5} /> : null}

            {currentItems.length < 1 && !isLoading ? (
              <tr className="w-full border-b border-neutrals100 _medium text-neutrals500">
                <td className="p-4 text-center text-lg" colSpan={5} rowSpan={5}>
                  No transactions found
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {currentItems.length > itemsPerPage && (
          <div className="w-full flex justify-end items-center gap-3 mt-5 bg-white rounded-lg p-4 sticky right-0 left-0">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronLeft size={20} className="text-neutrals200" />
            </button>
            <span className="text-sm text-neutrals700">
              {page} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronRight size={20} className="text-neutrals200" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecycleHistoryTable;
