import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Layers, Sparkles } from "lucide-react";

type ProjectCategory = "ALL" | "AI & ML" | "HEALTHCARE" | "FULL STACK";
type Project = {
    number: string;
    title: string;
    eyebrow: string;
    status: "In Development" | "Working Project";
    tags: ProjectCategory[];
    description: string;
    technologies: string[];
    image?: string;
    github: string;
    live?: string;
};

const flagship: Project = {
    number: "01",
    title: "Kritam",
    eyebrow: "PERSONAL AI ASSISTANT",
    status: "In Development",
    tags: ["AI & ML", "FULL STACK"],
    description:
        "A desktop-first personal AI assistant designed to bring voice interaction and everyday computer workflows together. Its hybrid architecture combines local intelligence with configurable cloud AI, with a focus on practical commands and a polished user experience.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Electron", "Ollama"],
    github: "https://github.com/Deepanshu779/Kritam",
};

const projects: Project[] = [
    {
        number: "02",
        title: "OCEANNOVA",
        eyebrow: "OIL SPILL DETECTION & MONITORING",
        status: "Working Project",
        tags: ["AI & ML"],
        description:
            "An environmental monitoring project exploring oil-spill detection and vessel activity insights. Built around real AIS data and developed for the Smart India Hackathon problem-solving journey.",
        technologies: ["AIS Data", "Data Analysis", "AI/ML", "Environmental Monitoring"],
        github: "https://github.com/Deepanshu779/OCEANNOVA",
    },
    {
        number: "03",
        title: "MediAI 2.0",
        eyebrow: "AI-POWERED HEALTHCARE",
        status: "Working Project",
        tags: ["AI & ML", "HEALTHCARE"],
        description:
            "A Flask healthcare assessment app that uses symptom inputs and machine learning to suggest possible conditions, then provides educational guidance through Groq API integration and downloadable PDF reports. It is not a substitute for professional diagnosis.",
        technologies: ["Python", "Flask", "Machine Learning", "Groq API", "NLP"],
        image: "/projects/mediai.png",
        github: "https://github.com/Deepanshu779/MediAI2.0",
        live: "https://ai-healthcare-frgt.onrender.com",
    },
    {
        number: "04",
        title: "Pricevana",
        eyebrow: "AI SHOPPING ASSISTANT",
        status: "Working Project",
        tags: ["AI & ML", "FULL STACK"],
        description:
            "A product-discovery and price-tracking app that analyzes price history, estimates potential price drops using machine learning, and helps shoppers discover available coupons.",
        technologies: ["JavaScript", "Machine Learning", "Price Tracking", "APIs"],
        image: "/projects/pricevana.png",
        github: "https://github.com/Deepanshu779/Pricevana",
        live: "https://pricevana.vercel.app",
    },
    {
        number: "05",
        title: "MedCore 302",
        eyebrow: "HEALTHCARE TECHNOLOGY",
        status: "Working Project",
        tags: ["HEALTHCARE", "FULL STACK"],
        description:
            "A patient-focused healthcare ecosystem concept bringing together vital tracking, clinical scheduling, and care workflows in one digital experience.",
        technologies: ["Node.js", "Healthcare UX", "Vital Tracking", "Clinical Scheduling"],
        image: "/projects/medcore.png",
        github: "https://github.com/Deepanshu779/medcore302",
        live: "https://medcore302.onrender.com",
    },
];

const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All work", value: "ALL" },
    { label: "AI & ML", value: "AI & ML" },
    { label: "Healthcare", value: "HEALTHCARE" },
    { label: "Full Stack", value: "FULL STACK" },
];

function Status({ status }: { status: Project["status"] }) {
    const inProgress = status === "In Development";
    return (
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium ${
            inProgress
                ? "border-amber-300/25 bg-amber-300/[0.07] text-amber-200"
                : "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200"
        }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${inProgress ? "bg-amber-300" : "bg-emerald-300"}`} />
            {status}
        </span>
    );
}

function TechList({ items }: { items: string[] }) {
    return (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {items.map((tech) => (
                <li key={tech} className="rounded-full border border-violet-200/15 bg-violet-200/[0.04] px-3 py-1 text-xs text-slate-300">
                    {tech}
                </li>
            ))}
        </ul>
    );
}

function ProjectActions({ project }: { project: Project }) {
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white transition hover:border-violet-200/50 hover:bg-violet-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-200"
            >
                <Code2 size={15} aria-hidden="true" />
                View source
                <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-violet-300 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-violet-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                    <ExternalLink size={14} aria-hidden="true" />
                    Live demo
                </a>
            )}
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d14]/70 transition-colors duration-300 hover:border-violet-300/35"
        >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-[#121320] via-[#090b14] to-[#140b20]">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                ) : (
                    <div className="flex h-full items-end justify-between p-6 sm:p-8">
                        <div>
                            <span className="font-mono text-xs tracking-[0.25em] text-violet-200/70">FIELD PROJECT / {project.number}</span>
                            <p className="mt-3 max-w-xs text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</p>
                        </div>
                        <Sparkles className="mb-1 text-violet-200/70" size={30} aria-hidden="true" />
                    </div>
                )}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#070707]/80 px-3 py-1 font-mono text-[10px] tracking-widest text-violet-100 backdrop-blur">
                    WORK / {project.number}
                </span>
            </div>
            <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[10px] font-bold tracking-[0.19em] text-violet-200">{project.eyebrow}</p>
                    <Status status={project.status} />
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{project.description}</p>
                <TechList items={project.technologies} />
                <ProjectActions project={project} />
            </div>
        </motion.article>
    );
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("ALL");
    const filteredProjects = useMemo(
        () => selectedCategory === "ALL" ? projects : projects.filter((project) => project.tags.includes(selectedCategory)),
        [selectedCategory],
    );
    const showFlagship = selectedCategory === "ALL" || flagship.tags.includes(selectedCategory);

    return (
        <section id="work" className="relative overflow-hidden bg-[#070707] px-5 py-24 md:px-10 md:py-28 lg:px-12">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-44 top-40 h-[480px] w-[480px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
                <div className="absolute -right-40 top-[35%] h-[440px] w-[440px] rounded-full bg-fuchsia-500/[0.03] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <motion.header
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                            <Sparkles size={13} className="text-violet-200" aria-hidden="true" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">SELECTED WORK</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                            A focused selection of projects across AI, machine learning, and full-stack software development. Built, deployed, and tested.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2" aria-label="Filter projects">
                        {categories.map((category) => {
                            const active = selectedCategory === category.value;
                            return (
                                <button
                                    key={category.value}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => setSelectedCategory(category.value)}
                                    style={{ color: active ? "#070707" : undefined }}
                                    className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-200 ${
                                        active
                                            ? "bg-white !text-[#070707]"
                                            : "border border-white/10 bg-white/[0.04] text-white/60 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    <Layers size={13} aria-hidden="true" />
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </motion.header>

                {showFlagship && (
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                        className="relative mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-[#0c0d14]/90 shadow-[0_18px_65px_rgba(0,0,0,0.4)]"
                    >
                        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-400/[0.07] blur-[100px]" aria-hidden="true" />
                        <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:p-12">
                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full border border-violet-200/25 bg-violet-200/[0.06] px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-violet-100">FLAGSHIP / 01</span>
                                    <Status status={flagship.status} />
                                </div>
                                <p className="mt-6 text-[11px] font-bold tracking-[0.22em] text-violet-200">{flagship.eyebrow}</p>
                                <h3 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">{flagship.title}</h3>
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{flagship.description}</p>
                                <TechList items={flagship.technologies} />
                                <ProjectActions project={flagship} />
                            </div>
                            <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:min-h-[280px] sm:p-8">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.12),transparent_55%)]" aria-hidden="true" />
                                <div className="relative flex items-center justify-between">
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">PROJECT ARCHITECTURE</span>
                                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                                </div>
                                <div className="relative">
                                    <p className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">Desktop-first, voice-enabled assistant.</p>
                                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Hybrid local (Ollama) + cloud models · Natural speech interface · System automation</p>
                                </div>
                                <p className="relative mt-8 font-mono text-[10px] tracking-[0.18em] text-violet-200/70">ACTIVE DEVELOPMENT</p>
                            </div>
                        </div>
                    </motion.article>
                )}

                <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.22em] text-violet-200">MORE SELECTED WORK</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Projects & experiments</h3>
                    </div>
                    <span className="font-mono text-xs text-slate-500">{filteredProjects.length.toString().padStart(2, "0")} PROJECTS</span>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://github.com/Deepanshu779?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-200/40 hover:bg-violet-300/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-200"
                    >
                        Explore all repositories <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
