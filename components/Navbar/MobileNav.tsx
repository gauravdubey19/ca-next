"use client";

import React, { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { links } from "@/lib/data";
import { BsTelephone } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { MdOutlineMail } from "react-icons/md";

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = (head: string) => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 770) {
      setOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div
            onClick={handleMenuClick}
            className="border border-black rounded-sm"
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="left"
              size={28}
            />
          </div>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="bg-[#5C5B79] text-white backdrop-blur-lg border-none outline-none p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] space-y-4"
          closeIcon={false}
        >
          <SheetTitle className="w-full h-fit flex flex-col items-end text-white">
            <SheetClose className="text-3xl">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                direction="left"
                size={28}
              />
            </SheetClose>
          </SheetTitle>

          <div className="h-fit flex flex-col gap-6 pt-5 overflow-hidden">
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <div
                  key={index}
                  className="cursor-pointer z-50"
                  onClick={() => handleLinkClick(link.head)}
                >
                  <Link
                    href={link.href}
                    className={`w-full capitalize text-2xl ${
                      isActive
                        ? "font-semibold border-b"
                        : "active:translate-y-0.5"
                    }`}
                  >
                    {link.head}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="w-full h-fit pt-5 py-2 space-y-2">
            <h2 className="text-lg">Get in touch</h2>
            <div className="space-y-2">
              {contact.map((contact, index) => (
                <Link
                  href={contact.href}
                  key={index}
                  className="relative flex items-center gap-2 px-2"
                >
                  <div className="w-14 h-14 rounded-full underline underline-offset-8 flex-center ease-in-out duration-300">
                    {contact.icon}
                  </div>
                  <div className="block lg:w-fit h-full space-y-1">
                    <p className="text-md">Hotline 24/7</p>
                    <p className="text-xl">{contact.lable}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

interface ContactProps {
  id: string;
  lable: string;
  href: string;
  icon: React.ReactNode;
}
const contact: ContactProps[] = [
  {
    id: "phone",
    lable: "+91 1234567890",
    href: "/contact",
    icon: <BsTelephone size={22} />,
  },
  {
    id: "email",
    lable: "ca@example.com",
    href: "/mailto:ca@example.com",
    icon: <MdOutlineMail size={22} />,
  },
];
