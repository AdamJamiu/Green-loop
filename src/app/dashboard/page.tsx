"use client";

import AdminAuthWrapper from "../components/auth/AdminAuth";
import TransactionHistoryTable from "./_components/TransactionHistoryTable";
import { useState } from "react";
import { dashboard_metrics } from "@/data/dashboard";
import MiniChart from "./_components/MiniChart";
import RecycleTrend from "./_components/RecycleTrend";
import DashoardChart from "./_components/DashoardChart";
import { adminCaller } from "@/interceptors";
import { useQuery } from "@tanstack/react-query";
import { TCustomerSchedulesResponse } from "./schedule-recycle/_components/types";

export default function Page() {
  const [open, setOpen] = useState(false);

  const { data: points } = useQuery({
    queryKey: ["points"],
    queryFn: async () =>
      adminCaller.get("v1/dashboard/usersstat").then((res) => res.data?.data),
    refetchOnWindowFocus: false,
  });

  console.log("points", points);

  return (
    <AdminAuthWrapper>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <div className="rounded-xl bg-white p-3.5 md:p-4">
          <div className="w-full flex justify-between items-center gap-3">
            <p className="text-neutral-900 text-sm md:text-base">
              {/* {item.label} */}
            </p>

            {/* chart here */}
            <MiniChart
            // color={
            //   +item.percentage > 0
            //     ? "#5eb237"
            //     : +item.percentage < 0
            //     ? "#dd0000"
            //     : ""
            // }
            // data={item.chartData}
            />
          </div>
          <p className="font-bold text-neutral-900 text-2xl md:text-3xl xl:text-4xl my-2">
            {/* {item.amount} */}
          </p>

          <div className="w-full flex justify-between items-center gap-3 mt-2">
            <p className="text-neutral-500 text-sm xl:text-base">
              {/* {item.date} */}
            </p>
            <p
            // className={`${
            //   +item.percentage > 0
            //     ? "text-primary_green"
            //     : +item.percentage < 0
            //     ? "text-error900"
            //     : ""
            // } font-semibold text-sm`}
            >
              {/* {+item.percentage > 0 || +item.percentage < 0
                  ? item.percentage + "%"
                  : ""} */}
            </p>
          </div>
        </div>

        {dashboard_metrics.map((item, index) => (
          <div className="rounded-xl bg-white p-3.5 md:p-4" key={index}>
            <div className="w-full flex justify-between items-center gap-3">
              <p className="text-neutral-900 text-sm md:text-base">
                {item.label}
              </p>

              {/* chart here */}
              <MiniChart
                color={
                  +item.percentage > 0
                    ? "#5eb237"
                    : +item.percentage < 0
                    ? "#dd0000"
                    : ""
                }
                data={item.chartData}
              />
            </div>
            <p className="font-bold text-neutral-900 text-2xl md:text-3xl xl:text-4xl my-2">
              {item.amount}
            </p>

            <div className="w-full flex justify-between items-center gap-3 mt-2">
              <p className="text-neutral-500 text-sm xl:text-base">
                {item.date}
              </p>
              <p
                className={`${
                  +item.percentage > 0
                    ? "text-primary_green"
                    : +item.percentage < 0
                    ? "text-error900"
                    : ""
                } font-semibold text-sm`}
              >
                {+item.percentage > 0 || +item.percentage < 0
                  ? item.percentage + "%"
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mb-8 gap-5">
        <div className="w-full sm:col-span-1 lg:col-span-2 xl:col-span-3">
          <DashoardChart />
        </div>
        <div className="w-full col-span-1">
          <RecycleTrend />
        </div>
      </div>

      <TransactionHistoryTable data={[]} onOpenModal={() => setOpen(true)} />
    </AdminAuthWrapper>
  );
}
