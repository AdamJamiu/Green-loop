import { IconType } from "react-icons";

export type TNavItem = {
  label: string;
  icon: any;
  link?: any;
};

export type TNavDropdown = {
  title: string;
  data: TNavItem[];
};
