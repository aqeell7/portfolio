"use client";

import { motion, Variants } from "framer-motion";
import { Github, ArrowDown, FileText } from "lucide-react";
import { SiReact, SiTypescript, SiRedis, SiNextdotjs } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/config/data";
import { BackgroundLines } from "./BackgroundLines";

export function Hero() {
    const { personal } = portfolioData;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const scrollToProjects = () => {
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="flex flex-col justify-center relative px-6 mt-12 mb-8 text-center w-full">
            <BackgroundLines />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-6 relative z-10"
            >
                <motion.div variants={itemVariants}>
                    <p className="text-primary font-medium tracking-wide text-sm uppercase">
                        {personal.role}
                    </p>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 font-(family-name:--font-space-grotesk)"
                >
                    Mohammed Aqeel Ahmed
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-foreground max-w-2xl mx-auto"
                >
                    I enjoy building things — first it was mechanical systems, now it’s software.
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4"
                >
                    Full-Stack Engineer | Architecting secure APIs and real-time monitors.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-2">
                    <span className="flex items-center gap-2 bg-secondary/30 text-secondary-foreground border border-border/50 font-medium text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        <SiReact className="w-3.5 h-3.5" /> MERN
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/30 text-secondary-foreground border border-border/50 font-medium text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        <SiTypescript className="w-3.5 h-3.5" /> TypeScript
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/30 text-secondary-foreground border border-border/50 font-medium text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        <SiRedis className="w-3.5 h-3.5" /> Redis
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/30 text-secondary-foreground border border-border/50 font-medium text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        <SiNextdotjs className="w-3.5 h-3.5" /> Next.js
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-6">
                    <Button
                        size="lg"
                        onClick={scrollToProjects}
                        className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
                    >
                        View Projects
                        <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="rounded-full px-8 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm bg-background/50"
                    >
                        <a href={personal.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="rounded-full px-8 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm bg-background/50"
                    >
                        <a href="/Aqeel_Ahmed_FullStack_Dev.pdf" target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Resume
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
