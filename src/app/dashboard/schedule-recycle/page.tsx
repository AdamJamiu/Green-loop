"use client";

import AdminAuthWrapper from "../../components/auth/AdminAuth";
import RecycleTrend from "../_components/RecycleTrend";
import RecycleNow from "./_components/RecycleNow";
import RecycleHistoryTable from "./_components/RecycleHistoryTable";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mb-8 gap-5">
        <div className="w-full sm:col-span-1 lg:col-span-2 xl:col-span-3">
          <RecycleNow />
        </div>
        <div className="w-full col-span-1 lg:col-span-2">
          <RecycleTrend />
        </div>
      </div>

      <RecycleHistoryTable data={[]} onOpenModal={() => console.log("")} />
      {/* </section> */}
    </AdminAuthWrapper>
  );
}
