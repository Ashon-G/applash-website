const BLOG_ID = "2d1ad23c-5438-4630-b0a8-063471005eb6";
const API_BASE_URL = `https://www.wisp.blog/api/v1/${BLOG_ID}`;

type WispAuthor = {
  name?: string | null;
  image?: string | null;
};

type WispPost = {
  slug: string;
  title: string;
  description?: string | null;
  image?: string | null;
  publishedAt?: string | null;
  createdAt?: string | null;
  content?: string | null;
  author?: WispAuthor | null;
};

interface BlogAuthor {
  name: string;
  src: string;
}

export interface BlogWithSlug {
  slug: string;
  title: string;
  description: string;
  author: BlogAuthor;
  date: string;
  image?: string;
  content?: string;
}

function mapAuthor(author?: WispAuthor | null): BlogAuthor {
  return {
    name: author?.name?.trim() || "Vatas Team",
    src: author?.image || "/avatar.jpeg",
  };
}

function mapPost(post: WispPost, { includeContent = false } = {}): BlogWithSlug {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description?.trim() || "",
    author: mapAuthor(post.author ?? undefined),
    date: post.publishedAt || post.createdAt || new Date().toISOString(),
    image: post.image || undefined,
    content: includeContent ? post.content || "" : undefined,
  };
}

export async function getAllBlogs(): Promise<BlogWithSlug[]> {
  let response = await fetch(`${API_BASE_URL}/posts`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
  }

  let data = (await response.json()) as { posts: WispPost[] };

  return (data.posts || [])
    .map((post) => mapPost(post))
    .sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export async function getBlogBySlug(slug: string): Promise<BlogWithSlug | null> {
  let response = await fetch(`${API_BASE_URL}/posts/${slug}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch blog post: ${response.statusText}`);
  }

  let data = (await response.json()) as { post: WispPost };

  if (!data.post) {
    return null;
  }

  return mapPost(data.post, { includeContent: true });
}
