import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles, FolderGit2, Award, Briefcase } from "lucide-react";



const rotatingRoles = [
    "AI / ML DEVELOPER",
    "GENERATIVE AI SPECIALIST",
    "FULL-STACK SOFTWARE BUILDER",
];

const highlights = [
    { label: "Live Projects", value: "4+", icon: FolderGit2 },
    { label: "Internships", value: "4", icon: Briefcase },
    { label: "Certifications", value: "7+", icon: Award },
];

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#030711] text-white pt-20"
        >
            {/* Ambient Background & Orbital Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(0,140,255,0.18),transparent_35%),radial-gradient(circle_at_30%_85%,rgba(0,217,255,0.08),transparent_40%),linear-gradient(120deg,#030711_0%,#050b16_55%,#020712_100%)]" />

                {/* Animated Orbits */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                    className="absolute right-[-5%] top-[12%] h-[720px] w-[940px] rounded-[50%] border border-cyan-400/10"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                    className="absolute right-[5%] top-[20%] h-[560px] w-[800px] rounded-[50%] border border-blue-400/10"
                />

                {/* Sparkling constellation nodes */}
                <span className="absolute right-[25%] top-[22%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,1)]" />
                <span className="absolute right-[12%] top-[38%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
                <span className="absolute right-[35%] top-[50%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,1)]" />
                <span className="absolute left-[38%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/60" />
                <span className="absolute left-[20%] top-[65%] h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
            </div>

            {/* Main Content Layout */}
            <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-12 md:px-10 lg:px-12">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Left Column: Introductions & CTAs */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-30 pt-6"
                    >
                        {/* Live Status Pill */}
                        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span>Available for Internships & Full-time Roles</span>
                        </div>

                        {/* Hello greeting */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                                Portfolio
                            </span>
                            <span className="h-px w-16 bg-cyan-400/40" />
                        </div>

                        {/* Name Header */}
                        <h1 className="text-[clamp(3.2rem,6.2vw,6.4rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white">
                            DEEPANSHU
                            <br />
                            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                                KUMAR
                            </span>
                            <br />
                            PANDIT
                        </h1>

                        {/* Rotating Role Pill */}
                        <div className="mt-7 flex items-center gap-3">
                            <Sparkles size={16} className="text-cyan-300" />
                            <div className="h-7 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -14 }}
                                        transition={{ duration: 0.35 }}
                                        className="text-xs font-bold tracking-[0.25em] text-cyan-300 sm:text-sm"
                                    >
                                        {rotatingRoles[roleIndex]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Bio Paragraph */}
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/80 md:text-lg">
                            B.Tech student in Artificial Intelligence crafting practical, intelligent software — from ML diagnostics and GenAI tools to responsive web applications.
                        </p>

                        {/* Call to Actions */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#work"
                                className="group flex h-13 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-7 font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                            >
                                <span>Explore Projects</span>
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-13 items-center gap-2.5 rounded-full border border-cyan-400/35 bg-white/[0.04] px-6 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white"
                            >
                                <Download size={16} className="text-cyan-300 transition-transform group-hover:translate-y-0.5" />
                                <span>Download Resume</span>
                            </a>
                        </div>

                        {/* Metrics Quick Strip */}
                        <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            {highlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex flex-col">
                                        <div className="flex items-center gap-2 text-cyan-300">
                                            <Icon size={14} />
                                            <span className="text-2xl font-bold tracking-tight text-white">
                                                {item.value}
                                            </span>
                                        </div>
                                        <span className="mt-1 text-[11px] font-medium tracking-wider text-slate-400">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Portrait with Ambient Aura */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.15 }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        {/* Glow halo behind photo */}
                        <div className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-transparent blur-[80px]" />

                        {/* Orbital ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] rounded-full border border-cyan-400/20"
                        >
                            <span className="absolute top-[8%] right-[10%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                        </motion.div>

                        {/* Photo frame container */}
                        <div className="relative z-10 flex h-[360px] w-[300px] sm:h-[460px] sm:w-[380px] items-end justify-center overflow-visible">
                            <motion.img
                                src="/profile.png"
                                alt="Deepanshu Kumar Pandit"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 max-h-full w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                            />

                            {/* Floating Credential Pill */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-3 -left-4 sm:bottom-4 sm:-left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-cyan-400/30 bg-[#071120]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                                    <Sparkles size={14} />
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold tracking-wider text-cyan-300">B.TECH IN AI</p>
                                    <p className="text-[11px] font-semibold text-white/90">2024 — 2028</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Scroll Prompt */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mx-auto mb-6 flex w-fit flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.24em] text-slate-400/70 transition-colors hover:text-cyan-300"
            >
                <span>SCROLL TO EXPLORE</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <ArrowDown size={14} />
                </motion.div>
            </motion.a>
        </section>
    );
}

export default Hero;
