import { motion } from "framer-motion";
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
    SiVscodium,
    SiScikitlearn,
    SiStreamlit,
} from "react-icons/si";

import {
    BrainCircuit,
    Code2,
    Database,
    Sparkles,
    Wrench,
    MessageSquareText,
    Bot,
} from "lucide-react";

type Skill = {
    name: string;
    icon: React.ElementType;
    color: string;
};

type SkillGroup = {
    title: string;
    icon: React.ElementType;
    skills: Skill[];
};

const skillGroups: SkillGroup[] = [
    {
        title: "LANGUAGES",
        icon: Code2,
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Java", icon: Sparkles, color: "#ED8B00" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
        ],
    },
    {
        title: "AI / ML",
        icon: BrainCircuit,
        skills: [
            {
                name: "Machine Learning",
                icon: BrainCircuit,
                color: "#22D3EE",
            },
            {
                name: "Generative AI",
                icon: Sparkles,
                color: "#A855F7",
            },
            {
                name: "NLP",
                icon: MessageSquareText,
                color: "#06B6D4",
            },
            {
                name: "LLM APIs",
                icon: Bot,
                color: "#10B981",
            },
            {
                name: "scikit-learn",
                icon: SiScikitlearn,
                color: "#F59E0B",
            },
            {
                name: "Streamlit",
                icon: SiStreamlit,
                color: "#FF4B4B",
            },
        ],
    },
    {
        title: "FRAMEWORKS",
        icon: Sparkles,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
            { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
            { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
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
            { name: "VS Code", icon: SiVscodium, color: "#007ACC" },
        ],
    },
];

function SkillCard({ skill }: { skill: Skill }) {
    const Icon = skill.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    return (
        <motion.div
            whileHover={{
                y: -6,
                scale: 1.025,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
            }}
            className="group relative flex h-[120px] min-w-[145px] flex-1 cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.11] bg-[#08121f]/90 px-4 backdrop-blur-xl"
        >
            {/* Ambient card glow */}
            <div
                className="pointer-events-none absolute bottom-[-35px] left-1/2 h-20 w-28 -translate-x-1/2 rounded-full opacity-20 blur-3xl transition-all duration-300 group-hover:opacity-80"
                style={{ backgroundColor: skill.color }}
            />

            {/* Logo */}
            <Icon
                className="relative z-10 text-[42px] transition-all duration-300 group-hover:scale-110"
                style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color}45)`,
                }}
            />

            {/* Name */}
            <span className="relative z-10 mt-3 text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-white">
                {skill.name}
            </span>

            {/* Bottom neon line */}
            <span
                className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-[72%]"
                style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 14px ${skill.color}`,
                }}
            />
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative min-h-screen overflow-hidden bg-[#030711] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[55%] top-[5%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

                <div className="absolute right-[-220px] top-[-100px] h-[700px] w-[700px] rounded-full border border-cyan-400/[0.07]" />

                <div className="absolute right-[-120px] top-[-20px] h-[520px] w-[520px] rounded-full border border-cyan-400/[0.06]" />

                <div className="absolute right-[-30px] top-[70px] h-[350px] w-[350px] rounded-full border border-cyan-400/[0.05]" />
            </div>

            <div className="relative mx-auto max-w-[1500px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="mb-5 inline-flex rounded-full border border-cyan-400/50 bg-cyan-400/[0.035] px-7 py-2.5 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                        <span className="text-xs font-bold tracking-[0.28em] text-cyan-300">
                            SKILLS
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
                        Tech{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Stack
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                        Technologies and tools I use to build practical AI, Machine
                        Learning and Generative AI applications.
                    </p>

                    <div className="mt-7 h-[3px] w-20 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                </motion.div>

                {/* Skill rows */}
                <div className="mt-16 space-y-4">
                    {skillGroups.map((group, index) => {
                        const GroupIcon = group.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="rounded-[26px] border border-cyan-400/[0.14] bg-[#050d18]/75 p-3 backdrop-blur-xl md:p-4"
                            >
                                <div className="grid min-h-[145px] gap-4 md:grid-cols-[300px_1fr] md:items-center">
                                    {/* Category */}
                                    <div className="flex h-full items-center gap-5 border-b border-white/[0.08] px-5 md:border-b-0 md:border-r">
                                        <GroupIcon className="h-8 w-8 text-cyan-300" />

                                        <span className="text-sm font-bold tracking-[0.17em] text-cyan-300">
                                            {group.title}
                                        </span>
                                    </div>

                                    {/* Skill cards */}
                                    <div className="flex flex-wrap gap-3 px-1 py-1">
                                        {group.skills.map((skill) => (
                                            <SkillCard
                                                key={skill.name}
                                                skill={skill}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom line */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-16 h-px origin-left bg-gradient-to-r from-cyan-400/50 via-cyan-400/10 to-transparent"
                />
            </div>
        </section>
    );
}
