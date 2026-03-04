"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const smallScreenLinks = [
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "writeups", label: "Security Writeups", href: "/#writeups" },
];

export default function SmallNavbar() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3) {
          current = section.id;
        }
      });

      // Only show after about section
      setVisible(current === "about" || current === "projects" || current === "writeups");

      // Set active link
      if (current === "about" || current === "projects" || current === "writeups") {
        setActive(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full flex left-1/2 transform -translate-x-1/2 z-50
                  transition-all duration-500 px-10 py-4 justify-between
                  ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                  sm:flex md:hidden items-center gap-6 bg-zinc-900/70
                  backdrop-blur-md px-6 py-2 shadow-lg`}
    >

      {smallScreenLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <span
            className={`transition-all duration-300 cursor-pointer
                        ${active === link.id
                          ? "text-zinc-100 text-xl"
                          : "text-zinc-400 text-base"}`}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
}