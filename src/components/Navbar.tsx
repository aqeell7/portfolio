"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40 w-full transition-colors duration-300 ease-in-out">
            <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg text-foreground hover:text-primary transition-colors">
                    MA.
                </Link>

                <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="#projects" className="hover:text-foreground transition-colors hidden sm:block">
                        Projects
                    </Link>
                    <a href="https://github.com/aqeell7" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hidden sm:block">
                        GitHub
                    </a>
                    <a href="mailto:m.aqeelahmed@outlook.com" className="hover:text-foreground transition-colors hidden sm:block">
                        Email
                    </a>
                    <div className="pl-2 border-l border-border/50">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
