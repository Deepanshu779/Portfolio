import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";

const links = [
    {
        label: "GitHub",
        icon: FaGithub,
        href: "https://github.com/Deepanshu779",
    },
    {
        label: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/deepanshu-kumar-pandit/",
    },
    {
        label: "Email",
        icon: Mail,
        href: "mailto:deepanshukumarpandit2024@gmail.com",
    },
];

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#080b12] px-6 pb-10 pt-32 md:px-10 lg:px-12"
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-8 text-xs tracking-[0.3em] text-cyan-300">
                        07 / CONTACT
                    </p>

                    <h2 className="max-w-5xl text-[clamp(4rem,11vw,11rem)] font-light leading-[0.78] tracking-[-0.07em]">
                        LET'S BUILD
                        <br />
                        <span className="text-white/30">SOMETHING</span>
                        <br />
                        USEFUL.
                    </h2>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mt-20 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto]"
                >
                    <div>
                        <p className="max-w-xl text-base leading-8 text-white/40 md:text-lg">
                            Have an idea, project, or opportunity you'd like to
                            discuss? I'm always interested in building practical
                            technology and exploring new ideas in AI and software.
                        </p>

                        <a
                            href="mailto:deepanshukumarpandit2024@gmail.com"
                            className="group mt-8 inline-flex items-center gap-4 text-lg font-light transition-colors duration-300 hover:text-cyan-300 md:text-2xl"
                        >
                            deepanshukumarpandit2024@gmail.com

                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex flex-col">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        link.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="group flex min-w-[220px] items-center justify-between border-b border-white/10 py-5"
                                >
                                    <span className="flex items-center gap-4 text-sm tracking-[0.15em] text-white/50 transition-colors duration-300 group-hover:text-white">
                                        <Icon size={18} strokeWidth={1.2} />
                                        {link.label.toUpperCase()}
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.2}
                                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Footer */}
                <div className="mt-32 border-t border-white/10 pt-6">
                    <div className="flex flex-col justify-between gap-4 text-[10px] tracking-[0.2em] text-white/25 md:flex-row">
                        <p>© {new Date().getFullYear()} DEEPANSHU KUMAR PANDIT</p>

                        <p>AI / ML · SOFTWARE · GENAI</p>

                        <p>BUILT WITH REACT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
