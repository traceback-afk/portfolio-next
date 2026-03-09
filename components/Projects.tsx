import { motion } from "motion/react"

export default function Projects(){
    return (
        <section className="flex flex-col
            justify-center relative w-full
            overflow-hidden py-20" id="projects">
            <motion.h1 initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay:0.4}}
                className="text-3xl font-semibold text-zinc-300">
                    Projects
            </motion.h1>

        </section>
    )
}