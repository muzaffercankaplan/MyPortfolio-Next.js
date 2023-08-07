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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <head />
      <body>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        {pathName !== "/contacts" && (
          <div className="hidden lg:flex fixed z-20 top-1/3">
            <SideBar />
          </div>
        )}

        <div
          onClick={() => setIsOpen(false)}
          className={`${
            pathName === "/projects"
              ? "h-screen"
              : "max-w-[1200px] pt-4 md:pt-40 h-[90vh]"
          }   mx-auto text-center flex flex-col justify-between`}
        >
          <main>{children}</main>
          {pathName !== "/contacts" && <Footer />}
        </div>
      </body>
    </html>
  );
}
