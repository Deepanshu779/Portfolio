import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiPython,
    SiCplusplus,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiMysql,
    SiSqlite,
    SiMongodb,
    SiGit,
    SiGithub,
    SiScikitlearn,
    SiStreamlit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import {
    BrainCircuit,
    Code2,
    Database,
    Sparkles,
    Wrench,
    MessageSquareText,
    Bot,
    Search,
    Cpu,
} from "lucide-react";

type Skill = {
    name: string;
    icon: React.ElementType;
    color: string;
    group: string;
};



function VscodeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            style={style}
            aria-hidden="true"
        >
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
        </svg>
    );
}

const rawSkillGroups: { title: string; icon: React.ElementType; skills: { name: string; icon: React.ElementType; color: string }[] }[] = [
    {
        title: "LANGUAGES",
        icon: Code2,
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Java", icon: FaJava, color: "#ED8B00" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
        ],
    },
    {
        title: "AI / ML",
        icon: BrainCircuit,
        skills: [
            { name: "Machine Learning", icon: BrainCircuit, color: "#22D3EE" },
            { name: "Generative AI", icon: Sparkles, color: "#A855F7" },
            { name: "NLP", icon: MessageSquareText, color: "#06B6D4" },
            { name: "LLM APIs", icon: Bot, color: "#10B981" },
            { name: "scikit-learn", icon: SiScikitlearn, color: "#F59E0B" },
            { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
        ],
    },
    {
        title: "FRAMEWORKS",
        icon: Sparkles,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
            { name: "Express.js", icon: SiExpress, color: "#E2E8F0" },
            { name: "Flask", icon: SiFlask, color: "#CBD5E1" },
        ],
    },
    {
        title: "DATABASE",
        icon: Database,
        skills: [
            { name: "MySQL", icon: SiMysql, color: "#00758F" },
            { name: "SQLite", icon: SiSqlite, color: "#44A6D8" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        title: "TOOLS",
        icon: Wrench,
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
            { name: "VS Code", icon: VscodeIcon, color: "#007ACC" },
        ],
    },
];

const allSkills: Skill[] = rawSkillGroups.flatMap((group) =>
    group.skills.map((s) => ({ ...s, group: group.title }))
);

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSkills = useMemo(() => {
        return allSkills.filter((skill) => {
            const matchesCategory =
                selectedCategory === "ALL" || skill.group === selectedCategory;
            const matchesSearch =
                skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.group.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const categories = ["ALL", "AI / ML", "LANGUAGES", "FRAMEWORKS", "DATABASE", "TOOLS"];

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#070707] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Background Atmosphere */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[50%] top-[10%] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-[160px]" />
                <div className="absolute right-[-100px] top-[20%] h-[500px] w-[500px] rounded-full border border-violet-400/[0.06]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                            <Cpu size={13} className="text-violet-200" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                                TECHNICAL STACK
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Skills &{" "}
                            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                                Technologies
                            </span>
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                            Technologies, languages, and frameworks used across machine learning pipelines, backend services, and web development.
                        </p>
                    </div>

                    {/* Live Search Input */}
                    <div className="relative w-full max-w-xs">
                        <Search
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                        />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search skill (e.g. Python, React)..."
                            className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs text-white placeholder-white/35 backdrop-blur-md outline-none transition-all focus:border-violet-300/60 focus:bg-white/10"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-white/40 hover:text-white"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Category Filter Buttons */}
                <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-6">
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all ${
                                    isSelected
                                        ? "bg-white !text-[#070707]"
                                        : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                                }`}
                                style={{ color: isSelected ? "#070707" : undefined }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <div className="mt-10">
                    {filteredSkills.length === 0 ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
                            <p className="text-sm text-slate-400">
                                No skills found matching "{searchQuery}".
                            </p>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredSkills.map((skill) => {
                                    const Icon = skill.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                                    return (
                                        <motion.div
                                            layout
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            whileHover={{ y: -4, scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className="group relative flex h-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-4 backdrop-blur-xl transition-all hover:border-violet-300/40"
                                        >
                                            <Icon
                                                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    color: skill.color,
                                                }}
                                            />

                                            <span className="mt-2.5 text-center text-xs font-semibold text-white/90 transition-colors group-hover:text-white">
                                                {skill.name}
                                            </span>

                                            <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                                                {skill.group}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
