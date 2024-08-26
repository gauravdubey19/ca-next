"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { PiHandshakeLight } from "react-icons/pi";

const Contact = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
      </main>
    </>
  );
};

export default Contact;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex flex-col gap-10 bg-gradient-to-b from-[#E7E8F4] to-white p-4 lg:px-[170px] lg:py-[100px] overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl uppercase"
          >
            CONTACT
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-10 lg:leading-[65px]"
          >
            We{"’"}re making work meaningful for everyone, everywhere.
          </motion.p>
        </div>
        <div className="w-full h-fit lg:h-[154px] flex-center flex-col md:flex-row gap-4">
          {contact.map((card, index) => (
            <motion.div
              variants={fadeInOut("up", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index || card.id}
              className="h-full w-[300px] md:w-[365px]"
            >
              <Link
                href={card.href}
                className="h-full w-full flex justify-center gap-4 bg-white rounded-2xl p-4 md:p-6 lg:p-[28px] shadow-md hover:-translate-y-1 ease-in-out duration-300 overflow-hidden"
              >
                <div className="lg:mt-3">{card.icon}</div>
                <div className="h-full w-fit lg:w-[236px]">
                  <p className="h-fit w-full uppercase text-sm md:text-md">
                    {card.head}
                  </p>
                  <p className="h-fit w-full text-lg lg:text-xl font-bold text-balance">
                    {card.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-md overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.875210368742!2d75.86785456070011!3d22.702077083233164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1dfc0a9c5f%3A0x23a5731660493bcf!2sPATEL%20%26%20GUPTA%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1724614880575!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full border-none"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
};

interface ContactValues {
  id: number;
  head: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contact: ContactValues[] = [
  {
    id: 0,
    head: "Call Us",
    value: "+91 1234567890",
    href: "/tel:+91 1234567890",
    icon: <FiPhoneOutgoing size={30} />,
  },
  {
    id: 1,
    head: "Email Us",
    value: "ca@example.com",
    href: "/mailto:ca@example.com",
    icon: <MdOutlineEmail size={30} />,
  },
  {
    id: 2,
    head: "HEADQUARTERS",
    value: "Vikram Tower, Sapna Sangeeta Road, Indore (M.P)",
    href: "/#",
    icon: <SlLocationPin size={30} />,
  },
];

const Form = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex-center flex-col lg:flex-row gap-2 p-4 lg:px-[175px] lg:py-[100px] overflow-hidden"
      >
        <div className="h-fit w-full lg:h-[80vh] lg:w-[380px] space-y-4 p-2">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-fit flex-center rounded-full bg-[#7a77c641] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden"
          >
            <PiHandshakeLight size={20} className="mr-1" /> Our Success in
            Numbers.
          </motion.p>
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="text-xl md:text-3xl lg:text-5xl text-balance font-bold"
          >
            Let{"’"}s Work Together
          </motion.p>
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1.2)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="text-md md:text-lg lg:text-xl text-balance font-thin mt-2"
          >
            Share your vision for your next projects with us now. Please contact
            us for basic questions. we{"’"}re here to help!
          </motion.p>
        </div>
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="h-fit w-full lg:h-[80vh] flex flex-1 flex-col gap-2 p-2 lg:p-4 br"
        ></motion.p>
      </section>
    </>
  );
};
