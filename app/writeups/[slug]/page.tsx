import { getWriteupBySlug } from "@/lib/writeups.server";
import MdxLayout from "@/components/MdxLayout";

type Props = {
  params: { slug: string };
};

export default async function WriteupPage({ params }: Props) {
  const { slug } = await params;

  const post = await getWriteupBySlug(slug);

  if (!post) return <div>Writeup not found</div>;

  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-20">
      <MdxLayout>
        <h1>{post.title}</h1>
        {post.content}
      </MdxLayout>  
    </article>
  );
}