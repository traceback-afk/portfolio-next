"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import type Writeup  from "@/types/writeup"
import { MoveRightIcon } from "lucide-react"

export default function Writeups() {
    const [posts, setPosts] = useState<Writeup[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/writeups")
            const data: Writeup[] = await res.json()
            setPosts(data.slice(0,4))
        }
        fetchPosts()
    }, [])

    return (
        <section className="flex flex-col min-h-screen w-full justify-center relative" id="writeups">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-3xl font-semibold text-zinc-300"
            >
                Security Writeups
            </motion.h1>

            <div className="mt-8 flex flex-col gap-3">

                {posts.map(p => (
                    <motion.a key={p.slug} href={`/writeups/${p.slug}`}
                        initial={{ opacity: 0 , x:20}}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}

                        className="text-zinc-400
                        w-full group border border-zinc-800
                        backdrop-blur-sm hover:border-rose-600
                        transition-colors duration-200 shadow-2xl
                        bg-zinc-900 flex justify-between">

                        <div className="flex flex-col py-4 px-4">
                            <h1 className="text-xl mb-1
                            transition-colors duration-200">

                                {p.title}
                            </h1>
                            <p className="text-md text-zinc-500">
                                {p.description}

                            </p>
                            <div className="flex gap-2">
                                {p.tags.map((tag)=>(
                                    <small key={tag}>
                                        {tag}|
                                    </small>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-end py-2 pe-4">
                            <MoveRightIcon strokeWidth={1}
                            className="group-hover:stroke-rose-600
                            transition-colors duration-200 stroke-zinc-400"/>
                        </div>

                    </motion.a>
                ))}
            </div>
        </section>
    )
}