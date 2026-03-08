"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";
import { GraduationCap, HeartHandshake } from "lucide-react";

export function AboutSection() {
    const { education, extracurricular } = portfolioData;

    return (
        <section className="py-8 px-6 w-full border-t border-border/40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 text-center"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Background
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-primary/10 rounded-full text-primary">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Education</h3>
                    </div>
                    <div className="mt-auto">
                        <h4 className="font-semibold text-foreground text-lg mb-1">{education.degree}</h4>
                        <p className="text-muted-foreground mb-1">{education.institution}</p>
                        <p className="text-sm font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded-full mt-2">
                            {education.year}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-primary/10 rounded-full text-primary">
                            <HeartHandshake className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Community</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-auto text-lg">
                        {extracurricular}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
