import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Carousel from "../ui/Carousel";

const WhatWeDo = () => {
  return (
    <section className="w-full min-h-screen bg-[#243D31] flex-center px-4 py-8 xl:px-[175px] overflow-hidden">
      <div className="w-full max-w-screen-xl flex flex-col gap-6 items-center py-16">
        <div className="rounded-full bg-zinc-300 text-sm md:text-lg font-light shadow-lg px-5 py-3 text-center">
          🤝 We Are Here For Your Tax Relief.
        </div>
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-white">
          Consultant tax is built for small businesses.
        </h2>

        <div className="hidden sm:grid grid-cols-1 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-10 overflow-x-scroll md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none">
          {services.map(({ id, title, description, image, link, ctaText }) => (
            <div key={id} className="group text-white snap-center shrink-0">
              <div className="w-full h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
                <p className="text-zinc-200 mb-4 text-sm md:text-base">
                  {description}
                </p>
                <Link
                  href={link}
                  className="inline-flex items-center text-zinc-100 transition-colors duration-300 group-hover:underline underline-offset-4"
                  prefetch={false}
                  aria-label={`Learn more about ${title}`}
                >
                  {ctaText}
                  <MdArrowForward className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:hidden mt-10">
          <Carousel
            slidesToShow={1}
            autoplay={true}
            arrows={false}
            autoplaySpeed={3000}
          >
            {services.map(
              ({ id, title, description, image, link, ctaText }) => (
                <div key={id} className="group text-white p-4">
                  <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image}
                      alt={title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-zinc-200 mb-4 text-sm">{description}</p>
                    <Link
                      href={link}
                      className="inline-flex items-center text-zinc-100 transition-colors duration-300 group-hover:underline underline-offset-4"
                      prefetch={false}
                      aria-label={`Learn more about ${title}`}
                    >
                      {ctaText}
                      <MdArrowForward className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

const services = [
  {
    id: 0,
    title: "Operational Excellence",
    description:
      "Enhance your operations to achieve efficiency and excellence.",
    image:
      "https://cdn.prod.website-files.com/5f55ff47b6d23a11cb496a69/633d4bb18c35be84fb7ab5ef_pexels-thirdman-7994325.jpg",
    link: "#",
    ctaText: "Check out Case Study",
  },
  {
    id: 1,
    title: "Analytics Consulting",
    description:
      "Leverage data-driven insights to propel your business forward.",
    image:
      "https://media.istockphoto.com/id/1408262049/photo/female-co-workers-meet-to-discuss-project.jpg?s=612x612&w=0&k=20&c=thl6QqXI4ple0-0eL8asWpaUGPEehbPz2F96YskcR9U=",
    link: "#",
    ctaText: "Check out Case Study",
  },
  {
    id: 2,
    title: "Analytics Strategy",
    description:
      "Develop a robust analytics strategy to stay ahead of the curve.",
    image:
      "https://img.freepik.com/free-photo/person-presenting-their-job-resignation_23-2149445124.jpg",
    link: "#",
    ctaText: "Check out Case Study",
  },
];
