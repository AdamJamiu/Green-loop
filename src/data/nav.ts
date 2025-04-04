import { TNavItem } from "@/types/nav.types";

// icons
import { BiSupport } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { TbBrandPaypal } from "react-icons/tb";
import { LuScanQrCode } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";

export const products: TNavItem[] = [
  {
    icon: IoWalletOutline({}),
    label: "Earn as You Waste",
    link: "/",
  },
  // {
  //   icon: TbBrandPaypal({}),
  //   label: "Pay as You Waste",
  //   link: "/",
  // },
  {
    icon: LuScanQrCode({}),
    label: "Smart Waste Management",
    link: "/",
  },
];

export const company: TNavItem[] = [
  {
    icon: IoWalletOutline({}),
    label: "About Us",
    link: "/about",
  },
  {
    icon: TbBrandPaypal({}),
    label: "Mission",
    link: "/about#mission",
  },
  {
    icon: RiTeamLine({}),
    label: "Vision",
    link: "/about#vision",
  },
];

export const help: TNavItem[] = [
  {
    icon: GrContact({}),
    label: "Contact",
    link: "/contact",
  },
  {
    icon: BiSupport({}),
    label: "Support",
    link: "/support",
  },
];
