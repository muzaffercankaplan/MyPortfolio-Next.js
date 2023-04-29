"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SideBar from "../components/Layout/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const pageControl = pathName?.split("/")[2];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head />
      <body>
        {!pageControl && <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
        {!pageControl && <SideBar />}
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            pageControl ? "h-screen" : "max-w-[1200px] pt-4 md:pt-40 h-[90vh]"
          }   mx-auto text-center flex flex-col justify-between`}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
