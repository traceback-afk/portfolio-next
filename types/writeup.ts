import type WriteupFrontmatter from "./writeupFrontmatter";
import type { MDXContent } from "mdx/types";

type Writeup = {
  slug: string;
  frontmatter: WriteupFrontmatter
  content: MDXContent;
};

export default Writeup;