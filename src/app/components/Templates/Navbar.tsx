"use client";

import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import { LuFolderOpen } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import Menu from "../ui/Menu";
import { sidebarItems } from "@/data/sidebar";
import Image from "next/image";
import userImg from "../../../images/user.svg";

const Navbar = () => {
  const [isNotificationMenu, setIsNotificationMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const navigate = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate.push("/login");
  };

  const handleToggleSidebar = () => {
    // if (isSidebarOpen) {
    //   setIsSidebarOpen(false);
    // } else {
    //   setIsSidebarOpen(true);
    // }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = sessionStorage.getItem("green-loop-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <nav className="fixed left-0 lg:left-[250px] right-0 top-0 z-50 bg-white py-1 gilroy">
      <div className="flex justify-between items-center px-6 py-3 md:py-5 md:px-8 lg:px-8">
        <h1 className="text-neutrals900 font-bold text-lg md:text-xl">
          {sidebarItems.find((item) => item.href.includes(pathname))?.label ||
            "Dashboard"}
        </h1>

        <div className="flex justify-start gap-3">
          <div className="relative w-64 sm:w-72 h-9 sm:block hidden ">
            <BiSearch
              className="text-neutrals200 absolute left-4 top-[10px]"
              size={20}
            />
            <input
              placeholder="Search anything here"
              className="focus:border-neutral-200 ease transition-all border-transparent border-2 rounded-full bg-neutralBase placeholder:text-neutrals200 text-neutrals900 h-full w-full outline-none pl-11"
            />
          </div>

          <Menu
            isOpen={isNotificationMenu}
            setIsOpen={setIsNotificationMenu}
            MenuIcon={
              <button className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all">
                <BsBell size={24} className="text-neutrals900" />
              </button>
            }
            className="w-[400px] pb-7 pt-0"
            Content={
              <div className="flex flex-col justify-start items-start w-full max-h-96 h-max overflow-y-auto">
                <h2 className="text-base lg:text-lg _semibold font-medium mt-4 text-[#2A2B2B]">
                  Notifications
                </h2>
                <div className="w-full space-y-3 mt-4">
                  <div className="w-full">
                    <div className="w-full gap-3 flex justify-start items-center">
                      <div className="p-2 rounded-full bg-primary100 text-primary">
                        <LuFolderOpen className="" size={20} />
                      </div>
                      <p className="_medium text-[#2A2B2B] text-xs md:text-sm">
                        Confirm point award
                      </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-5 text-xs md:text-sm mt-1">
                      <p className="text-[#6A6B6B] ">
                        Confirm points awarded to Johnbosco davies
                      </p>
                      <button className="_medium text-primary p-2 rounded-md hover:bg-primary100 ease transition">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full gap-3 flex justify-start items-center">
                      <div className="p-2 rounded-full bg-primary100 text-primary">
                        <LuFolderOpen className="" size={20} />
                      </div>
                      <p className="_medium text-[#2A2B2B] text-xs md:text-sm">
                        Confirm point award
                      </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-5 text-xs md:text-sm mt-1">
                      <p className="text-[#6A6B6B] ">
                        Confirm points awarded to Johnbosco davies
                      </p>
                      <button className="_medium text-primary p-2 rounded-md hover:bg-primary100 ease transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Menu
            isOpen={isProfileMenu}
            setIsOpen={setIsProfileMenu}
            MenuIcon={
              <button className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all">
                <Image
                  width={25}
                  height={25}
                  src={userImg}
                  alt="avatar"
                  role="button"
                />
              </button>
            }
            className="w-[300px] py-7"
            Content={
              <div className="flex flex-col justify-center items-center w-full">
                <Image
                  width={30}
                  height={30}
                  src={userImg}
                  alt="avatar"
                  className="h-12 w-12 md:w-14 md:h-14"
                />
                <h2 className="text-sm lg:text-base  font-medium mt-4 text-neutral-950">
                  {user?.userDetails?.fullName}
                </h2>
                <p className="text-xs md:text-sm  text-neutrals500">
                  {user?.userDetails?.email}
                </p>

                <button
                  onClick={handleLogOut}
                  className="hover:opacity-80 ease transition-all px-4 py-2 rounded-md bg-error100 flex justify-center items-center gap-2.5 text-error900 mt-5 font-inter"
                >
                  <RxExit />
                  <p className="text-xs md:text-sm">Log out</p>
                </button>
              </div>
            }
          />

          <button
            // onClick={handleToggleSidebar}
            // onClick={() => setIsSidebarOpen(true)}
            className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all block lg:hidden"
          >
            <GiHamburgerMenu className="text-neutrals900" size={20} />
          </button>
        </div>
        {/* Logo */}
        {/* <Link href="/">
          <Image
            src="/logo.svg"
            alt="Lamb logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
