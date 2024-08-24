"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PiHandshakeLight } from "react-icons/pi";
import { fadeInOut } from "@/lib/utils";

const AboutUs = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
        <Story />
        <Business />
        {/* <Success /> */}
      </main>
    </>
  );
};

export default AboutUs;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-10 p-4 lg:px-[120px] lg:py-[100px]"
      >
        <div className="absolute inset-0 -z-10 w-full h-[30vh] md:h-[50vh] lg:h-[calc(100vh-83px)] bg-[#E7E8F4]"></div>
        <div className="w-full h-fit lg:h-[170px]">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl text-balance uppercase"
          >
            About PATEL & GUPTA
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-2 lg:leading-[65px]"
          >
            We{"’"}re making work meaningful for everyone, everywhere.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="h-full lg:h-[648px] w-full rounded-3xl overflow-hidden"
        >
          <Image
            src={
              "https://consultia-nextjs.vercel.app/assets/img/about/about-6.jpg"
            }
            alt="banner"
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <div
        ref={ref}
        className="w-full h-fit space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10"
      >
        <motion.h2
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-xl md:text-3xl lg:text-5xl font-black"
        >
          Our Story
        </motion.h2>
        <div className="w-full h-fit flex flex-col md:flex-row gap-5">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify"
          >
            The firm {'"PATEL & GUPTA, Chartered Accountants"'} was incorporated
            in the year 2000 as a partnership firm with four partners, with a
            vision to provide quality professional services with greater
            accuracy and transparency through multi-locations branches spread
            across states.
          </motion.p>
          <motion.p
            variants={fadeInOut("left", "tween", 0.2, 1)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify"
          >
            The firm is also engaged in providing financial assistance from
            banks and FIs by the way of Term Loan, Short-term and long-term
            Working Capital Loan, Mortgage Loan, Unsecured Loans, Heavy
            Equipment/Machinery Loans, Export Credit, LC, and Bank Guarantee
            facilities, catering to the needs and requirements best suited to
            clients.
          </motion.p>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row gap-5">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1.3)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify"
          >
            Our firm has also been engaged previously for field audit and
            documentation on behalf of Standard Chartered Bank for their Supply
            Chain Finance product under Dealer Financing Flexiloan in M.P.,
            Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
          </motion.p>
          <motion.p
            variants={fadeInOut("left", "tween", 0.2, 1.3)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify"
          >
            Firm is also engaged in providing financial assistance from banks
            and FIs by the way of Term Loan, Short-term and long-term Working
            Capital Loan, Mortgage Loan, Unsecured Loans, Heavy
            Equipment/Machinery Loans, Export Credit, LC, and Bank Guarantee
            facilities, looking to the need and requirement best suited to the
            clients.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit flex flex-col md:flex-row gap-5"
        >
          <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
            Our firm has also been engaged previously for field audit and
            documentation on behalf of Standard Chartered Bank for their Supply
            Chain Finance product under Dealer Financing Flexiloan in M.P.,
            Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
          </p>
        </motion.div>
      </div>
    </>
  );
};

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <div
      ref={ref}
      className="w-full h-screen flex-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden"
    >
      <motion.div
        variants={fadeInOut("right", "tween", 0.2, 0.5)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-full h-full flex-1 rounded-xl overflow-hidden"
      >
        <Image
          src={
            "https://consultia-nextjs.vercel.app/assets/img/about/about22.png"
          }
          alt="banner"
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-full h-full flex-1 space-y-4">
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden"
        >
          {/* <PiHandshakeLight size={20} className="mr-1" /> */}
          We{"'"}ve been providing exceptional business services since 2000.
        </motion.p>
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide"
        >
          About Our Company
        </motion.p>
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 1)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify"
        >
          The firm {'"PATEL & GUPTA, Chartered Accountants"'} was incorporated
          in the year 2000 as a partnership firm with four partners. Our vision
          is to provide quality professional services with greater accuracy and
          transparency through our multi-location branches spread across states.
        </motion.p>
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 1.2)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify"
        >
          We are also engaged in providing financial assistance from banks and
          financial institutions through various loan options including Term
          Loans, Short-term and Long-term Working Capital Loans, Mortgage Loans,
          Unsecured Loans, Heavy Equipment/Machinery Loans, Export Credit, LC,
          and Bank Guarantee Facilities, tailored to meet the specific needs of
          our clients.
        </motion.p>
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 1.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify"
        >
          Our firm has previously been engaged for field audit and documentation
          on behalf of Standard Chartered Bank for their Supply Chain Finance
          product under Dealer Financing Flexiloan in M.P., Gujarat, Rajasthan,
          and in exceptional cases, Haryana and Punjab.
        </motion.p>
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <>
      <div className="w-full h-screen flex-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden">
        <div className="w-full h-full flex-center flex-1">
          <div className="space-y-4">
            <p className="w-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
              <PiHandshakeLight size={20} className="mr-1" /> Our Success in
              Numbers
            </p>
            <p className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide">
              We Handle The Most Tedious Bookkeeping Tasks of Your Business
              Operations.
            </p>
            <p className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify">
              Experienced, knowledgeable professionals in Property Tax
              Consulting. Our team of Property Tax Consultants is committed to
              saving you money by obtaining the lowest possible assessed value
              for your commercial or residential properties.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex-1 rounded-xl overflow-hidden">
          <Image
            src={
              "https://consultia-nextjs.vercel.app/assets/img/about/about22.png"
            }
            alt="banner"
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
