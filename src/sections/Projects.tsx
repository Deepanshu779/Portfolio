import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    ExternalLink,
    Sparkles,
    Layers,
} from "lucide-react";

type ProjectCategory = "ALL" | "AI & ML" | "HEALTHCARE" | "FULL STACK";

type Project = {
    number: string;
    title: string;
    category: string;
    tags: ProjectCategory[];
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "MediAI 2.0",
        category: "AI-POWERED HEALTHCARE",
        tags: ["AI & ML", "HEALTHCARE"],
        description:
            "A Flask healthcare assessment app that uses symptom inputs and machine learning to suggest possible conditions, then uses the Groq API to provide educational health guidance and generate downloadable PDF reports.",
        image: "/projects/mediai.png",
        technologies: [
            "Python",
            "Flask",
            "Machine Learning",
            "Groq API",
            "NLP",
        ],
        github: "https://github.com/Deepanshu779/MediAI2.0",
        live: "https://ai-healthcare-frgt.onrender.com",
    },
    {
        number: "02",
        title: "MedCore 302",
        category: "HEALTHCARE TECHNOLOGY",
        tags: ["HEALTHCARE", "FULL STACK"],
        description:
            "An interactive healthcare ecosystem for patient care in India, designed around real-time vital tracking, clinical scheduling, and patient-first diagnostics.",
        image: "/projects/medcore.png",
        technologies: [
            "Healthcare UX",
            "Vital Tracking",
            "Clinical Scheduling",
            "Node.js",
            "India-first",
        ],
        github: "https://github.com/Deepanshu779/medcore302",
        live: "https://medcore302.onrender.com",
    },
    {
        number: "03",
        title: "Pricevana",
        category: "AI SHOPPING ASSISTANT",
        tags: ["AI & ML", "FULL STACK"],
        description:
            "An intelligent price-tracking and product-discovery app that analyzes price history, predicts future price drops with machine learning, and finds active discount coupons to help shoppers time purchases.",
        image: "/projects/pricevana.png",
        technologies: [
            "JavaScript",
            "Machine Learning",
            "Price Tracking",
            "Coupon Discovery",
            "APIs",
        ],
        github: "https://github.com/Deepanshu779/Pricevana",
        live: "https://pricevana.vercel.app",
    },
    {
        number: "04",
        title: "Kaathirent",
        category: "RENTAL PLATFORM",
        tags: ["FULL STACK"],
        description:
            "A monthly rental platform for essential furniture and appliances, focused on flexible, affordable, and convenient access to home essentials with high-speed ordering.",
        image: "/projects/kaathirent.png",
        technologies: [
            "Python",
            "Rental Platform",
            "Furniture",
            "Appliances",
            "E-Commerce",
        ],
        github: "https://github.com/Deepanshu779/Kaathirent",
        live: "https://kaathirent.vercel.app",
    },
];

const categories: { label: string; value: ProjectCategory }[] = [
    { label: "ALL", value: "ALL" },
    { label: "AI & ML", value: "AI & ML" },
    { label: "HEALTHCARE", value: "HEALTHCARE" },
    { label: "FULL STACK", value: "FULL STACK" },
];

function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-[28px] border border-cyan-400/[0.14] bg-[#050d18]/85 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
        >
            {/* Ambient hover glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[100px] transition-all duration-700 group-hover:bg-cyan-400/[0.12]" />

            <div className="grid lg:grid-cols-[1.05fr_1fr]">
                {/* Project Media Showcase */}
                <div className="relative min-h-[300px] overflow-hidden border-b border-white/[0.08] lg:min-h-[420px] lg:border-b-0 lg:border-r">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-[#030711]/30 to-transparent" />

                    {/* Project Number Chip */}
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#030711]/75 px-4 py-1.5 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-300">
                            PROJECT / {project.number}
                        </span>
                    </div>

                    {/* Top right quick external icon */}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                            className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-[#030711]/80 text-cyan-300 shadow-[0_0_15px_rgba(0,180,255,0.2)] backdrop-blur-md transition-all hover:scale-110 hover:bg-cyan-400 hover:text-slate-950"
                        >
                            <ArrowUpRight size={18} />
                        </a>
                    )}
                </div>

                {/* Project Details Content */}
                <div className="relative flex flex-col justify-between p-7 md:p-9 lg:p-10">
                    <div>
                        {/* Category & Tags */}
                        <div className="mb-4 flex flex-wrap items-center gap-2.5">
                            <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                                {project.category}
                            </span>
                            <span className="text-white/20">•</span>
                            <div className="flex gap-1.5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium tracking-wider text-slate-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/80 md:text-base">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-200"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                            >
                                <Code2 size={15} />
                                <span>Code Repository</span>
                                <ArrowUpRight size={13} className="text-slate-400" />
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
                            >
                                <ExternalLink size={15} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Glowing Accent Bar on Hover */}
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:w-[80%]" />
        </motion.article>
    );
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("ALL");

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "ALL") return projects;
        return projects.filter((p) => p.tags.includes(selectedCategory));
    }, [selectedCategory]);

    return (
        <section
            id="work"
            className="relative overflow-hidden bg-[#030711] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Background Atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-48 top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[150px]" />
                <div className="absolute -right-36 top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
                            <Sparkles size={13} className="text-cyan-300" />
                            <span className="text-[11px] font-bold tracking-[0.24em] text-cyan-300">
                                SELECTED WORK
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                            Real-world applications combining artificial intelligence, Machine Learning, and modern web architectures.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat.value;
                            return (
                                <button
                                    key={cat.value}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                                        isSelected
                                            ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                            : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    <Layers size={13} className={isSelected ? "text-slate-950" : "text-cyan-300"} />
                                    <span>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Projects List */}
                <div className="mt-12 space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
