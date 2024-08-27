"use client";
// const ref = useRef(null);
// const isInView = useInView(ref, { amount: 0.3 });

// ref={ref}

// motion.p
//           variants={fadeInOut("down", "tween", 0.2, 0.5)}
//           initial="hidden"
//           animate={isInView ? "show" : "exit"}
import { motion, useInView } from "framer-motion";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div ref={ref} className="flex-between flex-col bg-muted  border-t">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8 px-4 py-6 md:px-16 md:py-10 lg:px-24 lg:py-16">
        <div className="space-y-4">
          <Link href="/" className="w-fit h-fit overflow-hidden">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="w-fit h-fit"
            />
          </Link>
          <p className="text-muted-foreground text-sm md:text-md text-balance">
            {footerData.companyDescription}
          </p>
        </div>
        {footerData.columns.map((column, index) => (
          <div
            key={index}
            className="w-fit h-fit flex flex-col gap-2 md:gap-4 lg:gap-6 md:px-4"
          >
            <h4 className="text-lg md:text-xl font-semibold">{column.title}</h4>
            {column.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="w-fit text-muted-foreground text-sm md:text-md lg:text-lg hover-underline-lr hover:translate-x-2 ease-in-out duration-300"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <h4 className="text-lg md:text-xl font-semibold">Contact</h4>
          {footerData.contactInfo.map((info, index) => (
            <Link
              href={info.href}
              key={index}
              className="w-fit h-fit flex items-center gap-2 hover:translate-x-1.5 ease-in-out duration-300"
            >
              {info.icon}
              <span className="hover-underline-lr text-muted-foreground text-sm md:text-md lg:text-lg">
                {info.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="container max-w-7xl flex-between flex-col-reverse md:flex-row gap-4 border-t border-t-slate-300 py-4 md:py-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} {footerData.copyright}
        </p>
        <div className="flex items-center gap-4 md:mr-10">
          {footerData.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.lable}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const footerData = {
  companyDescription:
    "Offering tailored financial solutions, including term loans, working capital loans, mortgage and unsecured loans, heavy equipment financing, export credit, LC, and bank guarantee facilities to meet your unique needs.",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/patel-&-gupta-chartered-accountants/about/",
      lable: "LinkedIn",
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
    {
      href: "#",
      lable: "Facebook",
      icon: <FacebookIcon className="h-5 w-5" />,
    },
    {
      href: "#",
      lable: "Instagram",
      icon: <InstagramIcon className="h-5 w-5" />,
    },
    { href: "#", lable: "Twitter", icon: <TwitterIcon className="h-5 w-5" /> },
  ],
  columns: [
    {
      title: "Our Company",
      links: [
        { label: "Service", href: "/service" },
        { label: "About us", href: "/about-us" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Learn",
      links: [{ label: "Our Blog", href: "/blog" }],
    },
    {
      title: "Resources",
      links: [{ label: "FAQs", href: "/#faqs" }],
    },
  ],
  contactInfo: [
    {
      type: "phone",
      label: "India",
      value: "+91 7647867870",
      href: "/tel:+91 7647867870",
      icon: <FiPhoneOutgoing size={20} className="text-muted-foreground" />,
    },
    {
      type: "phone",
      label: "India",
      value: "+91 7312405500",
      href: "/tel:+91 7312405500",
      icon: <FiPhoneOutgoing size={20} className="text-muted-foreground" />,
    },
    {
      type: "email",
      label: "General Info",
      value: "audit@patelngupta.com",
      href: "/mailto:audit@patelngupta.com",
      icon: <MdOutlineEmail size={20} className="text-muted-foreground" />,
    },
  ],
  copyright: "All Rights Reserved by Patel & Gupta CA's.",
};
