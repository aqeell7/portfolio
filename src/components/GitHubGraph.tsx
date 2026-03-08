"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";
import { portfolioData } from "@/config/data";
import { motion } from "framer-motion";

export function GitHubGraph() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = mounted ? resolvedTheme || theme : "dark";

    // Cyan shades for Dark Mode
    const darkTheme = {
        light: ["#161b22", "#0f5a65", "#168696", "#1cb2c8", "#20b8cd"],
        dark: ["#161b22", "#0f5a65", "#168696", "#1cb2c8", "#20b8cd"],
    };

    // Orange shades for Light Mode
    const lightTheme = {
        light: ["#ebedf0", "#fbc3ab", "#f59a72", "#df7247", "#ae5630"],
        dark: ["#ebedf0", "#fbc3ab", "#f59a72", "#df7247", "#ae5630"],
    };

    const extractUsername = (url: string) => {
        return url.split("/").pop() || "aqeell7";
    };

    return (
        <section className="py-8 px-6 w-full border-t border-border/40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground">
                    Proof of Work
                </h2>
                <div className="w-full flex justify-center">
                    <div className="w-fit mx-auto p-6 md:p-8 rounded-xl border border-border bg-card shadow-sm flex flex-col items-center justify-center overflow-hidden">
                        {mounted ? (
                            <GitHubCalendar
                                username={extractUsername(portfolioData.personal.github)}
                                colorScheme={currentTheme as "light" | "dark"}
                                theme={currentTheme === "dark" ? darkTheme : lightTheme}
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                transformData={(data) => {
                                    const today = new Date();
                                    const past6Months = new Date(today.setMonth(today.getMonth() - 6));
                                    return data.filter(day => new Date(day.date) >= past6Months);
                                }}
                            />
                        ) : (
                            <div className="h-[150px] w-full animate-pulse bg-muted rounded-md" />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
