import Image from "next/image";
import React from "react";
import { PiHandshakeLight } from "react-icons/pi";

const AboutUs = () => {
  return (
    <>
      <section className="w-full h-full">
        <Hero />
        <Story />
        <Business />
        <Success />
      </section>
    </>
  );
};

export default AboutUs;

const Hero = () => (
  <>
    <div className="relative w-full h-fit flex flex-col gap-10 p-4 lg:px-[120px] lg:py-[100px]">
      <div className="absolute inset-0 -z-10 w-full h-[50vh] md:h-[calc(100vh-83px)] bg-[#E7E8F4]"></div>
      <div className="w-full h-fit lg:h-[170px]">
        <p className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl text-balance uppercase">
          About PATEL & GUPTA
        </p>
        <p className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-10 lg:leading-[65px]">
          We{"’"}re making work meaningful for everyone, everywhere.
        </p>
      </div>
      <div className="h-full lg:h-[648px] w-full rounded-3xl overflow-hidden">
        <Image
          src={
            "https://consultia-nextjs.vercel.app/assets/img/about/about-6.jpg"
          }
          alt="banner"
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </>
);

const Story = () => (
  <>
    <div className="w-full h-fit space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10">
      <h2 className="w-full h-fit text-xl md:text-3xl lg:text-5xl font-black">
        Our Story
      </h2>
      <div className="w-full h-fit flex flex-col md:flex-row gap-5">
        <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
          The firm {'"PATEL & GUPTA, Chartered Accountants"'} was incorporated
          in the year 2000 as a partnership firm with four partners, with a
          vision to provide quality professional services with greater accuracy
          and transparency through multi-locations branches spread across
          states.
        </p>
        <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
          The firm is also engaged in providing financial assistance from banks
          and FIs by the way of Term Loan, Short-term and long-term Working
          Capital Loan, Mortgage Loan, Unsecured Loans, Heavy
          Equipment/Machinery Loans, Export Credit, LC, and Bank Guarantee
          facilities, catering to the needs and requirements best suited to
          clients.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row gap-5">
        <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
          Our firm has also been engaged previously for field audit and
          documentation on behalf of Standard Chartered Bank for their Supply
          Chain Finance product under Dealer Financing Flexiloan in M.P.,
          Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
        </p>
        <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
          Firm is also engaged in providing financial assistance from banks and
          FIs by the way of Term Loan, Short-term and long-term Working Capital
          Loan, Mortgage Loan, Unsecured Loans, Heavy Equipment/Machinery Loans,
          Export Credit, LC, and Bank Guarantee facilities, looking to the need
          and requirement best suited to the clients.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row gap-5">
        <p className="w-full h-fit flex-1 text-sm md:text-md lg:text-lg font-thin text-balance text-justify">
          Our firm has also been engaged previously for field audit and
          documentation on behalf of Standard Chartered Bank for their Supply
          Chain Finance product under Dealer Financing Flexiloan in M.P.,
          Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
        </p>
      </div>
    </div>
  </>
);

const Business = () => (
  <>
    <div className="w-full h-screen flex-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden">
      <div className="w-full h-full flex-1 rounded-xl overflow-hidden">
        <Image
          src={
            "https://consultia-nextjs.vercel.app/assets/img/about/about22.png"
          }
          alt="banner"
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex-1 space-y-4">
        <p className="w-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
          <PiHandshakeLight size={20} className="mr-1" /> We doing super
          business since 1998.
        </p>
        <p className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide">
          We Handle The Most Tedious Bookkeeping Tasks of Your Business
          Operations.
        </p>
        <p className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify">
          Imagine building some of the most sophisticated hardware-driven
          technologies in the world {"–"} spacecraft, drones or autonomous
          vehicles. Then imagine being unable to easily share your data to
          different teams, having to use clunky user interfaces, and relying on
          a single person manually inputting data
        </p>
        <p className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify">
          Excel spreadsheet to bottom line your project. To solve this problem,
          Violet Labs is developing a cloud-based platform that can act as a
          single source of truth, collecting the data from all the tools and
          making them easily accessible across teams. Hoag likened the product
          to Zapier, which uses APIs to talk to different tools.
        </p>
      </div>
    </div>
  </>
);

const Success = () => (
  <>
    <div className="w-full h-screen flex-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden">
      <div className="w-full h-full flex-center flex-1">
        <div className="space-y-4">
          <p className="w-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
            <PiHandshakeLight size={20} className="mr-1" /> Our Success in
            Numbers
          </p>
          <p className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide">
            We Handle The Most Tedious Bookkeeping Tasks of Your Business
            Operations.
          </p>
          <p className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify">
            Experienced, knowledgeable professionals in Property Tax Consulting.
            Our team of Property Tax Consultants is committed to saving you
            money by obtaining the lowest possible assessed value for your
            commercial or residential properties.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex-1 rounded-xl overflow-hidden">
        <Image
          src={
            "https://consultia-nextjs.vercel.app/assets/img/about/about22.png"
          }
          alt="banner"
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </>
);
