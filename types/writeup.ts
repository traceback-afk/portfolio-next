import type { ReactNode } from "react";
import type WriteupFrontmatter from "./writeupFrontmatter";

type Writeup = WriteupFrontmatter & {
  slug: string;
  content: ReactNode;
};

export default Writeup;