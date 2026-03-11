"use client";

import { motion } from "motion/react";

export default function About() {
return ( <section
   id="about"
   className="relative w-full py-32 flex flex-wrap overflow-hidden"
 >
{/* LEFT TITLE */} <div className="md:w-3/12 w-full mb-12 md:mb-0 flex flex-col items-start">
<motion.h2
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true, amount: 1 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
className="text-3xl font-semibold text-zinc-200"
>
About Me
</motion.h2> </div>

```
  {/* RIGHT CONTENT */}
  <div className="md:w-9/12 w-full space-y-10">

    {/* PARAGRAPH 1 */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="text-zinc-300 text-xl leading-relaxed max-w-3xl"
    >
      I'm a web developer focused on building secure backends and
      clean, intuitive user interfaces. I design systems that are
      scalable, resilient, and built with security in mind.
    </motion.p>

    {/* PARAGRAPH 2 */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="text-zinc-300 text-xl leading-relaxed max-w-3xl"
    >
      I regularly practice offensive security through CTF
      competitions and vulnerability research. By thinking like an
      attacker, I identify weaknesses, edge cases, and
      misconfigurations before they become real problems.
    </motion.p>

    {/* QUOTE */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="border-l border-zinc-700 pl-6 italic text-zinc-400 max-w-2xl"
    >
      I don't just build software — I challenge it, test it, and
      refine it until it's stronger than before.
    </motion.div>

    {/* EXPERTISE CARDS */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      className="grid md:grid-cols-3 gap-6 pt-8"
    >
      <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
        <h3 className="text-zinc-200 font-semibold mb-2">
          Security Mindset
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          I analyze systems from an attacker’s perspective to find
          vulnerabilities before they become real threats.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
        <h3 className="text-zinc-200 font-semibold mb-2">
          Backend Systems
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Designing scalable APIs and backend architectures that
          remain stable and secure under real-world conditions.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
        <h3 className="text-zinc-200 font-semibold mb-2">
          CTF Competitor
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Practicing real-world exploitation techniques through
          capture-the-flag competitions and security research.
        </p>
      </div>
    </motion.div>
  </div>
</section>


);
}
