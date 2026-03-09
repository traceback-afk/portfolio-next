import { useEffect, useState } from "react";

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
   <div className="font-mono leading-none whitespace-pre text-zinc-300 text-[5px]">
    {art || "Loading..."}
    </div>
  );
}