import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "Become a Green partner | Green Loop",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords:
    "Green loop, green loop africa, green loop nigeria, about green loop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F1F1F8]">
      <div className="text-black">
        <PageNavbar dynamicLogo={false} className="bg-[#F8FFF4]" />
      </div>
      {children}
      <Footer />
    </main>
  );
}
