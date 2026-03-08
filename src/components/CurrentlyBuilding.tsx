"use client";

import { motion } from "framer-motion";

export function CurrentlyBuilding() {
    return (
        <section className="px-6 mb-12 w-full flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full bg-card/50 border border-border/50 rounded-2xl p-6 shadow-sm backdrop-blur-sm"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Currently</h3>
                </div>

                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                        Exploring agentic AI workflows by building DevPulse, an automated release-note generator.
                    </p>
                    <p>
                        Preparing open-source contributions and project proposals for Google Summer of Code.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
