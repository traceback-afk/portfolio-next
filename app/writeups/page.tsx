import Link from "next/link";
import { getAllWriteups } from "@/lib/writeups.server";

export default async function Writeups() {
  const posts = await getAllWriteups()
  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-10">Writeups</h1>

      {posts.map((post) => (
        <Link key={post.slug} href={`/writeups/${post.slug}`}>
          <div className="mb-6 p-6 border rounded-lg hover:bg-neutral-900">
            <h2 className="text-xl font-semibold">{post.frontmatter.title}</h2>
            <p className="text-neutral-400">{post.frontmatter.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}