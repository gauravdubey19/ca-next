"use client";

import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
      </main>
    </>
  );
};

export default Blog;

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
            Our Blog
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
      </section>
    </>
  );
};
