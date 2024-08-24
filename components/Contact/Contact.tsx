import Link from "next/link";
import React from "react";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { PiHandshakeLight } from "react-icons/pi";
import { Button } from "../ui/button";
import JoinUs from "../Home/JoinUs";

const Contact = () => {
  return (
    <>
      <section className="">
        <Hero />
        <Form />
        <FAQ />
        <JoinUs />
      </section>
    </>
  );
};

export default Contact;

const Hero = () => (
  <>
    <div className="w-full h-fit flex flex-col gap-10 bg-gradient-to-b from-[#E7E8F4] to-white p-4 lg:px-[175px] lg:py-[100px]">
      <div className="w-full h-fit lg:h-[170px]">
        <p className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl uppercase">
          CONTACT
        </p>
        <p className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-10 lg:leading-[65px]">
          We{"’"}re making work meaningful for everyone, everywhere.
        </p>
      </div>
      <div className="w-full h-fit lg:h-[154px] flex-center flex-col md:flex-row gap-4">
        {contact.map((card, index) => (
          <Link
            href={card.href}
            key={index || card.id}
            className="h-full w-[300px] md:w-[365px] flex justify-center gap-4 bg-white rounded-2xl p-4 md:p-6 lg:p-[28px] shadow-md hover:-translate-y-1 ease-in-out duration-300 overflow-hidden"
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
        ))}
      </div>
    </div>
  </>
);

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

const Form = () => (
  <>
    <div className="w-full h-fit flex-center flex-col lg:flex-row gap-2 p-4 lg:px-[175px] lg:py-[100px] overflow-hidden">
      <div className="h-fit w-full lg:h-[80vh] lg:w-[380px] space-y-4 p-2">
        <p className="w-fit flex-center rounded-full bg-[#7a77c641] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
          <PiHandshakeLight size={20} className="mr-1" /> Our Success in
          Numbers.
        </p>
        <p className="text-xl md:text-3xl lg:text-5xl text-balance font-bold">
          Let{"’"}s Work Together
        </p>
        <p className="text-md md:text-lg lg:text-xl text-balance font-thin mt-2">
          Share your vision for your next projects with us now. Please contact
          us for basic questions. we{"’"}re here to help!
        </p>
      </div>
      <div className="h-fit w-full lg:h-[80vh] flex flex-1 flex-col gap-2 p-2 lg:p-4 br"></div>
    </div>
  </>
);

const FAQ = () => (
  <>
    <div
      id="faq"
      className="w-full h-fit bg-[#E7E8F4] flex-center flex-col gap-4 p-4 lg:px-[175px] lg:py-[100px] overflow-hidden"
    >
      <p className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
        <PiHandshakeLight size={20} className="mr-1" /> FAQ
      </p>
      <p className="w-full h-fit text-center text-4xl font-black">
        Frequently Asked Questions
      </p>
      <div className="w-full h-full flex-1 flex gap-2 mt-6">
        <div className="h-full w-full lg:w-[570px] space-y-6">
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
        </div>
        <div className="h-full w-full lg:w-[570px] space-y-6">
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
          <div className="w-full h-fit space-y-4">
            <h3 className="w-full text-lg md:text-xl line-clamp-1">
              What should entrepreneurs never do?
            </h3>
            <p className="w-full text-md md:tex-lg line-clamp-3">
              I{"'"}m a serial entrepreneur and have started/ran/sold
              approximately 20 businesses over the past 45 years.Some of my
              businesses made millions, some of them broke even. But - I never
              lost a dime on a single one.
            </p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="w-full lg:h-[224px] flex-between flex-col md:flex-row gap-4 bg-white/70 border border-slate-400 rounded-lg mt-6 md:mt-12 p-4 lg:p-[30px]">
          <div className="h-fit w-full lg:w-[515px]">
            <p className="w-full text-lg md:text-xl lg:text-3xl font-black">
              Have more questions?
            </p>
            <div className="text-md md:text-lg text-balance font-thin">
              If you{"’"}re a business with a large payments volume or unique
              business model, reach out to discuss alternive pricing options.
            </div>
          </div>
          <Link href="/contact#" className="w-fit h-fit">
            <Button className="bg-[#7573BF] hover:bg-[#7573BFd8] text-md md:text-lg font-bold  px-6 py-4 md:p-7 hover:-translate-y-0.5 active:translate-y-0 ease-in-out duration-300">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);
