"use client";

import { useEffect, useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
// import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { adminCaller } from "@/interceptors";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import Select from "@/app/components/ui/Select";
import { wallet_transaction_history } from "@/data/dashboard";

interface ITable {
  onOpenModal: () => void;
  data: any[];
}

interface ITransactionsListResponse {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  role: null;
  userType: string;
  firstName: string;
  lastName: string;
  staffCode: string;
  email: string;
  isActive: boolean;
  imageUrl: string;
  nearestBusStop: string;
  lga: string;
  referralCount: number;
}

const TransactionHistoryTable = ({ onOpenModal }: ITable) => {
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState<number>(1);
  const [schedule, setSchedule] = useState({ value: "", label: "" });
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const navigate = useRouter();

  const { data: transaction_histor = [], isLoading } = useQuery<
    ITransactionsListResponse[]
  >({
    queryKey: ["RecycleHistory"],
    queryFn: async () =>
      adminCaller.get("transactions").then((res) => res.data?.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransactionsListResponse[] | any[]
  >([]);
  const totalPages = Math.ceil(
    wallet_transaction_history?.length / itemsPerPage
  );

  // console.log("data", individual_customers);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = wallet_transaction_history?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleViewCustomer = (id: string) => {
    navigate.push(`/dashboard/user-management/${id}`);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = currentItems.filter(
          (item) =>
            item.category?.toLowerCase().includes(search) ||
            item.amount?.toLowerCase()?.includes(search) ||
            item.type?.toLowerCase()?.includes(search)
        );

        setFilteredTransactions(data || []);
      } else {
        setFilteredTransactions(wallet_transaction_history);
      }
    }
  }, [searchQuery, currentItems?.length]);

  return (
    <div className="w-full ">
      <div className="mb-2 w-full p-4 md:p-5 rounded-lg flex justify-between items-center gap-4 bg-white md:flex-nowrap flex-wrap">
        <div className="flex justify-start items-center gap-7 min-w-max">
          <h2 className="font-semibold text-base xl:text-lg text-neutral-900 min-w-max w-full">
            Transaction History
          </h2>

          <div className="min-w-max">
            <Select
              onChange={(value) => setSchedule(value)}
              selected={schedule}
              placeholder="All schedule"
              options={[]}
            />
          </div>
          <div className="min-w-max">
            <Select
              onChange={(value) => setSchedule(value)}
              selected={schedule}
              placeholder="Select date range"
              options={[]}
            />
          </div>
        </div>
        {/* 
          <div className="flex justify-start items-center gap-2">
            <button
              onClick={onOpenModal}
              className="text-sm md:text-base flex justify-start items-center gap-2 bg-primary text-white h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55"
            >
              <GoPlus />
              <p className="">Add user</p>
            </button>
          </div> */}
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
          <thead className="text-neutrals500 text-xs sm:text-sm md:text-base  border-b border-neutrals100 rounded-t-lg">
            <tr className="w-full">
              <th className="p-3 rounded-tl-xl font-normal">
                <div
                  title="Sort by Customer ID"
                  className="flex justify-start items-center gap-2"
                >
                  <input className="h-4 w-4 rounded-lg bg-transparent border" />
                  <p>Tranaction ID</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>
              <th className="p-3 font-normal">
                <div
                  title="Sort by customer"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Transaction type</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>

              <th className="p-3 font-normal">
                <div
                  title="Sort by address"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Amount</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>

              <th className="p-3 font-normal">
                <div
                  title="Sort by type"
                  className="flex justify-start items-center gap-2"
                >
                  <p>Date</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </th>

              <th className="p-3 font-normal">
                <p>Status</p>
              </th>
              {/* <th className="px-4 py-2 rounded-tr-xl"></th> */}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions?.map((item, index) => (
              <tr
                key={index}
                className="w-full border-b border-neutrals100 _medium text-neutrals500 text-xs md:text-sm ease transition-all duration-300 hover:bg-gray-100"
              >
                <td className=" p-4">
                  <p>{item?.category}</p>
                </td>
                <td className="px-2 py-4">{item?.type || "N/A"}</td>
                <td className="px-2 py-4">{item?.amount || "N/A"}</td>
                <td className="px-2 py-4">{item?.date || "N/A"}</td>
                <td className="px-2 py-4 text-center flex justify-center items-center">
                  <p
                    className={`${
                      item?.status === "completed"
                        ? "bg-primary100 text-primary_success border-primary_success"
                        : item?.status === "pending"
                        ? "bg-warning100 text-warning border-warning"
                        : item?.status === "missed"
                        ? "bg-error100 text-error900 border-error900"
                        : ""
                    } border-2 rounded-full px-2 py-0.5 capitalize w-fit`}
                  >
                    {item?.status}
                  </p>
                </td>

                {/* <td className="py-2 px-4">
                  <Menu
                    isOpen={openMenuId === index}
                    setIsOpen={(state) => setOpenMenuId(state ? index : null)}
                    MenuIcon={
                      <button className="rounded-full hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-50 ease transition-all duration-300 p-2">
                        <BsThreeDots color="black" size={23} />
                      </button>
                    }
                    Content={
                      <div className="w-full  flex flex-col">
                        <button
                          onClick={() => handleViewCustomer(item?.id)}
                          className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                        >
                          <FaRegEye />
                          <p>View customer</p>
                        </button>
                        <button
                          // onClick={() => handleViewCustomer()}
                          className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                        >
                          <MdOutlineEdit />
                          <p>Edit customer</p>
                        </button>
                      </div>
                    }
                  />
                </td> */}
              </tr>
            ))}

            {isLoading ? <LoadingSkeleton length={5} /> : null}

            {currentItems.length < 1 && !isLoading ? (
              <tr className="w-full border-b border-neutrals100 _medium text-neutrals500">
                <td
                  className="px-2 py-4 text-center text-lg"
                  colSpan={5}
                  rowSpan={5}
                >
                  No transactions found
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {currentItems.length > 1 && (
          <div className="w-full flex justify-end items-center gap-3 mt-5 bg-white rounded-lg p-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronLeft size={20} className="text-neutrals200" />
            </button>
            <span className="text-sm text-neutrals700">
              {page} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronRight size={20} className="text-neutrals200" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistoryTable;
