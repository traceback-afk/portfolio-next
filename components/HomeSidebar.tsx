"use client";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "writeups", label: "Security Writeups" },
];

export default function HomeSidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.5) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="navbar"
      className="relative flex w-full h-full justify-center"
    >
      <div className="absolute right-0 top-0 h-full w-px
                      bg-linear-to-b from-zinc-900 via-zinc-500/30
                      to-zinc-900" />
      <div className="flex flex-col justify-center items-end pe-10 gap-2 w-full">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() =>
              document
                .getElementById(link.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`transition-all duration-300 text-right ${
              active === link.id
                ? "text-2xl text-zinc-100"
                : "text-xl text-zinc-500"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>


    </section>
  );
}