import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  description,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "authorSlug": author->slug
}`;

export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  description,
  "slug": slug.current
}`;
// author->name == $author &&
export const singlePostQuery = groq`*[_type == "post" &&  slug.current == $slug][0]{
  _id,
  title,
  description,
  mainImage,
  body,
  "authorName": author->name,
  "authorBio": author->bio,
  "authorImage": author->image.asset->url,
  "categoryName": category->title,
  "categorySlug": category->slug.current,
  publishedAt,
  "slug": slug.current,
  "imageURL": mainImage.asset->url,
}`;

// // Get a single post by its slug
// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
//     title, description, mainImage, body
//   }`;

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
//   }`;
