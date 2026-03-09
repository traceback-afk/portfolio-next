import Link from "next/link";
import { getAllWriteups } from "@/lib/writeups.server";
import WriteupCard from "@/components/WriteupCard";

export default async function Writeups() {
  const posts = await getAllWriteups()
  return (
    <div className="py-20 w-full justify-start">
      <h1 className="text-3xl font-bold mb-10 text-start text-zinc-100">Writeups</h1>
      <div className="flex justify-between flex-wrap">
        <div className="w-full md:w-3/12">
          <h1>search</h1>
        </div>
        <div className="md:w-9/12 grid grid-cols-1 md:grid-cols-2 gap-2">
          {posts.map(p => (
            <Link key={p.slug} href={`/writeups/${p.slug}`}>
              <WriteupCard title={p.frontmatter.title}
                        description={p.frontmatter.description}
                        tags={p.frontmatter.tags}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}