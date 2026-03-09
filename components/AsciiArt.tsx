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
    className="font-mono leading-none whitespace-pre text-zinc-300 text-[5px]">
      {art || "Loading..."}
    </motion.div>
  );
}