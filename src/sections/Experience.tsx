import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Users, Calendar, Sparkles } from "lucide-react";

type TabType = "WORK" | "EDUCATION" | "LEADERSHIP";

const experiences = [
    {
        period: "JUN 2026 — AUG 2026",
        role: "Generative AI Virtual Intern",
        company: "AKTU PBEL 3.0 × IBM / FutureSkills Prime",
        type: "VIRTUAL INTERNSHIP",
        description:
            "Completed the PBEL 3.0 virtual internship in Generative AI (24 June–27 August 2026), exploring Python, AI/ML, deep learning, NLP, and Generative AI concepts. Developed MediAI 2.0 as a related healthcare-focused project.",
        tags: ["Generative AI", "Python", "AI/ML", "NLP", "Healthcare AI"],
    },
    {
        period: "JUN 2026 — JUL 2026",
        role: "Tech Intern",
        company: "The Indus Group Co.",
        type: "INTERNSHIP",
        description:
            "Contributed to the company's live website and web tools using frontend technologies. Work included UI improvements, feature development, accessibility-minded interactions, and collaboration through GitHub and code review. Contributed to interactive Freight Cost Estimator and Franchise ROI Calculator tools.",
        tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "GitHub"],
    },
    {
        period: "JAN 2026 — JUL 2026",
        role: "Python Developer Intern",
        company: "The Skybrisk",
        type: "INTERNSHIP",
        description:
            "Completed a six-month Python Developer internship program. Built programming experience through development tasks, strengthening Python, problem-solving, and software development practices.",
        tags: ["Python", "Software Development", "Problem Solving"],
    },
    {
        period: "6-WEEK PROGRAM • COMPLETED MAR 2026",
        role: "C Programming Intern",
        company: "Axcentra",
        type: "INTERNSHIP",
        description:
            "Completed a six-week online C Programming internship program. Focused on strengthening programming fundamentals and structured problem-solving.",
        tags: ["C", "Programming Fundamentals", "Problem Solving"],
    },
    {
        period: "DEC 2025 — JAN 2026",
        role: "AI & ML Intern",
        company: "Edunet Foundation × AICTE × IBM SkillsBuild",
        type: "INTERNSHIP",
        description:
            "Completed a six-week Artificial Intelligence and Machine Learning internship. Developed a Streamlit-based mental health companion project while learning AI/ML concepts and application development.",
        tags: ["Artificial Intelligence", "Machine Learning", "Python", "Streamlit"],
    },
];

const education = [
    {
        period: "SEP 2024 — OCT 2028",
        qualification: "B.Tech in Artificial Intelligence",
        institution: "Greater Noida Institute of Technology",
        detail: "Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
        highlights: ["Core AI/ML Coursework", "Data Structures & Algorithms", "Full-Stack Development"],
    },
    {
        period: "2023 — 2024",
        qualification: "Higher Secondary (Class XII) — PCM",
        institution: "Government Sarvodaya Bal Vidyalaya, Timarpur, Delhi",
        detail: "Physics, Chemistry, Mathematics",
        highlights: ["Strong analytical & mathematical foundation"],
    },
    {
        period: "2022 — 2023",
        qualification: "Secondary School (Class X)",
        institution: "Government Boys Senior Secondary School, Nehru Vihar, Delhi",
        detail: "Central Board of Secondary Education",
        highlights: ["Academic excellence with focus on sciences"],
    },
];

const volunteering = [
    {
        period: "DEC 2025 — FEB 2026",
        role: "Campus Ambassador & Coordinator",
        organization: "Entrepreneurship Development Cell (eDC), IIT Delhi",
        description:
            "Promoted entrepreneurship initiatives and innovation bootcamps, organized collegiate outreach, and coordinated student participation in hackathons and startup conclaves.",
    },
    {
        period: "NOV 2025 — JAN 2026",
        role: "Campus Ambassador",
        organization: "Collegedunia",
        description:
            "Represented student community, facilitated educational feedback loops, and drove student engagement across university portals.",
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState<TabType>("WORK");

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#070707] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-[30%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
                <div className="absolute right-[5%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                            <Sparkles size={13} className="text-violet-200" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                                EXPERIENCE & EDUCATION
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Experience &{" "}
                            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                                Education
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                            Hands-on industry internships, an academic foundation in Artificial Intelligence, and leadership roles.
                        </p>
                    </div>

                    {/* View Switcher Tabs */}
                    <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-1.5 backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => setActiveTab("WORK")}
                            style={{ color: activeTab === "WORK" ? "#070707" : undefined }}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                                activeTab === "WORK"
                                    ? "bg-white !text-[#070707]"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <BriefcaseBusiness size={14} />
                            <span>Work Experience</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("EDUCATION")}
                            style={{ color: activeTab === "EDUCATION" ? "#070707" : undefined }}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                                activeTab === "EDUCATION"
                                    ? "bg-white !text-[#070707]"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <GraduationCap size={14} />
                            <span>Education</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("LEADERSHIP")}
                            style={{ color: activeTab === "LEADERSHIP" ? "#070707" : undefined }}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                                activeTab === "LEADERSHIP"
                                    ? "bg-white !text-[#070707]"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Users size={14} />
                            <span>Leadership</span>
                        </button>
                    </div>
                </motion.div>

                {/* Tab Contents */}
                <div className="mt-12">
                    <AnimatePresence mode="wait">
                        {activeTab === "WORK" && (
                            <motion.div
                                key="work"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35 }}
                                className="relative"
                            >
                                {/* Vertical Timeline Line */}
                                <div className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-violet-300 via-violet-300/20 to-transparent md:left-[19px]" />

                                <div className="space-y-10">
                                    {experiences.map((item, index) => (
                                        <motion.div
                                            key={`${item.company}-${item.role}`}
                                            initial={{ opacity: 0, x: -25 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.08 }}
                                            className="relative pl-12 md:pl-16"
                                        >
                                            {/* Timeline Node */}
                                            <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-violet-300/40 bg-[#070707] md:left-1 md:h-9 md:w-9">
                                                <div className="h-2.5 w-2.5 rounded-full bg-violet-200" />
                                            </div>

                                            {/* Experience Card */}
                                            <div className="rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all hover:border-violet-200/30 md:p-8">
                                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                                    <div>
                                                        <span className="inline-block rounded-md border border-violet-200/25 bg-violet-300/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-violet-200">
                                                            {item.type}
                                                        </span>
                                                        <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                                                            {item.role}
                                                        </h3>
                                                        <p className="mt-1 text-sm font-medium text-white/70">
                                                            {item.company}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white/50 sm:text-right">
                                                        <Calendar size={13} className="text-violet-200" />
                                                        <span>{item.period}</span>
                                                    </div>
                                                </div>

                                                <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                                                    {item.description}
                                                </p>

                                                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                                                    {item.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "EDUCATION" && (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35 }}
                                className="grid gap-6 md:grid-cols-3"
                            >
                                {education.map((item) => (
                                    <div
                                        key={item.qualification}
                                        className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-7 backdrop-blur-xl transition-all hover:border-violet-300/30"
                                    >
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-200">
                                                <Calendar size={13} />
                                                <span>{item.period}</span>
                                            </div>

                                            <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                                                {item.qualification}
                                            </h3>

                                            <p className="mt-2 text-sm text-white/80">
                                                {item.institution}
                                            </p>

                                            {item.detail && (
                                                <p className="mt-1 text-xs text-white/50">
                                                    {item.detail}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-6 border-t border-white/10 pt-4">
                                            {item.highlights.map((h) => (
                                                <div key={h} className="flex items-center gap-2 text-xs text-white/50">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "LEADERSHIP" && (
                            <motion.div
                                key="leadership"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35 }}
                                className="grid gap-6 md:grid-cols-2"
                            >
                                {volunteering.map((item) => (
                                    <div
                                        key={item.organization}
                                        className="rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-7 backdrop-blur-xl transition-all hover:border-violet-300/30"
                                    >
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-200">
                                            <Calendar size={13} />
                                            <span>{item.period}</span>
                                        </div>

                                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                                            {item.role}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold text-white/80">
                                            {item.organization}
                                        </p>

                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
