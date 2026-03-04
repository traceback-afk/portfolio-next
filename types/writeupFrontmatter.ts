import type Image from "./image"

type WriteupFrontmatter = {
    title: string
    date: string
    description: string
    author: string
    tags: string[]
    image: Image
}

export default WriteupFrontmatter

