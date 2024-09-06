"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { MdArrowForward } from "react-icons/md";
import { services } from "@/lib/data";

const Service = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default Service;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex flex-col gap-10 bg-[#E7E8F4] p-4 lg:px-[170px] lg:py-[100px] overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl uppercase"
          >
            Our Services
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl md:text-2xl lg:text-5xl text-[#161540] text-balance font-extrabold leading-10 lg:leading-[65px]"
          >
            Since 2000, Patel & Gupta, Chartered Accountants, has been offering
            expert services in Audit & Assurance, Advisory, and Taxation.
          </motion.p>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-4 md:gap-5 items-center p-2 my-4 md:px-[120px] md:py-8 overflow-hidden"
      >
        <div className="container grid grid-cols-1 gap-8 px-6 md:px-8 lg:grid-cols-2 mt-8">
          {services.map((service, index) => (
            <motion.div
              variants={fadeInOut("up", "tween", 0.2, 0.2 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-fit h-fit group flex flex-col p-6 space-y-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4 translate-y-1 hover:-translate-y-2 ease-in-out duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex justify-between flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-zinc-500 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="w-fit inline-flex items-center mt-4 text-green-600 group-hover:underline underline-offset-8 group-hover:translate-x-1 ease-in-out duration-300"
                >
                  Learn More{" "}
                  <MdArrowForward className="ml-2 group-active:translate-x-2 ease-in-out duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
