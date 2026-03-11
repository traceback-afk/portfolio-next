"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import type Writeup  from "@/types/writeup"
import WriteupCard from "./WriteupCard"

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
        <section className="flex flex-col py-20 w-full justify-center relative" id="writeups">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-3xl font-semibold text-zinc-300"
            >
                Security Writeups
            </motion.h1>

            <div className="mt-8 gap-3 grid md:grid-cols-3">

                {posts.map(p => (
                    <motion.a key={p.slug} href={`/writeups/${p.slug}`}
                        initial={{ opacity: 0 , x:20}}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}>
                        <WriteupCard title={p.frontmatter.title}
                                    description={p.frontmatter.description}
                                    tags={p.frontmatter.tags}/>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}