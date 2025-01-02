import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Weycler",
  description:
    "GreenLoop Waste Services Limited is dedicated to turning waste into value.",
  keywords:
    "Green loop, green loop nigeria, register green loop, signup green loop, sign up green loop nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="bg-[#F1F1F8]">{children}</main>
      </body>
    </html>
  );
}
