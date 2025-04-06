"use client";

import AdminAuthWrapper from "../../components/auth/AdminAuth";
import TransactionHistoryTable from "./_components/TransactionHistoryTable";
import WalletBalanceCard from "./_components/WalletBalanceCard";
import UtilitiesCard from "./_components/UtilitiesCard";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mb-4 gap-5">
        <div className="w-full sm:col-span-2 lg:col-span-3">
          <UtilitiesCard />
        </div>
        <div className="w-full col-span-1 md:col-span-full xl:col-span-2">
          <WalletBalanceCard />
        </div>
      </div>

      <TransactionHistoryTable data={[]} onOpenModal={() => console.log("")} />
      {/* </section> */}
    </AdminAuthWrapper>
  );
}
