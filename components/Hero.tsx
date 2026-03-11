"use client";

import Link from "next/link";
import { motion } from "motion/react";
import AsciiArt from "./AsciiArt";
import { Button } from "./ui/button";
import BeamsBackground from "./kokonutui/beams-background";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row justify-between h-screen w-full md:pt-10 items-center"
    >
        <div className="flex flex-col items-start text-start w-full md:w-6/12">
        {/* <BeamsBackground className="absolute -z-1 top-0 left-0"/> */}
          <motion.h1
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
            className="font-bold text-6xl text-zinc-50 text-shadow-lg
            max-w-xl tracking-tight font-sans font-bitcount"
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
            className="flex gap-4 flex-wrap justify-start mt-8">

           <Button asChild variant="default" size="xl" className="shadow-2xl">
            <Link href="/projects">Projects</Link>
          </Button>
            <Button asChild variant="secondary" size="xl" className="shadow-2xl">
              <Link href="/writeups">Security Writeups</Link>
            </Button>
          </motion.div>
        </div>
        <div className="relative w-6/12 justify-end hidden md:flex">
          <AsciiArt src="/ascii/ascii-art-200x90.txt" />
        </div>


    </section>
  );
}