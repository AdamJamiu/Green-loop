"use client";

import DateSelect from "@/app/components/ui/DateSelect";
import AppInput from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import { adminCaller } from "@/interceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

type TWasteCategories = {
  categoryName: string;
  id: string;
  subCategories: string[];
};

type TSites = {
  address: string;
  id: number;
  zoneLga: string;
  zoneName: string;
  zoneState: string;
};

const RecycleNow = () => {
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);
  const [wasteCategory, setWasteCategory] = useState({
    value: "",
    label: "",
  });

  const [useMyLocation, setUseMyLocation] = useState(false);
  const [dropOffAddress, setDropOffAddress] = useState("");
  const [pickupAddress, setPickUpAddress] = useState({
    value: "",
    label: "",
  });

  const [recycleDate, setRecycleDate] = useState<Date | null>(null);
  const [recycleType, setRecycleType] = useState<"drop-off" | "pickup">(
    "pickup"
  );

  const { data: wasteCategories, isLoading } = useQuery<TWasteCategories[]>({
    queryKey: ["waste-categories"],
    queryFn: async () =>
      adminCaller
        .post("v1/wastecategory/search", {})
        .then((res) => res?.data?.data),
    refetchOnWindowFocus: false,
  });

  const { data: sites, isLoading: sitesLoading } = useQuery<TSites[]>({
    queryKey: ["pick-up-sites"],
    queryFn: async () =>
      adminCaller.post("/v1/sites/search", {}).then((res) => res?.data?.data),
  });

  const reset = () => {
    setRecycleDate(null);
    setPickUpAddress({
      label: "",
      value: "",
    });
    setDropOffAddress("");
    setRecycleType("pickup");
    setWasteCategory({
      value: "",
      label: "",
    });
  };

  const handleScheduleRecycle = async () => {
    setLoading(true);

    await adminCaller
      .post("v1/recycleschedules", {
        useMyLocation: recycleType === "drop-off" ? useMyLocation : false,
        ...(recycleType === "pickup" && { lga: "string" }),
        ...(recycleType === "pickup" && { state: "string" }),
        recycleType: recycleType === "drop-off" ? "DropOff" : "Pickup",
        recycleDate,
        ...(recycleType === "pickup" && { pickupAddress: pickupAddress.value }),
        scheduleCollections: [
          {
            category: wasteCategory.value,
            subCategory: wasteCategory.value,
            pointPerKg: 0,
          },
        ],
      })
      .then((res) => {
        console.log("Recycle schedule created successfully.", res.data);
        reset();
        queryClient.invalidateQueries({ queryKey: ["getcustomerschedules"] });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-4 md:p-5 w-full bg-white rounded-lg gilroy">
      <h2 className="text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl w-full text-left font-semibold">
        Recycle now
      </h2>

      <div className="w-full mt-7">
        <div className="w-full grid grid-cols-2 gap-7">
          <div className="w-full font-medium">
            <Select
              onChange={(value) => setWasteCategory(value)}
              selected={wasteCategory}
              options={(wasteCategories || []).map((item, index) => ({
                value: item.id,
                label: item.categoryName,
              }))}
              label="Select waste category"
            />
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Select scheule type
            </p>

            <div className="w-full flex justify-start items-center gap-5 mt-6">
              <label
                onClick={() => setRecycleType("pickup")}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  checked={recycleType === "pickup"}
                  type="radio"
                  name="option"
                  className="peer hidden"
                />
                <div className="w-5 h-5 rounded-full border-2 border-primary_green peer-checked:border-primary_green peer-checked:bg-primary_green transition-colors"></div>
                <span className="text-xs md:text-sm text-neutral-500">
                  Pick up
                </span>
              </label>

              <label
                onClick={() => setRecycleType("drop-off")}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  checked={recycleType === "drop-off"}
                  type="radio"
                  name="option"
                  className="peer hidden"
                />
                <div className="w-5 h-5 p-1 rounded-full border-2 border-primary_green peer-checked:border-primary_green peer-checked:bg-primary_green transition-colors"></div>
                <span className="text-xs md:text-sm text-neutral-500">
                  Drop off
                </span>
              </label>
            </div>
          </div>

          <div className="w-full font-medium">
            <DateSelect
              onChange={(value) => setRecycleDate(value)}
              selected={recycleDate}
              label="Select date"
              placeholder="Select date"
              Icon={<FaRegCalendarAlt className="text-primary" />}
            />
          </div>

          {recycleType === "drop-off" ? (
            <div>
              <p className="mb-3 text-neutral-900 text-sm lg:text-base">
                Drop off address
              </p>
              <AppInput
                onChange={(e) => setDropOffAddress(e.target.value)}
                value={dropOffAddress}
                label="Enter Drop off address"
              />
            </div>
          ) : (
            <div className="w-full font-medium">
              <Select
                onChange={(value) => setPickUpAddress(value)}
                selected={pickupAddress}
                options={(sites || []).map((item) => ({
                  value: item.address,
                  label: item.zoneName,
                }))}
                label="Pick up Address"
                placeholder="Select Pick up address"
              />

              <button
                onClick={() => setUseMyLocation((prev) => !prev)}
                className="flex justify-start items-center gap-2 mt-4"
              >
                <input
                  checked={useMyLocation}
                  type="checkbox"
                  className="border-primary_green peer-checked:border-primary_green peer-checked:bg-primary_green w-5 h-5"
                />
                <p className="text-sm text-neutrals500">Use your address</p>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 mb-10 mt-8 w-full">
        <button
          disabled={
            loading || !recycleDate || !recycleType || !wasteCategory.value
          }
          onClick={handleScheduleRecycle}
          className="disabled:opacity-65 text-sm md:text-base flex justify-start items-center gap-2 bg-primary text-white h-10 px-6 rounded-lg ease transition-all duration-200 hover:opacity-55"
        >
          {loading ? "Recycling..." : "Recycle now"}
        </button>
      </div>
    </div>
  );
};

export default RecycleNow;
