import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const Article = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full max-w-screen flex flex-col gap-4 md:gap-5 items-center p-4 md:px-8 py-16">
        <div className="flex items-center justify-center rounded-full bg-zinc-300 text-sm md:text-md font-light shadow-lg px-5 py-2">
          🤝 We Are Here For Your Tax Relief.
        </div>
        <h2 className="w-full md:w-[35%] text-center text-2xl md:text-3xl font-extrabold">
          Consultant tax is built for small businesses.
        </h2>
        <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index || article.id}
              className="group border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={350}
                  height={150}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                <Link
                  href={article.link}
                  className="inline-flex items-center text-zinc-900 transition-colors duration-300 group-hover:underline underline-offset-4 text-sm"
                  prefetch={false}
                  aria-label={`Learn more about ${article.title}`}
                >
                  {article.ctaText}
                  <MdArrowForward className="ml-1 w-4 h-4 -rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;

const articles = [
  {
    id: 0,
    title:
      "How To Write Your Consulting Firm Mission Statement (Why It’s Important).",
    image:
      "https://cdn.prod.website-files.com/5f55ff47b6d23a11cb496a69/633d4bb18c35be84fb7ab5ef_pexels-thirdman-7994325.jpg",
    link: "#",
    ctaText: "Read More",
  },
  {
    id: 1,
    title:
      "Personal Branding For Consultants: Be Authentic To Get More Clients.",
    image:
      "https://media.istockphoto.com/id/1408262049/photo/female-co-workers-meet-to-discuss-project.jpg?s=612x612&w=0&k=20&c=thl6QqXI4ple0-0eL8asWpaUGPEehbPz2F96YskcR9U=",
    link: "#",
    ctaText: "Read More",
  },
  {
    id: 2,
    title: "What Is An Entrepreneurial Consultant? (Examples Stories).",
    image:
      "https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE=",
    link: "#",
    ctaText: "Read More",
  },
];