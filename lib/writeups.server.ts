import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import type Writeup from "@/types/writeup";
import type WriteupFrontmatter from "@/types/writeupFrontmatter";

const WRITEUPS_PATH = path.join(process.cwd(), "content/writeups");

export function getAllWriteups(): Omit<Writeup, "content">[] {
  const files = fs.readdirSync(WRITEUPS_PATH);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fileContent = fs.readFileSync(path.join(WRITEUPS_PATH, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      ...(data as WriteupFrontmatter),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getWriteupBySlug(slug: string) {
  const filePath = path.join(WRITEUPS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
               theme: "material-theme-darker",
            },
          ],
        ],
      },
    },
  });

  return {
    slug,
    ...frontmatter,
    content,
  };
}