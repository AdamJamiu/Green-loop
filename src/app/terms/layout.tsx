import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "Terms and Conditions | Recycling website",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords:
    "terms and conditions green loop, terms and conditions greenloop, conditions green loop, terms green loop, terms green loop nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F1F1F8] overflow-hidden scroll-smooth">
      <PageNavbar />
      {children}
      <Footer />
    </main>
  );
}
