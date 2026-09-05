import { motion } from "framer-motion";
import { ArrowUpRight, User, Brain, Sparkles, Terminal } from "lucide-react";

const pillars = [
    {
        title: "AI & Machine Learning",
        label: "CORE FOCUS",
        icon: Brain,
        description:
            "Developing diagnostic and predictive ML models using scikit-learn, Python, and data science frameworks.",
    },
    {
        title: "Generative AI",
        label: "SPECIALIZATION",
        icon: Sparkles,
        description:
            "Implementing LLM API integrations, prompt engineering, agentic workflows, and NLP-driven applications.",
    },
    {
        title: "Full-Stack Software",
        label: "BUILDER MINDSET",
        icon: Terminal,
        description:
            "Bridging machine learning systems with performant web user interfaces using React, Next.js, and Flask.",
    },
];

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#060911] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-between border-b border-white/10 pb-6"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
                        <User size={13} className="text-cyan-300" />
                        <span className="text-[11px] font-bold tracking-[0.24em] text-cyan-300">
                            01 / ABOUT ME
                        </span>
                    </div>

                    <span className="text-xs font-mono tracking-widest text-slate-500">
                        DEEPANSHU KUMAR PANDIT
                    </span>
                </motion.div>

                {/* Main Content Grid */}
                <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
                    {/* Main introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-slate-400">
                            PHILOSOPHY & PASSION
                        </p>

                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
                            Building ideas into{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                                intelligent
                            </span>{" "}
                            software experiences.
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-slate-300/80 md:text-lg">
                            I am a B.Tech Artificial Intelligence student passionate about turning complex algorithms into reliable, user-friendly digital tools. My work blends machine learning, generative AI, and modern web technologies to solve practical problems in healthcare, e-commerce, and everyday productivity.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 hover:text-cyan-200 transition-colors"
                            >
                                <span>VIEW SELECTED WORK</span>
                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Secondary Detail Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="rounded-3xl border border-white/10 bg-[#071120]/80 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                    >
                        <h3 className="text-xl font-bold tracking-tight text-white">
                            Practical AI with Real Utility
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                            Whether creating diagnostic assistants like MediAI, vital-tracking platforms like MedCore 302, or price prediction tools like Pricevana, I focus on clean code, testability, and human-centered design.
                        </p>

                        <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="flex flex-col gap-3 text-xs">
                                <div className="flex justify-between text-slate-400">
                                    <span>Academic Focus</span>
                                    <span className="font-semibold text-slate-200">Artificial Intelligence</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Location</span>
                                    <span className="font-semibold text-slate-200">Delhi NCR, India</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Availability</span>
                                    <span className="font-semibold text-emerald-400">Open for Internships</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Pillars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 grid gap-6 sm:grid-cols-3"
                >
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="group rounded-2xl border border-white/10 bg-[#071120]/60 p-6 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-[#071120]/90"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                                    <Icon size={20} />
                                </div>
                                <p className="mt-4 text-[10px] font-bold tracking-widest text-cyan-300">
                                    {pillar.label}
                                </p>
                                <h4 className="mt-1 text-lg font-bold text-white">
                                    {pillar.title}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default About;