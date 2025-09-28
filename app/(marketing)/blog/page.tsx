import { type Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { truncate } from "@/lib/utils";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog | Vatas",
  description:
    "Guides, stories, and product notes on building a 24/7 digital sales force with Vatas.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();
  let featuredBlogs = blogs.slice(0, 3);
  let additionalBlogs = blogs.slice(3, 6);

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconClipboardText className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
          <Heading as="h1" className="mt-4">
            Blog
          </Heading>
          <Subheading className="text-center">
            See how teams let AI sellers run their social channels and catch the latest Vatas updates.
          </Subheading>
        </div>

        {featuredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
            {featuredBlogs.map((blog, index) => (
              <BlogCard blog={blog} key={blog.title + index} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-center w-full relative z-20">
            No blog posts available right now. Please check back soon.
          </p>
        )}

        {additionalBlogs.length > 0 && (
          <div className="w-full py-20">
            <p className="text-2xl font-bold text-white mb-10">More Posts</p>

            <div className="divide-y divide-neutral-800">
              {additionalBlogs.map((blog, index) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.slug + index}
                  className="flex md:flex-row flex-col items-start justify-between md:items-center group py-4"
                >
                  <div>
                    <p className="text-neutral-300 text-lg font-medium group-hover:text-white transition duration-200">
                      {blog.title}
                    </p>
                    <p className="text-neutral-300 text-sm mt-2 max-w-xl group-hover:text-white transition duration-200">
                      {truncate(blog.description, 80)}
                    </p>

                    <p className="text-neutral-300 text-sm mt-2 max-w-xl group-hover:text-white transition duration-200">
                      {format(new Date(blog.date), "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <Image
                    src={blog.author.src}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full md:h-10 md:w-10 h-6 w-6 mt-4 md:mt-0 object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
