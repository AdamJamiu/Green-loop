import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Weycler",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords:
    "GreenLoop, greenloop nigeria, register greenloop, signup greenloop, sign up greenloop nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-[#F1F1F8] scroll-smooth">{children}</main>;
}
