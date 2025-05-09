"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const AdminAuthWrapper = ({ children }: { children: ReactNode }) => {
  const navigate = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);

    if (!storedToken) {
      sessionStorage.clear();
      navigate.replace("/login");
    }
  }, []);

  return (
    <div className="relative bg-neutralBase min-h-screen px-4 py-20 sm:px-10 sm:py-24 md:py-32 xl:pl-16 md:pr-8 lg:px-4 lg:pl-7 2xl:pl-20 xl:ml-[200px]">
      {children}
    </div>
  );
};

export default AdminAuthWrapper;
