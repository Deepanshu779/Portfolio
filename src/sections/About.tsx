import { motion } from "framer-motion";
import { ArrowUpRight, User, Brain, Sparkles, Terminal } from "lucide-react";

const pillars = [
    {
        title: "AI & Machine Learning",
        label: "CORE DOMAIN",
        icon: Brain,
        description:
            "Developing predictive and diagnostic models using Python, scikit-learn, and data science pipelines.",
    },
    {
        title: "Generative AI",
        label: "APPLIED AI",
        icon: Sparkles,
        description:
            "Building LLM integrations, prompt architectures, agent workflows, and NLP-powered services.",
    },
    {
        title: "Full-Stack Engineering",
        label: "SYSTEMS & WEB",
        icon: Terminal,
        description:
            "Bridging machine learning systems with performant, responsive web applications using React, Next.js, and FastAPI.",
    },
];

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#070707] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[15%] top-[35%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
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
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                        <User size={13} className="text-violet-200" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                            ABOUT
                        </span>
                    </div>

                    <span className="text-xs font-mono tracking-widest text-white/40">
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
                        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/40">
                            BACKGROUND & APPROACH
                        </p>

                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
                            Building practical{" "}
                            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                                AI systems
                            </span>{" "}
                            and reliable software.
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
                            I am an Artificial Intelligence undergraduate focused on bridging applied machine learning with real-world applications. From training predictive models and integrating LLM workflows to engineering interactive web frontends, I care about building tools that solve genuine problems cleanly and reliably.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-200 hover:text-white transition-colors"
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
                        className="rounded-3xl border border-white/10 bg-[#0c0d14]/70 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                    >
                        <h3 className="text-xl font-bold tracking-tight text-white">
                            Focused on Engineering, Not Just Demos
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/55">
                            Whether architecting Kritam as a desktop voice assistant with local inference, building MediAI for symptom screening, or analyzing maritime traffic data for SIH, I prioritize maintainable code, testability, and clear user experiences.
                        </p>

                        <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="flex flex-col gap-3 text-xs">
                                <div className="flex justify-between text-white/50">
                                    <span>Academic Focus</span>
                                    <span className="font-semibold text-white/90">B.Tech Artificial Intelligence</span>
                                </div>
                                <div className="flex justify-between text-white/50">
                                    <span>Location</span>
                                    <span className="font-semibold text-white/90">Delhi NCR, India</span>
                                </div>
                                <div className="flex justify-between text-white/50">
                                    <span>Availability</span>
                                    <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        Open for Internships
                                    </span>
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
                                className="group rounded-2xl border border-white/10 bg-[#0c0d14]/60 p-6 backdrop-blur-md transition-all hover:border-violet-300/30 hover:bg-[#0c0d14]/90"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
                                    <Icon size={20} />
                                </div>
                                <p className="mt-4 text-[10px] font-bold tracking-widest text-violet-200">
                                    {pillar.label}
                                </p>
                                <h4 className="mt-1 text-lg font-bold text-white">
                                    {pillar.title}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-white/55">
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
