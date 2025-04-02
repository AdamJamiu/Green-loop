"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
// import useApp from "@/app/hooks/useApp";
import { sidebarItems } from "@/data/sidebar";

const Sidebar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useRouter();

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate.push("/login");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = sessionStorage.getItem("green-loop-admin");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <aside className="fixed left-0 top-0 bottom-0 bg-primary pb-10 pt-6 w-[250px] z-20 lg:block hidden h-screen">
      <div className="w-full">
        <div className="px-4">
          <img src="/logo.svg" alt="greenloop logo" className="mx-auto mb-7" />
        </div>

        <div className="px-4">
          <div className="flex justify-start items-center gap-3 w-full text-white bg-primary600 p-3 rounded-lg mb-5">
            <img src="/johnsonD.png" alt="johnsonD" />
            <div className="w-full">
              <p className="text-xs lg:text-sm font-medium font-clash_display_medium">
                {user?.userDetails?.fullName}
              </p>
              <p className="font-clash_display text-xs">
                {user?.userDetails?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[70vh] overflow-y-auto sidebar-scroll px-4">
          <div className="flex flex-col justify-start items-start gap-1 border-b border-neutral-100 pb-5">
            {sidebarItems.slice(0, 2).map((item, index) => (
              <SidebarItem index={index} item={item} key={index} />
            ))}
          </div>

          <div className="flex flex-col justify-start items-start gap-1 border-b border-neutral-100 py-5">
            {sidebarItems.slice(2, 5).map((item, index) => (
              <SidebarItem index={index} item={item} key={index} />
            ))}
          </div>

          <button
            onClick={handleLogOut}
            className="mt-7 justify-start items-center gap-3 hover:text-primary flex font-clash_display w-full text-white hover:bg-primary600 ease transition-all px-2 py-3 rounded-md"
          >
            <CiLogout size={24} />
            <p>Log out</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export const MobileSidebar = () => {
  // const { setIsSidebarOpen, isSidebarOpen } = useApp();
  let setIsSidebarOpen;
  let isSidebarOpen;
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      // setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        isSidebarOpen ? "z-[999]" : "invisible opacity-0 -z-[999]"
      }`}
    >
      <div className="fixed inset-0 z-[99] ease transition-all duration-200 bg-black opacity-55"></div>

      <aside
        ref={contentRef}
        className={`${
          isSidebarOpen
            ? "z-[9999]"
            : "-translate-x-[10000px] opacity-0 -z-[999]"
        } ease transition-all duration-300 fixed left-0 top-0 bottom-0 bg-primary py-10 px-4 w-[300px] sm:w-[250px]`}
      >
        <div className="w-full">
          <img src="/logo.svg" alt="greenloop logo" className="mx-auto mb-7" />

          <div className="flex flex-col justify-start items-start">
            {sidebarItems.map((item, index) => (
              <SidebarItem index={index} item={item} key={index} />
            ))}
            <div className="mt-5">
              <SidebarItem
                index={sidebarItems.length - 1 + 1}
                item={{
                  href: "/settings",
                  icon: CiSettings,
                  label: "Settings",
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export const SidebarItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [subItemHeight, setSubItemHeight] = useState(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const handleToggle = (index: number | null, href?: string) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex === index && ref.current) {
      setSubItemHeight(ref.current.clientHeight);
    } else {
      setSubItemHeight(0);
    }
  }, [activeIndex]);

  return (
    <div key={item.href} className="relative w-full min-h-max">
      <button
        onClick={() => handleToggle(index)}
        className={`${
          pathname.includes(item.href)
            ? "font-clash_display_medium bg-primary600"
            : "font-clash_display hover:bg-primary600 hover:text-primary"
        } flex items-center justify-between gap-3 w-full text-white ease transition-all px-2 py-3 rounded-md`}
      >
        <Link
          href={item.href}
          className="flex justify-start items-center gap-3"
        >
          <item.icon size={24} />
          <p>{item.label}</p>
        </Link>

        {item.subItems && (
          <FaChevronDown
            className={`${
              activeIndex === index ? "rotate-180" : "rotate-0"
            } text-sm transition-transform duration-200`}
          />
        )}
      </button>
      {item.subItems && activeIndex === index && (
        <div
          className={`text-white overflow-hidden transition-[max-height] duration-300 ${
            activeIndex === index ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {item.subItems.map((subItem: any) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              // onClick={handleToggle}
              className={`${
                pathname === subItem.href ? "font-semibold" : ""
              } block px-4 py-2 transition w-full hover:bg-primary600 font-clash_display`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sidebar;
