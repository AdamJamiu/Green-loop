import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "About | GreenLoop",
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
    <main className="bg-[#F1F1F8] scroll-smooth">
      <PageNavbar dynamicLogo={true} />
      {children}
      <Footer />
    </main>
  );
}
