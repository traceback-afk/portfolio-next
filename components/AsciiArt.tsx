import { useEffect, useState } from "react";
import {motion} from "motion/react";

export default function AsciiArt({ src }: { src: string }) {
  const [art, setArt] = useState<string[]>([]);

  useEffect(() => {
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => setArt(text.split("\n"))) // split into lines
      .catch(console.error);
  }, [src]);

  return (
    <div className="font-mono leading-none whitespace-pre text-zinc-300 text-[5px]">
      {art.length === 0
        ? "Loading..."
        : art.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.01 }}
            >
              {line || " "} {/* preserve empty lines */}
            </motion.div>
          ))}
    </div>
  );
}