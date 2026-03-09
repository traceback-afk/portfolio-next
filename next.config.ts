import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
  }
})


const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};

export default withMDX(nextConfig)
