import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="relative w-full h-fit overflow-hidden">
        <div className="h-fit md:h-[calc(120vh-70px)] flex-center gap-10 px-2 py-4 overflow-hidden">
          <div className="hidden md:flex relative w-[35%] h-full rounded-xl overflow-hidden">
            <Image
              src={
                "https://consultia-nextjs.vercel.app/assets/img/about/about21.png"
              }
              width={550}
              height={550}
              alt={"img"}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full md:w-[45%] space-y-4 p-2 md:px-8 md:py-6">
            <div className="w-fit flex-center rounded-full bg-gray-300/50 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden">
              🤝 We Are Here For Your Tax Relief.
            </div>
            <div className="w-fit space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-950">
                We Handle The Most Tedious Bookkeeping Tasks of Your Business
                Operations.
              </h1>
              <p className="max-w-[600px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light">
                Experienced, knowledgeable professionals in Property Tax
                Consulting. Our team of Property Tax Consultants is committed to
                saving you money by obtaining the lowest possible assessed value
                for your commercial or residential properties.
              </p>
              <p className="max-w-[600px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light">
                At Resolute we are experienced, knowledgeable professionals who
                always stay well-informed on the latest Tax Code changes in
                order to maintain our superior customer service.
              </p>
            </div>
            <div className="w-fit pt-10">
              <Link href="/about">
                <Button className="bg-green-950 hover:bg-green-800 space-x-1 px-6 py-4 md:p-7">
                  <span className="text-md md:text-lg font-bold">
                    More About Us
                  </span>
                  <FaArrowUp size={20} className="rotate-45" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
