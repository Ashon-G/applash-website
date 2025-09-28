import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "unsplash.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "imagedelivery.net" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
