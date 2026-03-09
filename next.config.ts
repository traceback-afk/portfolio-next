import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";
import nextMDX from "@next/mdx";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
};


const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins:[[rehypePrettyCode, options]]
  }
})

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};

export default withMDX(nextConfig)
