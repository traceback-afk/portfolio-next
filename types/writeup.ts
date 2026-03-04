import type WriteupFrontmatter from "./WriteupFrontmatter"

type Writeup = WriteupFrontmatter & {
    slug: string
    contentHtml: string
}

export default Writeup