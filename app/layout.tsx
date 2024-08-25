import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const arimo = Arimo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PATEL & GUPTA",
  description:
    'The firm "PATEL & GUPTA, Chartered Accountants" was incorporated in the year 2000 as a partnership firm with four partners. Our vision is to provide quality professional services with greater accuracy and transparency through our multi-location branches spread across states.',
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer companyName="LOGO" />
      </body>
    </html>
  );
}
