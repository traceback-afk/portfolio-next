"use client";

import Link from "next/link";
import { motion } from "motion/react";
import AsciiArt from "./AsciiArt";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row justify-between h-screen w-full md:pt-10 items-center"
    >
        <div className="flex flex-col items-start text-start w-full md:w-6/12">
          <motion.h1
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
            className="font-bold text-6xl text-zinc-100 text-shadow-lg
            font-geist-mono max-w-xl tracking-tight"
          >
            Backend developer interested in cybersecurity.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.8}}
            className="text-2xl leading-relaxed mt-6
          tracking-tight text-zinc-400 font-semibold max-w-md"
          >
            I make things for the web, and break them to see how they tick.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:1.4}}
            className="flex gap-4 flex-wrap justify-start text-center mt-8">
            <Link href="/#projects">
              <Button>Projects</Button>
            </Link>
            <Link href="/writeups" className="py-2 px-8 border-2 border-rose-600
            shadow-xl text-rose-600 text-xl font-semibold w-full md:w-auto">
              Security Writeups
            </Link>
          </motion.div>
        </div>
        <div className="relative w-6/12 justify-end hidden md:flex">
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2
              w-200 h-200
              bg-[radial-gradient(circle,rgba(200,100,100,0.02),transparent_60%)]
              rounded-full pointer-events-none -z-1"
          />
          <AsciiArt src="/ascii/ascii-art-200x90.txt" />
        </div>


    </section>
  );
}