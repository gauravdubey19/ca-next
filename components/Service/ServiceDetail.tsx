"use client";

import { services } from "@/lib/data";
import { ServiceValues } from "@/lib/types";
import { fadeInOut } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServiceDetail = ({ id }: { id: number }) => {
  const service: ServiceValues = services[id];

  return (
    <>
      <main className="w-full h-fit space-y-10 bg-gradient-to-b from-[#E7E8F4] to-white p-4 lg:px-[170px] lg:py-[100px] overflow-hidden">
        <motion.div
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          animate="show"
          className="w-full h-fit"
        >
          <div className="flex-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-full mx-auto">
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
            />
          </div>
        </motion.div>
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit mt-2 text-center text-2xl md:text-3xl lg:text-5xl text-[#161540] text-balance font-black leading-10 lg:leading-[65px]"
          >
            {service.title}
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 1.2)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit text-center text-[#504e97] text-md md:text-lg lg:text-xl mt-5"
          >
            {service.description}
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 1.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit text-[#504e97] text-md md:text-lg lg:text-xl mt-5 text-balance text-justify"
          >
            {service.detail}
          </motion.p>
        </div>
      </main>
    </>
  );
};

export default ServiceDetail;
