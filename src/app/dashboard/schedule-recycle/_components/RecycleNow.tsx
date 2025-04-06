import Select from "@/app/components/ui/Select";
import { useState } from "react";

const RecycleNow = () => {
  const [selectedWasteCategory, setSelectedWasteCategory] = useState({
    value: "",
    label: "",
  });
  return (
    <div className="p-4 md:p-5 w-full bg-white rounded-lg gilroy">
      <h2 className="text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl w-full text-left font-semibold">
        Recycle now
      </h2>

      <div className="w-full mt-7">
        <div className="w-full grid grid-cols-2 gap-7">
          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Waste category
            </p>
            <Select
              onChange={(value) => setSelectedWasteCategory(value)}
              selected={selectedWasteCategory}
              options={[{ value: "", label: "" }]}
              label="Select waste category"
            />
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Select scheule type
            </p>

            <div className="w-full flex justify-start items-center gap-5 mt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="option" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border-2 border-primary_green peer-checked:border-primary_green peer-checked:bg-primary_green transition-colors"></div>
                <span className="text-xs md:text-sm text-neutral-500">
                  Pick up
                </span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="option" className="peer hidden" />
                <div className="w-5 h-5 p-1 rounded-full border-2 border-primary_green peer-checked:border-primary_green peer-checked:bg-primary_green transition-colors"></div>
                <span className="text-xs md:text-sm text-neutral-500">
                  Drop off
                </span>
              </label>
            </div>
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Select date
            </p>
            <Select
              onChange={(value) => setSelectedWasteCategory(value)}
              selected={selectedWasteCategory}
              options={[{ value: "", label: "" }]}
              label="Select waste category"
            />
          </div>

          <div className="w-full font-medium">
            <p className="mb-3 text-neutral-900 text-sm lg:text-base">
              Drop off location
            </p>
            <Select
              onChange={(value) => setSelectedWasteCategory(value)}
              selected={selectedWasteCategory}
              options={[{ value: "", label: "" }]}
              label="Select waste category"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 mb-10 mt-8 w-full">
        <button
          //   onClick={onOpenModal}
          className="text-sm md:text-base flex justify-start items-center gap-2 bg-primary text-white h-10 px-6 rounded-lg ease transition-all duration-200 hover:opacity-55"
        >
          Recycle now
        </button>
      </div>
    </div>
  );
};

export default RecycleNow;
