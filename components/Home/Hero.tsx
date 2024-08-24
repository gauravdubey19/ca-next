import Image from "next/image";
import Carousel from "../ui/Carousel";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-fit md:h-[120vh] overflow-hidden">
      <div className="h-[calc(90vh-153px)] md:h-[calc(120vh-70px)] flex-center gap-2 px-2 py-4 overflow-hidden">
        <div className="w-full md:w-[43%] h-fit space-y-10 p-2">
          <div className="w-fit flex-center rounded-full bg-gray-300/50 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden">
            💸 Award-Winning Tax Consultant in Texas
          </div>
          <div className="w-fit space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
              We help you avoid tax blunders
            </h1>
            <p className="max-w-[600px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light">
              Making a mistake on your return can be costly. From missed
              deductions, or worse, the dreaded IRS audit.
            </p>
          </div>
          <div className="w-full flex-center flex-col gap-4 sm:flex-row">
            <Button className="bg-green-950 hover:bg-green-800 text-lg font-bold space-x-1 px-6 py-4 md:p-7">
              Get An Estimated Quote
              <FaArrowUp size={20} className="ml-1 rotate-45" />
            </Button>
            <Button className="bg-[#FDC24C] hover:bg-[#fdc24cd8] space-x-1 px-6 py-4 md:p-7">
              <span className="text-lg font-bold text-black">
                Schedule A Call
              </span>
              <FaArrowUp size={20} className="rotate-45 fill-black" />
            </Button>
          </div>
          <div className="w-full h-fit space-y-4">
            <p className="text-lg md:text-xl">
              Trusted by more than 400+ companies worldwide
            </p>
            <Carousel autoplay={true}>
              {carousel.map((item, index) => (
                <div
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
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="hidden lg:flex relative w-[40%] h-full rounded-xl overflow-hidden">
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
        </div>
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
