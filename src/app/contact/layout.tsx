import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "Contact | Recycling website",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords:
    "terms and conditions greenloop, terms and conditions greenloop, conditions greenloop, terms greenloop, terms greenloop nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F1F1F8] overflow-hidden">
      <PageNavbar />
      {children}
      <Footer />
    </main>
  );
}
