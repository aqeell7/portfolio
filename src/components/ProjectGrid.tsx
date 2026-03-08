"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { portfolioData } from "@/config/data";

export function ProjectGrid() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-8 px-6 w-full scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 text-center"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                    A selection of robust, scalable applications and experimental tools I&apos;ve built to solve complex problems.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
