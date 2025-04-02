"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappStickyButton = () => {
  const pathname = usePathname();

  if (pathname.includes("/register") || pathname.includes("/login")) {
    return;
  }
  return (
    <Link
      href="https://wa.me/+2349160004254"
      target="_blank"
      className="fixed bottom-5 right-5 rounded-full px-5 py-2 bg-primary_success text-white font-satoshi flex justify-center items-center gap-2 z-[100]"
    >
      <FaWhatsapp size={24} />
      <p className="text-sm sm:text-base md:text-lg">How can I help you?</p>
    </Link>
  );
};

export default WhatsappStickyButton;
