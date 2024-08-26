"use client";

import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { PiHandshakeLight } from "react-icons/pi";
import { Button } from "../ui/button";

const FAQs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section
      ref={ref}
      id="faqs"
      className="w-full h-fit bg-[#E7E8F4] flex-center flex-col gap-4 p-4 lg:px-[175px] lg:py-[100px] overflow-hidden"
    >
      <motion.p
        variants={fadeInOut("down", "tween", 0.2, 0.5)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden"
      >
        <PiHandshakeLight size={20} className="mr-1" /> FAQ
      </motion.p>
      <motion.p
        variants={fadeInOut("down", "tween", 0.2, 0.8)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-full h-fit text-center text-4xl font-black"
      >
        Frequently Asked Questions
      </motion.p>
      <div className="w-full h-full flex-1 flex gap-2 mt-6">
        <div className="h-full w-full lg:w-[570px] space-y-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-full h-fit space-y-4"
            >
              <h3 className="w-full text-lg md:text-xl line-clamp-1">
                What should entrepreneurs never do?
              </h3>
              <p className="w-full text-sm md:text-md line-clamp-3">
                I’m a serial entrepreneur and have started/ran/sold
                approximately 20 businesses over the past 45 years. Some of my
                businesses made millions, some of them broke even. But - I never
                lost a dime on a single one.
              </p>
            </motion.div>
          ))}
        </div>
        <div className="h-full w-full lg:w-[570px] space-y-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-full h-fit space-y-4"
            >
              <h3 className="w-full text-lg md:text-xl line-clamp-1">
                What should entrepreneurs never do?
              </h3>
              <p className="w-full text-sm md:text-md line-clamp-3">
                I’m a serial entrepreneur and have started/ran/sold
                approximately 20 businesses over the past 45 years. Some of my
                businesses made millions, some of them broke even. But - I never
                lost a dime on a single one.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="p-2 overflow-hidden">
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full lg:h-[224px] flex-between flex-col md:flex-row gap-4 bg-white/70 border border-slate-400 rounded-lg mt-6 md:mt-12 p-4 lg:p-[30px] overflow-hidden"
        >
          <div className="h-fit w-full lg:w-[515px]">
            <p className="w-full text-lg md:text-xl lg:text-3xl font-black">
              Have more questions?
            </p>
            <div className="text-sm md:text-md text-balance font-thin">
              If you’re a business with a large payments volume or unique
              business model, reach out to discuss alternative pricing options.
            </div>
          </div>
          <Link href="/contact#">
            <Button className="bg-[#7573BF] hover:bg-[#7573BFd8] text-md md:text-lg font-bold px-6 py-4 md:p-7 hover:-translate-y-0.5 active:translate-y-0 ease-in-out duration-300">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
