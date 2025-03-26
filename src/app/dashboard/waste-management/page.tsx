"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import CollectionTrend from "./_components/CollectionTrend";
import Table from "./_components/Table";
import { useState } from "react";
import WasteRecycleChart from "../_components/WasteRecycleChart";
import AddWasteModal from "./_components/AddWasteModal";

const Page = () => {
  const [isAddWasteModal, setIsAddWasteModal] = useState(false);

  const handleOpenAddWasteModal = () => {
    setIsAddWasteModal(true);
  };
  return (
    <AdminAuthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-center gap-7 w-full">
        <div className="w-full col-span-1">
          <CollectionTrend />
        </div>
        <div className="w-full col-span-1 md:col-span-2">
          <WasteRecycleChart />
        </div>
      </div>
      <div className="mt-10 w-full">
        <Table onOpenModal={handleOpenAddWasteModal} data={[]} />
      </div>

      <AddWasteModal isOpen={isAddWasteModal} setIsOpen={setIsAddWasteModal} />
    </AdminAuthWrapper>
  );
};

export default Page;
