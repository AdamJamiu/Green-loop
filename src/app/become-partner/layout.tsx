import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "Become a Green partner | GreenLoop",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords: "Green loop, greenloop africa, greenloop nigeria, about greenloop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-50">
      <div className="text-black">
        <PageNavbar dynamicLogo={false} className="bg-[#F8FFF4]" />
      </div>
      {children}
      <Footer />
    </main>
  );
}
