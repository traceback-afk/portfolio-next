"use client"

import { useRef, useState, useEffect } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeSidebar from "@/components/HomeSidebar";
import SmallNavbar from "@/components/SmallNavbar";
import Projects from "@/components/Projects";
import Writeups from "@/components/Writeups";
import Skills from "@/components/Skills";
import SpotlightCards from "@/components/kokonutui/spotlight-cards";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(entry.isIntersecting);
      },
      { threshold: 0.1 } // trigger when 10% of the section is visible
    );

    observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div>
        <Hero/>
        <About />
        <Skills/>
        <Projects/>
        <Writeups/>
    </div>
  );
}
