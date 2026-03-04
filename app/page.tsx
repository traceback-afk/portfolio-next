"use client"

import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import SmallNavbar from "@/components/SmallNavbar";
import Projects from "@/components/Projects";
import Writeups from "@/components/Writeups";

export default function Home() {
  return (
    <div className="flex">
      <div className="hidden md:flex md:w-3/12
      fixed left-0 top-0 h-screen">
        <Navbar />
      </div>
      <div className="w-full md:w-9/12 md:ml-auto md:px-31 px-10" id="scroll-container">
        <SmallNavbar/>
        <Hero/>
        <About />
        <Projects/>
        <Writeups/>
      </div>
    </div>
  );
}
