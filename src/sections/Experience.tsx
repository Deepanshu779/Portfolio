import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
    { period: "JUN 2026 - AUG 2026", role: "Generative AI Virtual Intern", company: "IBM SkillsBuild / FSP", type: "VIRTUAL INTERNSHIP", description: "Completed hands-on Generative AI training covering Python, machine learning algorithms, ANN, CNN, NLP, tokenization, RNN, LSTM, sentiment analysis, encoder-decoder architectures, and Generative AI concepts. Built MediAI 2.0 as the internship project.", tags: ["Generative AI", "NLP", "Deep Learning", "Python"] },
    { period: "JUN 2026 - JUL 2026", role: "Tech Intern", company: "The Indus Group of Co.", type: "INTERNSHIP", description: "Enhanced the company website with Next.js, JavaScript, and Tailwind CSS. Built interactive Freight Cost Estimator and Franchise ROI Calculator tools while collaborating through Git/GitHub in an agile workflow.", tags: ["Next.js", "Tailwind CSS", "JavaScript", "Git/GitHub"] },
    { period: "JAN 2026 - JUL 2026", role: "Python Developer", company: "The Skybrisk", type: "INTERNSHIP", description: "Developed Python applications and scripts with an emphasis on efficient, reusable, and maintainable code. Implemented and tested features using APIs and backend development concepts.", tags: ["Python", "APIs", "Backend Development", "Testing"] },
    { period: "DEC 2025 - JAN 2026", role: "AI & ML Intern", company: "Edunet Foundation & IBM SkillsBuild", type: "INTERNSHIP", description: "Completed a six-week AI and ML internship with AICTE and IBM SkillsBuild. Independently built a Streamlit mental-health companion chatbot using NLP for emotional-support and wellness guidance.", tags: ["Artificial Intelligence", "Machine Learning", "NLP", "Streamlit"] },
];

const education = [
    { period: "SEP 2024 - OCT 2028", qualification: "B.Tech - Artificial Intelligence", institution: "Greater Noida Institute of Technology", detail: "Dr. A.P.J. Abdul Kalam Technical University" },
    { period: "2023 - 2024", qualification: "Higher Secondary - PCM", institution: "Government Sarvodaya Bal Vidyalaya, Timarpur, Delhi" },
    { period: "2022 - 2023", qualification: "Matriculation", institution: "Government Boys Senior Secondary School, Nehru Vihar, Delhi" },
];

const volunteering = [
    { period: "DEC 2025 - FEB 2026", organization: "Entrepreneurship Development Cell (eDC), IIT Delhi", description: "Promoted entrepreneurship programmes and innovation events, coordinated campus outreach, and strengthened communication, marketing, and community-engagement skills." },
    { period: "NOV 2025 - JAN 2026", organization: "Collegedunia", description: "Campus Ambassador." },
];

function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden bg-[#080b12] px-6 py-32 md:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-20 flex items-end justify-between border-b border-white/10 pb-8">
                    <div><p className="mb-4 text-xs tracking-[0.3em] text-cyan-300">04 / EXPERIENCE</p><h2 className="text-[clamp(3rem,7vw,7rem)] font-light leading-[0.85] tracking-[-0.06em]">Where I&apos;ve<br /><span className="text-white/35">Learned.</span></h2></div>
                    <p className="hidden max-w-xs text-right text-xs leading-6 text-white/35 md:block">Professional experience built through internships, projects, and hands-on learning.</p>
                </motion.div>
                <div className="relative"><div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/10 md:left-[15px]" /><div className="space-y-16">{experiences.map((item, index) => (
                    <motion.article key={`${item.company}-${item.role}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: index * 0.12 }} className="relative pl-12 md:pl-20">
                        <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-[#080b12]"><div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.6)]" /></div>
                        <div className="grid gap-8 lg:grid-cols-[220px_1fr]"><div><p className="text-[10px] tracking-[0.2em] text-cyan-300/70">{item.period}</p><p className="mt-3 text-[10px] tracking-[0.25em] text-white/25">{item.type}</p></div><div className="border-b border-white/10 pb-12"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-start"><div><h3 className="text-2xl font-light tracking-[-0.02em] md:text-3xl">{item.role}</h3><p className="mt-2 text-sm text-white/40">{item.company}</p></div><BriefcaseBusiness size={20} strokeWidth={1.2} className="text-white/20" /></div><p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 md:text-base">{item.description}</p><div className="mt-6 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.08em] text-white/40">{tag}</span>)}</div></div></div>
                    </motion.article>))}</div></div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mt-32 border-t border-white/10 pt-8"><div className="mb-12 flex items-center justify-between"><div><p className="mb-3 text-xs tracking-[0.3em] text-cyan-300">EDUCATION</p><h3 className="text-4xl font-light tracking-[-0.04em] md:text-6xl">Academic Journey.</h3></div><GraduationCap size={28} strokeWidth={1} className="text-white/20" /></div><div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">{education.map((item) => <article key={item.qualification} className="bg-[#080b12] p-7 md:p-10"><p className="text-[10px] tracking-[0.25em] text-cyan-300/70">{item.period}</p><h4 className="mt-8 text-2xl font-light md:text-3xl">{item.qualification}</h4><p className="mt-3 text-sm leading-6 text-white/40">{item.institution}</p>{item.detail && <p className="mt-1 text-xs text-white/25">{item.detail}</p>}</article>)}</div></motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mt-24 border-t border-white/10 pt-8"><p className="mb-3 text-xs tracking-[0.3em] text-cyan-300">VOLUNTEERING</p><h3 className="text-4xl font-light tracking-[-0.04em] md:text-6xl">Community & Leadership.</h3><div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">{volunteering.map((item) => <article key={item.organization} className="bg-[#080b12] p-7 md:p-10"><p className="text-[10px] tracking-[0.25em] text-cyan-300/70">{item.period}</p><h4 className="mt-6 text-2xl font-light">Campus Ambassador</h4><p className="mt-3 text-sm text-white/40">{item.organization}</p><p className="mt-5 text-sm leading-6 text-white/35">{item.description}</p></article>)}</div></motion.div>
            </div>
        </section>
    );
}

export default Experience;
