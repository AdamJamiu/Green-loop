"use client";

import AdminAuthWrapper from "../../components/auth/AdminAuth";
import TransactionHistoryTable from "./_components/TransactionHistoryTable";
import WalletBalanceCard from "./_components/WalletBalanceCard";
import WithdrawMoney from "./_components/WithdrawMoney";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mb-4 gap-5">
        <div className="w-full sm:col-span-1 lg:col-span-2 xl:col-span-3">
          <WithdrawMoney />
        </div>
        <div className="w-full col-span-1 lg:col-span-2">
          <WalletBalanceCard />
        </div>
      </div>

      <TransactionHistoryTable data={[]} onOpenModal={() => ""} />
    </AdminAuthWrapper>
  );
}
