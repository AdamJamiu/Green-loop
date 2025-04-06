import { FaRegCircleUser } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import { LuNotepadText } from "react-icons/lu";
import { RiHome7Line, RiHome7Fill } from "react-icons/ri";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { LuWallet } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import { PiHandWithdraw } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const sidebarItems = [
  {
    href: "/dashboard/",
    label: "Dashboard",
    icon: RxDashboard,
    active_icon: TbLayoutDashboardFilled,
  },
  {
    href: "/dashboard/schedule-recycle",
    label: "Schedule recycle",
    icon: IoCalendarOutline,
  },

  {
    href: "/dashboard/wallet-history",
    label: "Wallet history",
    icon: LuWallet,
    active_icon: FaWallet,
  },
  {
    href: "/dashboard/withdraw-money",
    label: "Withdraw money",
    icon: PiHandWithdraw,
    active_icon: PiHandWithdrawFill,
  },
  {
    href: "/dashboard/bills-utilities",
    label: "Bills and utilities",
    icon: LiaMoneyBillWaveAltSolid,
    active_icon: FaMoneyBill1Wave,
  },
];
