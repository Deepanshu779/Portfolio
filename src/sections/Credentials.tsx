import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, CheckCircle2, Trophy, ExternalLink } from "lucide-react";

type CredentialCategory = "ALL" | "CERTIFICATIONS" | "ACHIEVEMENTS";

interface Certification {
    number: string;
    title: string;
    issuer: string;
    description: string;
    href: string;
}

interface Achievement {
    number: string;
    title: string;
    issuer: string;
    description: string;
}

const certifications: Certification[] = [
    {
        number: "01",
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        description: "Foundational mastery of artificial intelligence principles, neural networks, and modern applications.",
        href: "https://www.credly.com/badges/0088bde1-342a-4802-9b5b-42c000575cb2/public_url",
    },
    {
        number: "02",
        title: "Programming in Java",
        issuer: "NPTEL / IIT",
        description: "Formal academic coursework and examination certification covering object-oriented design and Java architecture.",
        href: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS36S76240230404466430",
    },
    {
        number: "03",
        title: "Generate Reports with AI Research Agents",
        issuer: "Microsoft Applied Skills",
        description: "Applied skills credential verifying practical implementation of autonomous AI research and synthesis agents.",
        href: "https://learn.microsoft.com/en-in/users/deepanshukumarpandit-6212/credentials/1e0ef1726dc215de",
    },
    {
        number: "04",
        title: "Exploratory Data Analysis",
        issuer: "NASSCOM",
        description: "Industry certification covering exploratory data analysis, statistical modeling, and data manipulation.",
        href: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-476b379c-71da-11f1-9954-005056b48b54",
    },
    {
        number: "05",
        title: "Generative AI Virtual Internship",
        issuer: "IBM SkillsBuild / FSP",
        description: "Hands-on project and concept verification covering LLMs, tokenization, encoders-decoders, and prompt workflows.",
        href: "https://courses.ibmmooc.skillsnetwork.site/certificates/cf8208aadf994ec8bdf53959f7898d05",
    },
    {
        number: "06",
        title: "AI for Beginners at Work",
        issuer: "Udemy",
        description: "Applied workflows with frontier LLMs including ChatGPT, Claude, Gemini, and Copilot for technical workplace efficiency.",
        href: "https://www.udemy.com/certificate/UC-ac111f33-d578-4117-9410-6342d09df70b/",
    },
    {
        number: "07",
        title: "Python for Beginners",
        issuer: "MindLuster",
        description: "Core language proficiency certification covering syntax, modular scripting, and standard libraries.",
        href: "https://www.mindluster.com/storage/cer/3b2e23cb.jpg?v=2025-04-16",
    },
];

const achievements: Achievement[] = [
    {
        number: "01",
        title: "Best Campus Ambassador Recognition",
        issuer: "eDC, IIT Delhi",
        description:
            "Recognized among the top Campus Ambassadors by the Entrepreneurship Development Cell (eDC), IIT Delhi, for high outreach and engagement.",
    },
    {
        number: "02",
        title: "Top 15 Finalist — TechClasher Hackathon",
        issuer: "TechClasher",
        description:
            "Cleared competitive screening rounds and ranked among the Top 15 participant teams solving technical challenges.",
    },
    {
        number: "03",
        title: "20+ Cloud & AI/ML Pathways",
        issuer: "GDG on Campus (Google Developer Groups)",
        description:
            "Completed 20+ intensive hands-on cloud architecture and AI/ML learning tracks organized by GDG at GNIOT.",
    },
];

export default function Credentials() {
    const [activeCategory, setActiveCategory] = useState<CredentialCategory>("ALL");

    return (
        <section
            id="credentials"
            className="relative overflow-hidden bg-[#030711] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Background Aura */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[20%] top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[160px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
                            <Award size={13} className="text-cyan-300" />
                            <span className="text-[11px] font-bold tracking-[0.24em] text-cyan-300">
                                VERIFIED CREDENTIALS
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Learning &{" "}
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Recognition
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                            Industry credentials, competitive recognitions, and continuous learning that ground my software and AI skillset.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {(["ALL", "CERTIFICATIONS", "ACHIEVEMENTS"] as CredentialCategory[]).map((cat) => {
                            const isSelected = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                                        isSelected
                                            ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                                            : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Certifications Grid */}
                {(activeCategory === "ALL" || activeCategory === "CERTIFICATIONS") && (
                    <div className="mt-12">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300">
                                <CheckCircle2 size={15} />
                                <span>INDUSTRY CERTIFICATIONS ({certifications.length})</span>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {certifications.map((cert, index) => (
                                <motion.a
                                    key={cert.number}
                                    href={cert.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071120]/80 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(0,180,255,0.15)]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cyan-300">
                                                {cert.issuer}
                                            </span>
                                            <ArrowUpRight
                                                size={16}
                                                className="text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                                            />
                                        </div>

                                        <h3 className="mt-4 text-lg font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                                            {cert.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-relaxed text-slate-400">
                                            {cert.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center gap-1.5 border-t border-white/10 pt-4 text-[11px] font-semibold text-cyan-300">
                                        <span>Verify Credential</span>
                                        <ExternalLink size={12} />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Achievements Grid */}
                {(activeCategory === "ALL" || activeCategory === "ACHIEVEMENTS") && (
                    <div className="mt-16">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300">
                                <Trophy size={15} />
                                <span>ACHIEVEMENTS & HONORS ({achievements.length})</span>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="rounded-2xl border border-white/10 bg-[#071120]/80 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all hover:border-cyan-400/40"
                                >
                                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-300">
                                        {item.issuer}
                                    </span>

                                    <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
