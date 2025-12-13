"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Sparkles, Heart } from "lucide-react";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

/* 🎬 Variants da timeline */
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, filter: "blur(12px)" },
    show: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
    },
};

function StageLights() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: "-30%", opacity: 0 }}
                    animate={{ x: "130%", opacity: [0, 0.4, 0] }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                    }}
                    className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl"
                />
            ))}
        </div>
    );
}

function Confetti() {
    const [screen, setScreen] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    if (!screen.width) return null; // evita render antes do client

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{
                        y: -50,
                        x: Math.random() * screen.width,
                        rotate: 0,
                        opacity: 1,
                    }}
                    animate={{
                        y: screen.height + 100,
                        rotate: 360,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    className="absolute w-3 h-3 rounded-sm bg-gradient-to-br from-pink-400 via-yellow-400 to-purple-500"
                />
            ))}
        </div>
    );
}

export default function ParabensCoralJSM() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-6">
            <StageLights />
            <Confetti />

            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center text-white"
            >
                {/* 🎤 Ato 1 — Título */}
                <motion.h1
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3"
                >
                    <Sparkles className="w-10 h-10 text-yellow-400" />
                    Parabéns, Coral JSM!
                    <Sparkles className="w-10 h-10 text-yellow-400" />
                </motion.h1>

                {/* 🎶 Ato 2 — Subtítulo */}
                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-lg md:text-xl text-gray-200"
                >
                    Uma noite inesquecível na{" "}
                    <strong>9ª noite da Festa da Padroeira Santa Luzia</strong> 🎶✨
                </motion.p>

                {/* 🎭 Ato 3 — Suspense */}
                <motion.p
                    variants={itemVariants}
                    className="mt-8 text-xl italic text-gray-300"
                >
                    Prepare o coração…
                </motion.p>

                {/* 🌟 Ato 4 — Grande revelação */}
                <motion.div
                    variants={imageVariants}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mt-6 flex justify-center"
                >
                    <div className="rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
                        <Image
                            src="/images/coraljsm.jpg"
                            alt="Coral JSM cantando na festa da padroeira Santa Luzia"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* ❤️ Ato 5 — Mensagem */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 space-y-4 text-gray-100"
                >
                    <p>
                        Vocês não cantaram… <strong>evangelizaram com harmonia!</strong> 🎤😄
                    </p>
                    <p>
                        Cada voz, cada acorde e cada sorriso tocaram o coração de quem estava presente.
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Music className="w-6 h-6 text-pink-400" />
                        Que Santa Luzia continue abençoando esse dom lindo!
                        <Heart className="w-6 h-6 text-red-400" />
                    </p>
                </motion.div>

                {/* 👏 Ato Final */}
                <motion.footer
                    variants={itemVariants}
                    className="mt-10 text-sm text-gray-300"
                >
                    Com carinho (e muitos aplausos 👏👏👏)
                </motion.footer>
            </motion.section>
        </main>
    );
}
