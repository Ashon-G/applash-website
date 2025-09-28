import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/blog-layout";
import { getBlogBySlug } from "@/lib/blog";

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  let blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  let blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <BlogLayout blog={blog}>
      <div dangerouslySetInnerHTML={{ __html: blog.content ?? "" }} />
    </BlogLayout>
  );
}
