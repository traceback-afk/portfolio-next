import path from "node:path"
import { readFile } from "node:fs/promises"
import { compile, run } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import type WriteupFrontmatter from "@/types/writeupFrontmatter"
import MdxLayout from "@/components/MdxLayout"
import rehypePrettyCode from "rehype-pretty-code"
import { rehypeCollectHeadings, type Heading } from "@/lib/rehypeCollectHeadings"
import BackButton from "@/components/BackButton"
import rehypeSlug from "rehype-slug"

type Props = {
  params: { slug: string }
}

const WRITEUPS_DIR = "content/writeups"
const WRITEUPS_PATH = path.join(process.cwd(), WRITEUPS_DIR)

export default async function WriteupPage({ params }: Props) {
  const { slug } = await params

  const filepath = path.join(WRITEUPS_PATH, slug + ".mdx")

  const compiled = await compile(await readFile(filepath), {
    outputFormat: "function-body",
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, {
        theme: "one-dark-pro",
        grid: true,
      }],
      rehypeCollectHeadings,
    ]
  })
  const headings = (compiled.data?.headings ?? []) as Heading[]

  const { default: Content, frontmatter } = await run(compiled, runtime) as {
    default: React.ComponentType
    frontmatter: WriteupFrontmatter
  }

  if (!Content) return <div>Writeup not found</div>

  return (
   <div className="relative flex py-20 w-full justify-center md:justify-center">
    {/* Table of Contents */}
    <div className="mb-8 text-zinc-200 w-64 fixed top-32
                    left-30 hidden md:block">
      <div className="absolute right-0 top-0 h-screen w-px
                      bg-linear-to-b from-zinc-900 via-zinc-500/30
                      to-zinc-900" />
      <BackButton />
      <h2 className="text-lg font-bold mb-2 text-zinc-500">Table of Contents</h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            style={{
              paddingLeft: heading.level > 1 ? `${(heading.level - 1) * 1}rem` : 0,
            }}
          >
            <a
              href={`#${heading.slug}`}
              className="hover:text-rose-500 text-zinc-400
                            transition-colors duration-150"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Main content */}
    <div className="w-full md:ml-30 md:w-7/12 mt-10">
      <MdxLayout>
        <div className="block md:hidden">
          <BackButton/>
        </div>
        <h1>{frontmatter.title}</h1>
        <p className="text-zinc-500">{frontmatter.description}</p>
        <small>Date: {frontmatter.date}</small>
        <br />
        <small>Author: {frontmatter.author}</small>
        <Content />
      </MdxLayout>
    </div>
  </div>
  )
}