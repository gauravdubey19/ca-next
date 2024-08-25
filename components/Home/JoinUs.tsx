"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";

export default function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full h-[50vh] lg:h-[70vh] flex-center bg-[url(https://www.jagranimages.com/images/newimg/09022023/09_02_2023-office_meeting_tips_f_23323658.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-black/60 p-4 md:px-10 lg:px-32 ">
        <div className="space-y-4">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden"
          >
            <PiHandshakeLight size={20} className="mr-1" /> We Are Here For Your
            Tax Relief.
          </motion.p>
          <motion.h2
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wider text-[#fff] relative"
          >
            Join Us today and let us help{" "}
            <span className="underline underline-offset-8">
              you
            </span>{" "}
            to grow your business.
          </motion.h2>
        </div>
        <motion.div
          variants={fadeInOut("left", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="flex flex-col items-end gap-4"
        >
          <div className="flex flex-wrap w-full items-center bg-white space-x-2 rounded-lg p-2 overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 outline-none focus:border-b border-b-gray-400 ease-in-out duration-300"
            />
            <Button
              size="sm"
              className="bg-[#FDC24C] hover:bg-[#fdc24cd8] text-black fill-black space-x-1 flex-1"
            >
              <span className="text-md md:text-lg font-light">
                Subscribe Now
              </span>
              <FaArrowUp
                size={20}
                className="scale-90 md:scale-100 rotate-45"
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
