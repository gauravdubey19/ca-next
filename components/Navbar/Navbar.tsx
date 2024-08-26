"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { links } from "@/lib/data";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";

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
      className={`sticky top-0 z-[99999] h-[60px] w-full flex-between ${
        isScrolled ? "bg-white" : pathname === "/" ? "bg-white" : "bg-[#E7E8F4]"
      } text-black p-2 px-4 md:px-6 lg:px-20 xl:px-28 2xl:px-32 transition-colors duration-300 overflow-hidden`}
    >
      <Link
        href="/"
        className="w-48 md:w-60 h-fit animate-slide-down overflow-hidden"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-fit h-fit"
        />
      </Link>

      <MobileNav />

      <nav className="relative hidden md:flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10 animate-slide-down text-sm font-thin">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              className={`capitalize cursor-pointer hover-link ${
                isActive ? "font-semibold active" : ""
              } ease-in-out duration-200`}
            >
              {link.head}
            </Link>
          );
        })}
      </nav>

      <Link
        href={"/contact"}
        className="relative hidden animate-slide-down group w-fit h-10 md:h-14 lg:flex items-center gap-2 p-1 overflow-hidden"
      >
        <div className="w-8 h-8 lg:w-10 lg:h-10 p-1 flex-center rounded-full bg-[#7a77c641] group-hover:bg-transparent group-hover:border group-hover:border-[#7a77c6d2] ease-in-out duration-300">
          <BsTelephone
            size={20}
            className="group-hover:fill-[#7a77c6d2] ease-in-out duration-300"
          />
        </div>
        <div className="hidden md:flex flex-col w-fit h-full py-0.5">
          <span className="text-xs">Hotline 24/7</span>
          <span className="md:text-lg lg:text-xl font-medium">
            +91 7647867870
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
