"use client"

import Link from "next/link"
import { MoveUpRightIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { NavMenu } from "./NavMenu"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`w-full flex justify-center fixed z-1 transition-all duration-300
        border-b border-transparent
      ${scrolled ? "bg-zinc-900/80 backdrop-blur-md shadow-2xl  border-b border-zinc-800" : ""}`}
    >
      <div className="flex py-4 w-10/12 justify-between">
        <div>
          <Link href="/" className="text-zinc-200 font-bold text-lg">
            Khashayar
          </Link>
        </div>

        <div className="justify-between items-center gap-8 hidden md:flex">
          <Link href="/projects" className="text-zinc-200 font-semibold">Projects</Link>
          <Link href="/writeups" className="text-zinc-200 font-semibold">Writeups</Link>

          <a href="#" className="text-zinc-200 font-semibold flex items-center gap-1">
            Github
            <MoveUpRightIcon size={15}/>
          </a>

          <a href="#" className="text-zinc-200 font-semibold flex items-center gap-1">
            LinkedIn
            <MoveUpRightIcon size={15}/>
          </a>
        </div>
        <div className="md:hidden">
            <NavMenu/>
        </div>
      </div>
    </div>
  )
}