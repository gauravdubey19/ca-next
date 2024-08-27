"use client";

import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import { fadeInOut } from "@/lib/utils";

interface BlogPostDetailProps {
  post: SanityDocument;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const {
    title,
    description,
    imageURL,
    authorName,
    authorBio,
    authorImage,
    categoryName,
    publishedAt,
    body,
  } = post;

  return (
    <article className="w-full h-fit bg-gradient-to-b from-[#E7E8F4] to-white overflow-hidden">
      <div className="max-w-5xl p-4 lg:p-8 space-y-8 mx-auto">
        <header className="space-y-4 overflow-hidden">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="text-sm text-gray-500"
          >
            {categoryName && <span>{categoryName} • </span>}
            <time>{new Date(publishedAt).toLocaleDateString()}</time>
          </motion.p>
          <motion.h2
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="text-3xl font-bold text-gray-800"
          >
            {title}
          </motion.h2>
        </header>

        {imageURL && (
          <motion.div
            variants={fadeInOut("up", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="w-full h-64 md:h-96 overflow-hidden rounded-lg"
          >
            <Image
              src={imageURL}
              alt={title}
              width={400}
              height={600}
              objectFit="cover"
              className="w-full h-full"
            />
          </motion.div>
        )}

        <div className="lg:flex lg:space-x-6">
          <section className="prose lg:prose-xl max-w-none text-gray-700 lg:flex-1">
            <motion.p
              variants={fadeInOut("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              animate="show"
              className="text-lg text-gray-600"
            >
              {description}
            </motion.p>
            {/* {body &&
            body.map((block: any, i: number) => (
              <p key={i}>{block.children[0]?.text}</p>
            ))} */}
          </section>

          <motion.div
            variants={fadeInOut("left", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="lg:w-1/3 mt-8 lg:mt-0 space-y-2"
          >
            <p className="text-sm text-zinc-500">Author</p>
            <div className="flex gap-2 items-center lg:space-x-4">
              {authorImage && (
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {authorName}
                </h2>
                {authorBio && authorBio.length > 0 && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {authorBio[0]?.children[0]?.text}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
