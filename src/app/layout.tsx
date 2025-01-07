import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/global/Navbar";
// import Footer from "./components/global/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WhatsappStickyButton from "./components/global/WhatsappStickyButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Green Loop",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords: "Green loop, Green loop nigeria, GreenLoop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased scroll-smooth`}
      >
        <main className="bg-[#F1F1F8] overflow-hidden">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <WhatsappStickyButton />
        </main>
      </body>
    </html>
  );
}
