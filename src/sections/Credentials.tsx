import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const certifications = [
    {
        number: "01",
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        description:
            "Foundational understanding of artificial intelligence concepts and applications.",
        href: "https://www.credly.com/badges/0088bde1-342a-4802-9b5b-42c000575cb2/public_url",
    },
    {
        number: "02",
        title: "Programming in Java",
        issuer: "NPTEL",
        description:
            "Formal coursework and certification focused on programming with Java.",
        href: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS36S76240230404466430",
    },
    {
        number: "03",
        title: "Generate Reports with AI Research Agents",
        issuer: "Microsoft Applied Skills",
        description:
            "Applied skills credential focused on generating reports with AI research agents.",
        href: "https://learn.microsoft.com/en-in/users/deepanshukumarpandit-6212/credentials/1e0ef1726dc215de",
    },
    {
        number: "04",
        title: "Exploratory Data Analysis",
        issuer: "NASSCOM",
        description:
            "Certification covering practical exploratory data analysis concepts and techniques.",
        href: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-476b379c-71da-11f1-9954-005056b48b54",
    },
    {
        number: "05",
        title: "Generative AI Virtual Internship",
        issuer: "IBM SkillsBuild / FSP",
        description: "Virtual internship credential in Generative AI.",
        href: "https://courses.ibmmooc.skillsnetwork.site/certificates/cf8208aadf994ec8bdf53959f7898d05",
    },
    {
        number: "06",
        title: "AI for Beginners at Work",
        issuer: "Udemy",
        description: "Training covering ChatGPT, Claude, Gemini, and Copilot for workplace use.",
        href: "https://www.udemy.com/certificate/UC-ac111f33-d578-4117-9410-6342d09df70b/",
    },
    {
        number: "07",
        title: "Python for Beginners",
        issuer: "MindLuster",
        description: "Foundational Python programming credential.",
        href: "https://www.mindluster.com/storage/cer/3b2e23cb.jpg?v=2025-04-16",
    },
];

const achievements = [
    {
        number: "01",
        title: "Campus Ambassador Recognition",
        description:
            "Recognized among the best Campus Ambassadors by the Entrepreneurship Development Cell (eDC), IIT Delhi, for performance, networking, and event promotion.",
    },
    {
        number: "02",
        title: "Top 15 — TechClasher Hackathon",
        description:
            "Cleared two competitive screening rounds and finished among the Top 15 participants at the TechClasher Hackathon.",
    },
    {
        number: "03",
        title: "20+ Cloud & AI/ML Pathways",
        description:
            "Completed 20+ intensive hands-on cloud architecture and AI/ML pathways organized by Google Developer Groups on campus at GNIOT.",
    },
];

function Credentials() {
    return (
        <section
            id="credentials"
            className="relative overflow-hidden bg-[#080b12] px-6 py-32 md:px-10 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 border-b border-white/10 pb-8"
                >
                    <p className="mb-4 text-xs tracking-[0.3em] text-cyan-300">
                        05 / CREDENTIALS
                    </p>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="text-[clamp(3rem,7vw,7rem)] font-light leading-[0.85] tracking-[-0.06em]">
                            Learning
                            <br />
                            <span className="text-white/35">& Recognition.</span>
                        </h2>

                        <p className="max-w-sm text-sm leading-7 text-white/35">
                            Certifications, competitions, and hands-on learning that
                            have shaped my technical journey.
                        </p>
                    </div>
                </motion.div>

                {/* Certifications */}
                <div>
                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-xs tracking-[0.25em] text-white/35">
                            CERTIFICATIONS
                        </p>

                        <span className="text-xs text-white/20">
                            07 CREDENTIALS
                        </span>
                    </div>

                    <div className="border-t border-white/10">
                        {certifications.map((certificate, index) => (
                            <motion.a
                                key={certificate.number}
                                href={certificate.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                }}
                                className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_180px] md:items-center"
                            >
                                <span className="text-xs tracking-[0.2em] text-white/20">
                                    {certificate.number}
                                </span>

                                <div>
                                    <h3 className="text-xl font-light tracking-[-0.02em] transition-colors duration-300 group-hover:text-cyan-300 md:text-2xl">
                                        {certificate.title}
                                    </h3>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
                                        {certificate.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between md:justify-end md:gap-5">
                                    <span className="text-xs tracking-[0.15em] text-white/45">
                                        {certificate.issuer}
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.2}
                                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                                    />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mt-32">
                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-xs tracking-[0.25em] text-white/35">
                            ACHIEVEMENTS
                        </p>

                        <span className="text-xs text-white/20">
                            03 HIGHLIGHTS
                        </span>
                    </div>

                    <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                        {achievements.map((achievement, index) => (
                            <motion.article
                                key={achievement.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                }}
                                className="group relative min-h-[300px] bg-[#080b12] p-7 transition-colors duration-500 hover:bg-white/[0.025] md:p-8"
                            >
                                <span className="text-xs tracking-[0.2em] text-cyan-300/60">
                                    {achievement.number}
                                </span>

                                <h3 className="mt-16 text-xl font-light leading-snug md:text-2xl">
                                    {achievement.title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-white/35">
                                    {achievement.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Credentials;
