import type { Metadata } from "next";
import Navbar from "../components/Templates/Navbar";
import Footer from "../components/Templates/Footer";
import Sidebar, { MobileSidebar } from "../components/Templates/Sidebar";
// import AppProvider from "../provider";

export const metadata: Metadata = {
  title: "GreenLoop Admin Dashboard",
  description: "GreenLoop Super Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <AppProvider> */}
      <Navbar />
      <Sidebar />
      <MobileSidebar />
      {children}
      <Footer />
      {/* </AppProvider> */}
    </div>
  );
}
