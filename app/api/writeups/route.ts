import { NextResponse } from "next/server"
import { getAllWriteups } from "@/lib/writeups.server"

export async function GET() {
  const posts = await getAllWriteups()
  return NextResponse.json(posts)
}