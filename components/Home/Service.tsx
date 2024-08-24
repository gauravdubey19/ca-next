import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <section className="relative w-full h-fit bg-[#243D31]">
        <div className="absolute inset-0 w-full h-[70px] flex-center">
          <div className="-mt-14 lg:top-0 w-28 h-28 md:w-32 md:h-32 flex-center bg-white border rounded-full p-1">
            <MdArrowDownward size={40} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-4 md:gap-5 items-center p-2 my-4 md:px-[120px] py-[90px] overflow-hidden">
          <div className="w-fit h-fit flex-center rounded-full bg-zinc-300 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden">
            🤝 We Are Here For Your Tax Relief.
          </div>
          <div className="w-full md:w-[35%] text-center text-4xl font-extrabold text-white">
            Consulatant tax is built for small business.
          </div>
          <div className="container grid grid-cols-1 gap-8 px-6 md:px-8 lg:grid-cols-2 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-6 space-y-4 bg-white/20 backdrop-blur-md text-white rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4 translate-y-1 hover:-translate-y-1 ease-in-out duration-300"
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
                    <p className="mt-2 text-zinc-200  ">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center mt-4 text-green-600 hover:underline"
                  >
                    Learn More <MdArrowForward className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/service" className="mt-8">
            <Button className="bg-[#FDC24C] hover:bg-[#fdc24cd8] space-x-1 px-6 py-4 md:p-7">
              <span className="text-md md:text-lg font-bold text-black">
                Explore More Services
              </span>
              <FaArrowUp size={20} className="rotate-45 fill-black" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Service;

const services = [
  {
    id: 0,
    title: "IRS Tax Problems",
    description:
      "We offer expert guidance to help you navigate and resolve complex IRS tax issues effectively.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business1.png",
    link: "#",
  },
  {
    id: 1,
    title: "Business Tax Preparation",
    description:
      "Our team ensures your business taxes are filed correctly, maximizing deductions and minimizing liabilities.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business2.png",
    link: "#",
  },
  {
    id: 2,
    title: "Personal Tax Services",
    description:
      "From simple to complex returns, we handle all your personal tax needs with precision and care.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business3.png",
    link: "#",
  },
  {
    id: 3,
    title: "Tax Planning & Consulting",
    description:
      "Strategize your tax plan with our expert consulting services to optimize your financial outcomes.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business4.png",
    link: "#",
  },
];
