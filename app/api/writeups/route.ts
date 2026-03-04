import { NextResponse } from "next/server"
import { getAllWriteups } from "@/lib/writeups.server"

export async function GET() {
  const posts = getAllWriteups()
  return NextResponse.json(posts)
}