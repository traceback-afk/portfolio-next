import path from "node:path"
import { readFile } from "node:fs/promises"
import { compile, run } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import type WriteupFrontmatter from "@/types/writeupFrontmatter"
import MdxLayout from "@/components/MdxLayout"

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
  })

  const { default: Content, frontmatter } = await run(compiled, runtime) as {
    default: React.ComponentType
    frontmatter: WriteupFrontmatter
  }

  if (!Content) return <div>Writeup not found</div>

  return (
    <div className="flex justify-center pt-20 w-full">
      <MdxLayout>
        <h1>{frontmatter.title}</h1>
          <Content />
      </MdxLayout>
    </div>

  )
}