"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { links } from "@/lib/data";
import { BsTelephone } from "react-icons/bs";

const Navbar: React.FC<{ appName?: string }> = ({ appName = "LOGO" }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 83);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 h-[83px] w-full flex-between ${
        isScrolled ? "bg-white" : pathname === "/" ? "bg-white" : "bg-[#E7E8F4]"
      } text-black p-2 px-4 md:px-8 lg:px-20 xl:px-28 2xl:px-32 lg:h-[80px] transition-colors duration-300`}
    >
      <Link href="/" className="text-2xl lg:text-3xl font-black">
        {appName}
      </Link>

      <MobileNav />

      <nav className="hidden md:flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10 text-md font-normal">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              className={`capitalize cursor-pointer px-1 ${
                isActive
                  ? "text-primary font-semibold border-b border-b-primary"
                  : "hover:border-b hover:border-b-primary active:translate-y-0.5"
              } ease-in-out duration-200`}
            >
              {link.head}
            </Link>
          );
        })}
      </nav>

      <Link
        href={"/contact"}
        className="relative hidden group w-fit h-14 md:flex items-center gap-2 p-1 overflow-hidden"
      >
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#7a77c641] group-hover:bg-transparent group-hover:border group-hover:border-[#7a77c6d2] flex-center ease-in-out duration-300">
          <BsTelephone size={20} />
        </div>
        <div className="hidden md:flex flex-col w-fit h-full py-0.5">
          <span className="text-xs">Hotline 24/7</span>
          <span className="md:text-xl lg:text-2xl font-medium">
            +91 1234567890
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
