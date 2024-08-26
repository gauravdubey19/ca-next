"use client";

import { useRef } from "react";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";
import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
const Blog = ({ posts = [] }: { posts?: SanityDocument[] }) => {
  console.log(posts);

  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
        {posts && <Posts posts={posts} />}
      </main>
    </>
  );
};

export default Blog;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex flex-col gap-10 bg-[#E7E8F4] p-4 lg:px-[170px] lg:py-[100px] overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl uppercase"
          >
            Our Blog
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-10 lg:leading-[65px]"
          >
            We{"’"}re making work meaningful for everyone, everywhere.
          </motion.p>
        </div>
      </section>
    </>
  );
};

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full h-fit p-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            variants={fadeInOut("up", "tween", 0.2, 0.5 * index)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            key={post._id}
            className="group border rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <Image
                src={post.imageURL}
                alt={post.title}
                width={350}
                height={150}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{post.title}</h3>
              <Link
                href={`/blog/${post.authorSlug?.current}/${post.slug?.current}`}
                className="inline-flex items-center text-zinc-900 transition-colors duration-300 group-hover:underline underline-offset-4 text-sm"
                prefetch={false}
                aria-label={`Learn more about ${post.title}`}
              >
                Read More
                <MdArrowForward className="ml-1 w-4 h-4 -rotate-45" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
