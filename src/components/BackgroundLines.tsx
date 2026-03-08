"use client";

import { motion } from "framer-motion";

export function BackgroundLines() {
    // Generate slightly wavy lines simulating a subtle flowing tech background
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full h-full flex justify-center items-center mask-image-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)] opacity-30 dark:opacity-10">
            <div className="w-[150%] h-[150%] flex flex-col justify-around rotate-12 -translate-y-24">
                {[...Array(15)].map((_, i) => (
                    <motion.svg
                        key={i}
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 50"
                        preserveAspectRatio="none"
                        className="stroke-foreground absolute top-0 left-0"
                        style={{ top: `${i * 10}%` }}
                    >
                        <motion.path
                            d={`M0 25 Q 250 ${25 + (Math.sin(i) * 10)} 500 25 T 1000 25`}
                            fill="none"
                            strokeWidth="0.5"
                            strokeDasharray="400 100"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -500 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 15 + i % 5,
                            }}
                        />
                    </motion.svg>
                ))}
            </div>
        </div>
    );
}
