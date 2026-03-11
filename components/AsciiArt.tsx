import { useEffect, useState } from "react";
import { motion } from "motion/react"

export default function AsciiArt({ src }: { src: string }) {
  const [art, setArt] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setArt)
      .catch(console.error);
  }, [src]);

  return (
   <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
    className="font-mono leading-none whitespace-pre text-white text-[5px]">
      {art || "Loading..."}
      <div className="absolute inset-0 bg-zinc-950/90 rounded-full opacity-90 blur-3xl -z-1"></div>
    </motion.div>
  );
}