import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, CheckCircle2, Trophy, ExternalLink, Search } from "lucide-react";

type CredentialCategory = "ALL" | "CERTIFICATIONS" | "ACHIEVEMENTS";

interface Certification {
    number: string;
    title: string;
    issuer: string;
    description: string;
    href: string;
    category: string;
}

interface Achievement {
    number: string;
    title: string;
    issuer: string;
    description: string;
}

const certifications: Certification[] = [
    { number: "01", title: "Artificial Intelligence Fundamentals", issuer: "IBM", category: "AI & MACHINE LEARNING", description: "Foundational learning in artificial intelligence principles and applications.", href: "https://www.credly.com/badges/0088bde1-342a-4802-9b5b-42c000575cb2/public_url" },
    { number: "02", title: "Programming in Java", issuer: "NPTEL / IIT", category: "SOFTWARE DEVELOPMENT", description: "Academic coursework and examination credential in Java programming.", href: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS36S76240230404466430" },
    { number: "03", title: "Generate Reports with AI Research Agents", issuer: "Microsoft Applied Skills", category: "GENERATIVE AI", description: "Applied credential focused on creating reports with AI research agents.", href: "https://learn.microsoft.com/en-in/users/deepanshukumarpandit-6212/credentials/1e0ef1726dc215de" },
    { number: "04", title: "Exploratory Data Analysis", issuer: "NASSCOM / FutureSkills Prime", category: "DATA", description: "Earned Gold category with an 81% assessment score in exploratory data analysis.", href: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-476b379c-71da-11f1-9954-005056b48b54" },
    { number: "05", title: "Generative AI Virtual Internship", issuer: "IBM SkillsBuild / FSP", category: "GENERATIVE AI", description: "Generative AI virtual internship through FutureSkills Prime (24 June–27 August 2026).", href: "https://courses.ibmmooc.skillsnetwork.site/certificates/cf8208aadf994ec8bdf53959f7898d05" },
];

const achievements: Achievement[] = [
    { number: "01", title: "Best Campus Ambassador Recognition", issuer: "eDC, IIT Delhi", description: "Recognized for student outreach, event facilitation, and driving campus engagement for entrepreneurship initiatives." },
    { number: "02", title: "Hackathon Team Recognition", issuer: "TechClasher", description: "Collaborated in an intensive competitive hackathon, engineering functional prototypes under tight time constraints." },
    { number: "03", title: "Cloud & AI/ML Learning Pathways", issuer: "GDG on Campus", description: "Completed guided technical tracks in cloud computing, data handling, and machine learning fundamentals." },
];

export default function Credentials() {
    const [activeCategory, setActiveCategory] = useState<CredentialCategory>("ALL");
    const [search, setSearch] = useState("");
    const filteredCertifications = useMemo(() => certifications.filter((cert) =>
        `${cert.title} ${cert.issuer} ${cert.category}`.toLowerCase().includes(search.trim().toLowerCase())
    ), [search]);

    return (
        <section id="credentials" className="relative overflow-hidden bg-[#070707] px-5 py-24 md:px-10 lg:px-12">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[15%] top-[25%] h-[440px] w-[440px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                    className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                            <Award size={13} className="text-violet-200" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">CREDENTIALS</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Certifications & <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">Recognition</span></h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">Verified technical certifications, university accreditations, and competition milestones.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(["ALL", "CERTIFICATIONS", "ACHIEVEMENTS"] as CredentialCategory[]).map((cat) => {
                            const selected = activeCategory === cat;
                            return <button key={cat} type="button" onClick={() => setActiveCategory(cat)} aria-pressed={selected}
                                style={{ color: selected ? "#070707" : undefined }}
                                className={`rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide transition-colors ${selected ? "bg-white !text-[#070707]" : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"}`}>{cat}</button>;
                        })}
                    </div>
                </motion.div>

                {(activeCategory === "ALL" || activeCategory === "CERTIFICATIONS") && <div className="mt-10">
                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-violet-200"><CheckCircle2 size={15} /><span>CERTIFICATIONS <span className="text-white/40">/ {filteredCertifications.length}</span></span></div>
                        <label className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-white/50 transition focus-within:border-violet-200/50 sm:max-w-xs">
                            <Search size={15} aria-hidden="true" /><span className="sr-only">Search credentials</span>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, issuer, category…" className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/35" />
                        </label>
                    </div>
                    {filteredCertifications.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredCertifications.map((cert, i) => <motion.a key={cert.number} href={cert.href} target="_blank" rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.04 }}
                            className="group flex min-h-56 flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-200/35 hover:bg-[#10121d]">
                            <div>
                                <div className="flex items-start justify-between gap-3"><span className="text-[10px] font-semibold tracking-[0.13em] text-violet-200">{cert.category}</span><ArrowUpRight size={16} className="shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200" /></div>
                                <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition group-hover:text-violet-100">{cert.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-white/55">{cert.description}</p>
                            </div>
                            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4"><span className="text-xs text-white/70">{cert.issuer}</span><span className="flex items-center gap-1.5 text-[11px] font-medium text-violet-200">Credential link <ExternalLink size={12}/></span></div>
                        </motion.a>)}
                    </div> : <p className="rounded-xl border border-white/10 p-6 text-sm text-slate-400">No credentials match “{search}”. Try another search.</p>}
                </div>}

                {(activeCategory === "ALL" || activeCategory === "ACHIEVEMENTS") && <div className="mt-14">
                    <div className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-violet-200"><Trophy size={15}/><span>ACHIEVEMENTS <span className="text-white/40">/ {achievements.length}</span></span></div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {achievements.map((item, i) => <motion.article key={item.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-[#0c0d14]/70 p-5 transition hover:border-violet-200/30">
                            <span className="text-[10px] font-semibold tracking-[0.13em] text-white/40">{item.issuer}</span><h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-xs leading-relaxed text-white/55">{item.description}</p>
                        </motion.article>)}
                    </div>
                </div>}
            </div>
        </section>
    );
}
