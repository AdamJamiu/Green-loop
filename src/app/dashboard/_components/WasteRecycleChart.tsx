"use client";

import { waste_recycled } from "@/data/dashboard";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { TCustomerSchedulesResponse } from "../schedule-recycle/_components/types";
import { adminCaller } from "@/interceptors";
import { useQuery } from "@tanstack/react-query";

const WasteRecycleChart = () => {
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

  return (
    <section className="w-full pt-8 h-max">
      <div className="w-full bg-white rounded-lg p-4 h-max">
        <h1 className="_medium text-neutrals700 text-sm md:text-base">
          Total waste recycled
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl _semibold mt-3 text-neutrals900">
          3500kg
        </h2>

        <div className="w-full mt-7  text-neutrals500">
          <BarChart
            width={850}
            className="text-sm"
            height={280}
            data={waste_recycled}
          >
            <Bar
              dataKey="uv"
              fill="#DFF0D7"
              className="hover:fill-primary ease transition-all duration-300"
            />
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value}Kg`} />
            <Tooltip contentStyle={{ color: "#5EB237" }} />
          </BarChart>
        </div>
      </div>
    </section>
  );
};

export default WasteRecycleChart;
