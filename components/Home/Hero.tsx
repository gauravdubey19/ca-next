"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "../ui/Carousel";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdArrowDownward } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { fadeInOut, zoom } from "@/lib/utils";

export default function Hero() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { amount: 0.3 });
  const isInView2 = useInView(ref2, { amount: 0.3 });

  const [size, setSize] = useState<string>("mobile");
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
    if (windowWidth < 640) {
      setSize("mobile");
    } else if (windowWidth < 1024) {
      setSize("tablet");
    } else {
      setSize("desktop");
    }
  }, [windowWidth]);

  const handleClick = () => {
    let scrollToPosition = 0;

    if (size === "mobile") {
      scrollToPosition = window.innerHeight - 175;
    } else if (size === "tablet") {
      scrollToPosition = window.innerHeight;
    } else if (size === "desktop") {
      scrollToPosition = window.innerHeight + 200;
    }

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <section ref={ref1} className="relative w-full h-fit md:h-[120vh]">
      <div className="h-[calc(90vh-153px)] md:h-[calc(120vh-70px)] flex-center gap-2 px-2 py-4 overflow-hidden">
        <div className="w-full md:w-[43%] h-fit space-y-10 p-2">
          <motion.div
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView1 ? "show" : "exit"}
            className="w-fit flex-center rounded-full bg-gray-300/50 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden"
          >
            💸 Patel & Gupta CA{"'"}s
          </motion.div>
          <div className="w-fit space-y-4">
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 1)}
              initial="hidden"
              animate={isInView1 ? "show" : "exit"}
              className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We are a combination of
            </motion.div>
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 1.2)}
              initial="hidden"
              animate={isInView1 ? "show" : "exit"}
              className="max-w-[600px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light"
            >
              Qualified and Experienced Professionals to cater to the needs of
              high-tech professional services.
            </motion.div>
          </div>
          <motion.div
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView2 ? "show" : "exit"}
            className="w-full flex items-center justify-center md:justify-start flex-col gap-4 sm:flex-row"
          >
            <Button className="bg-green-950 hover:bg-green-800 text-lg font-bold px-6 py-4 md:p-7">
              Get An Estimated Quote
              <FaArrowUp size={20} className="ml-1 rotate-45" />
            </Button>
            <Button className="bg-[#FDC24C] hover:bg-[#fdc24cd8] space-x-1 px-6 py-4 md:p-7">
              <span className="text-lg font-bold text-black">
                Schedule A Call
              </span>
              <FaArrowUp size={20} className="rotate-45 fill-black" />
            </Button>
          </motion.div>
          <div className="w-full h-fit space-y-4">
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 1)}
              initial="hidden"
              animate={isInView2 ? "show" : "exit"}
              className="text-lg md:text-xl"
            >
              Trusted by more than 400+ companies worldwide
            </motion.div>
            <Carousel autoplay={true}>
              {carousel.map((item, index) => (
                <motion.div
                  variants={zoom("in", 0.2, 1.2)}
                  initial="hidden"
                  animate={isInView2 ? "show" : "exit"}
                  key={index}
                  className="w-full md:max-w-[15vw] h-[10vh] scale-50 md:scale-75 lg:scale-95"
                >
                  <Image
                    src={item.img}
                    width={550}
                    height={550}
                    alt="logo"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </Carousel>
          </div>
        </div>
        <motion.div
          variants={zoom("out", 0.2, 0.8)}
          initial="hidden"
          animate={isInView1 ? "show" : "exit"}
          className="hidden lg:flex relative w-[40%] h-full rounded-xl overflow-hidden"
        >
          <Image
            src={hero.imageUrl}
            width={550}
            height={550}
            alt={hero.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-2 w-fit h-fit">
            <Image
              src="https://consultia-nextjs.vercel.app/assets/img/shapes/tax-shape1.png"
              width={200}
              height={200}
              alt={hero.imageAlt}
              loading="lazy"
              className="w-28 h-24"
            />
          </div>
        </motion.div>
      </div>
      <div
        ref={ref2}
        className="absolute -bottom-12 z-20 w-full h-[70px] flex-center"
      >
        <motion.div
          variants={fadeInOut("down", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView2 ? "show" : "exit"}
          className="w-fit h-fit border-t-2 border-dashed border-slate-400 rounded-full p-1"
        >
          <button
            onClick={handleClick}
            className="w-28 h-28 flex-center bg-white border rounded-full p-1"
          >
            <MdArrowDownward size={50} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const hero = {
  imageUrl: "https://consultia-nextjs.vercel.app/assets/img/bg/main2.jpg",
  imageAlt: "Professionals in a discussion",
};

const carousel = [
  {
    id: 0,
    img: "https://www.tematicaresearch.com/wp-content/uploads/2016/04/Google-logo-grey.png",
  },
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/53528f90e4b0768cad09d33b/1646912632339-2Y57Q1XV9TCUTZ0PIO1U/microsoft_logo.png?format=1000w",
  },
  {
    id: 2,
    img: "https://www.tza.com/wp-content/uploads/2021/10/1-12014_amazon-com-logo-vector-gray-amazon-light-logo.jpg",
  },
  {
    id: 3,
    img: "https://logowik.com/content/uploads/images/fedex-services-grey7830.logowik.com.webp",
  },
];
