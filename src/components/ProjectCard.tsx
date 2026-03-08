"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiRedis, SiDocker, SiJest, SiGithubactions, SiNextdotjs,
    SiSocketdotio, SiJsonwebtokens, SiEthereum
} from "react-icons/si";

const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
        case "react":
        case "mern stack":
            return <SiReact className="w-3.5 h-3.5" />;
        case "typescript":
            return <SiTypescript className="w-3.5 h-3.5" />;
        case "tailwind css":
            return <SiTailwindcss className="w-3.5 h-3.5" />;
        case "socket.io":
            return <SiSocketdotio className="w-3.5 h-3.5" />;
        case "node-cron":
        case "node.js":
            return <SiNodedotjs className="w-3.5 h-3.5" />;
        case "jwt":
            return <SiJsonwebtokens className="w-3.5 h-3.5" />;
        case "next.js":
            return <SiNextdotjs className="w-3.5 h-3.5" />;
        case "ethers.js":
            return <SiEthereum className="w-3.5 h-3.5" />;
        case "express":
            return <SiExpress className="w-3.5 h-3.5" />;
        case "mongodb":
            return <SiMongodb className="w-3.5 h-3.5" />;
        case "redis":
            return <SiRedis className="w-3.5 h-3.5" />;
        case "docker":
            return <SiDocker className="w-3.5 h-3.5" />;
        case "jest":
            return <SiJest className="w-3.5 h-3.5" />;
        case "github actions":
            return <SiGithubactions className="w-3.5 h-3.5" />;
        default:
            return null;
    }
};

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        techStack: string[];
        image: string;
        githubLink: string;
        liveLink: string;
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative flex flex-col h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all overflow-hidden"
        >
            <div>
                <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-muted border-b border-border/50">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                            <span className="text-sm font-medium">No Image</span>
                        </div>
                    )}
                </div>

                <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>
            </div>

            <div className="mt-auto flex flex-col pt-2">
                <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="flex items-center justify-center gap-1.5 bg-secondary/30 text-secondary-foreground border border-border/50 font-medium text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm"
                        >
                            {getTechIcon(tech)}
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 p-6 pt-4 border-t border-border/50">
                    {project.liveLink ? (
                        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-9 px-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 w-3.5 h-3.5" />
                                Visit Site
                            </a>
                        </Button>
                    ) : (
                        <Badge variant="outline" className="text-muted-foreground pointer-events-none rounded-full h-9  inline-flex items-center justify-center font-normal px-4 border-dashed border-muted-foreground/50">
                            Code Only
                        </Badge>
                    )}

                    {project.githubLink && (
                        <Button
                            asChild
                            size="icon"
                            variant="ghost"
                            className="rounded-full w-9 h-9 hover:bg-accent hover:text-accent-foreground ml-auto"
                        >
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                <Github className="w-4 h-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
