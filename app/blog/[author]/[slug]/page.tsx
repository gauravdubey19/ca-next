import { SanityDocument } from "next-sanity";
import { singlePostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BlogDetailParams } from "@/lib/types";
import BlogPostDetail from "@/components/Blog/BlogPostDetail";

export default async function BlogDetailPage({ params }: BlogDetailParams) {
  const post = await sanityFetch<SanityDocument>({
    query: singlePostQuery,
    params,
  });

  return <BlogPostDetail post={post} />;
}
