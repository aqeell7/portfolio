"use client";

import { Github, Mail } from "lucide-react";
import { portfolioData } from "@/config/data";

export function Footer() {
    const { personal } = portfolioData;

    return (
        <footer className="border-t border-border/40 py-8 px-6 w-full mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="font-medium text-foreground text-base tracking-tight">
                        {personal.name}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                        Built with Next.js, Tailwind CSS & Shadcn UI
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                    <span className="text-border hidden sm:inline-block">/</span>
                    <a
                        href={`mailto:${personal.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
