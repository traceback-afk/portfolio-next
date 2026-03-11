// lib/rehypeCollectHeadings.ts
import { visit } from "unist-util-visit"
import type { Node } from "hast"

export type Heading = {
  text: string
  level: number
  slug: string
}

export function rehypeCollectHeadings() {
  return (tree: Node, file: any) => {
    if (!file.data) file.data = {}
    const headings: Heading[] = []

    visit(tree, "element", (node: any) => {
      if (node.tagName && /^h[1-6]$/.test(node.tagName) && node.children) {
        const level = parseInt(node.tagName[1], 10)

        const text = node.children
          .filter((child: any) => child.type === "text")
          .map((child: any) => child.value)
          .join("")

        const slug = node.properties?.id

        headings.push({
          text,
          level,
          slug,
        })
      }
    })

    file.data.headings = headings
  }
}