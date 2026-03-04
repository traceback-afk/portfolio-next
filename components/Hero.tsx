"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center h-screen w-full"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2
          w-200 h-200
          bg-[radial-gradient(circle,rgba(100,100,100,0.1),transparent_60%)]
          rounded-full pointer-events-none
          z-0"
      />
      <div className="flex flex-col items-start">
        <motion.p initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true, amount: 0.5 }} // triggers once when 50% in view
          transition={{ duration: 0.8, ease: "easeOut"}}
          className="text-zinc-400 text-xl mb-4 font-stretch-expanded">
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
          className="font-bold text-5xl text-zinc-100 text-shadow-lg
          font-geist-mono"
        >
          Khashayar Khosrosourmi.
        </motion.h1>
         <motion.h1
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay:0.8}}
          className="text-3xl leading-tight mb-6 mt-2
        tracking-tight text-zinc-400 font-semibold"
        >
          Web Developer • Cybersecurity Enthusiast
        </motion.h1>
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay:1.4}}
          className="flex gap-4 flex-wrap">
          <Link href="/#projects" className="py-2 px-8 bg-rose-700
          shadow-xl text-zinc-100 text-xl font-semibold
          hover:bg-rose-800 hover:text-zinc-50 transition-all
          duration-200 btn-noise">
            Projects
          </Link>
          <Link href="/#projects" className="py-2 px-8 border-2 border-rose-600
          shadow-xl text-rose-600 text-xl font-semibold">
            Security Writeups
          </Link>
        </motion.div>
      </div>
    </section>
  );
}