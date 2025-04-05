"use client";

import { useQuery } from "@tanstack/react-query";
import AdminAuthWrapper from "../../components/auth/AdminAuth";
import { adminCaller } from "@/interceptors";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <div className="grid md:grid-cols-1 xl:grid-cols-4 gap-7 w-full h-full mt-12">
        <div className="w-full sm:col-span-2 md:col-span-3">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4"></div>
        </div>
      </div>
      {/* </section> */}
    </AdminAuthWrapper>
  );
}
