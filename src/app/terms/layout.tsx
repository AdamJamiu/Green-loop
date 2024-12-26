import type { Metadata } from "next";
import Footer from "../components/global/Footer";
import PageNavbar from "../components/global/PageNavbar";

export const metadata: Metadata = {
  title: "Recycling website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="bg-[#F1F1F8]">
          <PageNavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
