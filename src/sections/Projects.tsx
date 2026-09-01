import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    ExternalLink,
    Sparkles,
} from "lucide-react";

type Project = {
    number: string;
    title: string;
    category: string;
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
        description:
            "A Flask healthcare assessment app that uses symptom inputs and machine learning to suggest possible conditions, then uses the Groq API to provide educational health guidance and generate downloadable PDF reports.",
        image: "/projects/mediai.png",
        technologies: [
            "Python",
            "Flask",
            "Machine Learning",
            "Groq API",
        ],
        github: "https://github.com/Deepanshu779/MediAI2.0",
        live: "https://ai-healthcare-frgt.onrender.com",
    },

    {
        number: "02",
        title: "MedCore 302",
        category: "HEALTHCARE TECHNOLOGY",
        description:
            "An interactive healthcare ecosystem for patient care in India, designed around real-time vital tracking and clinical scheduling.",
        image: "/projects/medcore.png",
        technologies: [
            "Healthcare UX",
            "Vital Tracking",
            "Clinical Scheduling",
            "India-first",
        ],
        github: "https://github.com/Deepanshu779/medcore302",
        live: "https://medcore302.onrender.com",
    },

    {
        number: "03",
        title: "Pricevana",
        category: "AI SHOPPING ASSISTANT",
        description:
            "An intelligent price-tracking and product-discovery app that analyzes price history, predicts future price drops with machine learning, and finds active discount coupons to help shoppers time purchases.",
        image: "/projects/pricevana.png",
        technologies: [
            "JavaScript",
            "Machine Learning",
            "Price Tracking",
            "Coupon Discovery",
        ],
        github: "https://github.com/Deepanshu779/Pricevana",
        live: "https://pricevana.vercel.app",
    },

    {
        number: "04",
        title: "Kaathirent",
        category: "RENTAL PLATFORM",
        description:
            "A monthly rental platform for essential furniture and appliances, focused on flexible, affordable, and convenient access to home essentials.",
        image: "/projects/kaathirent.png",
        technologies: [
            "Python",
            "Rental Platform",
            "Furniture",
            "Appliances",
        ],
        github: "https://github.com/Deepanshu779/Kaathirent",
        live: "https://kaathirent.vercel.app",
    },
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-cyan-400/[0.13] bg-[#050d18]/80 backdrop-blur-xl"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[100px] transition-all duration-700 group-hover:bg-cyan-400/[0.12]" />

            <div className="grid lg:grid-cols-[1.05fr_1fr]">
                {/* Project image */}
                <div className="relative min-h-[310px] overflow-hidden border-b border-white/[0.08] lg:min-h-[430px] lg:border-b-0 lg:border-r">
                    {/* Image */}
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-[#030711]/25 to-transparent" />

                    {/* Project number */}
                    <div className="absolute left-6 top-6 rounded-full border border-cyan-400/30 bg-[#030711]/70 px-4 py-2 backdrop-blur-md">
                        <span className="font-mono text-xs tracking-[0.25em] text-cyan-300">
                            PROJECT / {project.number}
                        </span>
                    </div>

                    {/* Image hover icon */}
                    <motion.div
                        whileHover={{ rotate: 10 }}
                        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#030711]/70 text-cyan-300 backdrop-blur-md"
                    >
                        <ArrowUpRight size={21} />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-between p-7 md:p-9 lg:p-11">
                    <div>
                        {/* Category */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

                            <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                                {project.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-cyan-300/[0.18] bg-cyan-300/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-slate-300 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-200"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border border-white/[0.13] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] hover:text-cyan-200"
                            >
                                <Code2 size={17} />
                                GitHub
                                <ArrowUpRight size={15} />
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-[#03101a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                            >
                                <ExternalLink size={17} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom neon line */}
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:w-[80%]" />
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section
            id="work"
            className="relative overflow-hidden bg-[#030711] px-5 py-28 md:px-10 lg:px-12"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

                <div className="absolute right-[-150px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />

                <div className="absolute left-[50%] top-[40%] h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1450px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/[0.035] px-7 py-2.5">
                        <Sparkles size={14} className="text-cyan-300" />

                        <span className="text-xs font-bold tracking-[0.28em] text-cyan-300">
                            SELECTED WORK
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                        A selection of projects where I apply AI, Machine Learning,
                        Generative AI and modern web technologies to solve practical
                        problems.
                    </p>

                    <div className="mt-7 h-[3px] w-20 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                </motion.div>

                {/* Projects */}
                <div className="mt-16 space-y-7">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
