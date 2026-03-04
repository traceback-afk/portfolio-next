import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type Writeup from "@/types/writeup";
import type WriteupFrontmatter from "@/types/WriteupFrontmatter";

const WRITEUPS_PATH = path.join(process.cwd(), "content/writeups");


export function getAllWriteups(): Omit<Writeup, "contentHtml">[] {
  const files = fs.readdirSync(WRITEUPS_PATH);

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const fileContent = fs.readFileSync(path.join(WRITEUPS_PATH, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      ...(data as WriteupFrontmatter),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getWriteupBySlug(slug: string): Promise<Writeup | null> {
  const filePath = path.join(WRITEUPS_PATH, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  console.log("Looking for slug:", slug, "Files:", fs.readdirSync(WRITEUPS_PATH));
  return {
    slug,
    ...(data as WriteupFrontmatter),
    contentHtml,
  };
}