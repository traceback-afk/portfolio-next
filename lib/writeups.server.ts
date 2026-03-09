import { readFile } from "fs/promises";
import path from "path";
import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import {read} from "to-vfile"
import {matter} from "vfile-matter"

import type Writeup from "@/types/writeup";
import { readdirSync } from "fs";

const WRITEUPS_DIR = "content/writeups"
const WRITEUPS_PATH = path.join(process.cwd(), WRITEUPS_DIR);

export async function getAllWriteups(): Promise<Omit<Writeup, "content">[]> {
  const files = readdirSync(WRITEUPS_PATH)

  const writeups = await Promise.all(
    files.map(async (f) => {
      const slug = f.replace(".mdx", "")
      const file = await read(path.join(WRITEUPS_PATH, f))
      matter(file)
      const frontmatter = file.data.matter as Writeup["frontmatter"]
      return {
        slug,
        frontmatter
      }
    })
  )
  console.log(writeups)

  return writeups.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}
