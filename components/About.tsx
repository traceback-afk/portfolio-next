"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="flex row justify-between relative w-full
    overflow-hidden py-20 flex-wrap"
    id="about">
      <div className="w-3/12 h-full flex flex-col items-start">
        <motion.h1 initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
            className="text-3xl font-semibold text-zinc-300">
              About Me
        </motion.h1>
      </div>
      <div className="w-9/12">
        <motion.h1 initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
            className="text-zinc-300 text-xl">
              I'm a web developer who builds secure
          backends and clean, intuitive user interfaces.
          I focus on creating systems that are not only
          functional and scalable, but resilient by design.
        </motion.h1>
        <motion.h1 initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
            className="text-zinc-300 text-xl mt-10">
              Security is part of how I think. After building a feature,
          I approach it from an attacker's perspective and look for
          weaknesses, edge cases, and misconfigurations. I believe
          the best way to secure a system is to understand how it
          can be broken.
        </motion.h1>
        <motion.h1 initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
            className="text-zinc-300 text-xl mt-10">
              I actively participate in CTF competitions to
          sharpen my offensive skills and deepen my understanding
          of real-world vulnerabilities. I publish security writeups
          where I document exploitation techniques, attack paths,
          and the lessons learned from each challenge.
        </motion.h1>
        <motion.h1 initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
            className="text-zinc-300 text-xl mt-10">
            I don't just build software. I challenge it, test it,
          and refine it until it's stronger than before.
        </motion.h1>
      </div>


    </section>
  );
}