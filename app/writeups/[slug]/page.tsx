import { getWriteupBySlug } from "@/lib/writeups.server";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function WriteupPage({ params }: Props) {
  const { slug } = await params;

  const post = await getWriteupBySlug(slug);

  if (!post) return <div>Writeup not found</div>;

  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-20">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}