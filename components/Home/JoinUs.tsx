import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";

export default function JoinUs() {
  return (
    <section className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] flex-center bg-[url(https://www.jagranimages.com/images/newimg/09022023/09_02_2023-office_meeting_tips_f_23323658.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full container grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-black/60 px-4 md:px-32">
        <div className="space-y-4">
          <div className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden">
            <PiHandshakeLight size={20} className="mr-1" /> We Are Here For Your
            Tax Relief.
          </div>
          <h2 className="flex flex-wrap md:flex-col gap-2 text-xl md:text-3xl lg:text-4xl font-bold tracking-wider text-[#fff] relative">
            Join Us today and let us help you
            <span>grow your business.</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="flex w-full max-w-md items-center bg-white space-x-2 rounded-lg p-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 outline-none focus:border-b border-b-gray-400 ease-in-out duration-300"
            />
            <Button className="bg-[#FDC24C] hover:bg-[#fdc24cd8] text-black fill-black space-x-1 px-6 py-4 md:p-6">
              <span className="text-md md:text-lg font-light">
                Subscribe Now
              </span>
              <FaArrowUp size={20} className="scale-90 md:scale-100 rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
