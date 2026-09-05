import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Mail, Copy, Check, MapPin, Clock, Send } from "lucide-react";

const links = [
    {
        label: "GitHub",
        icon: FaGithub,
        handle: "github.com/Deepanshu779",
        href: "https://github.com/Deepanshu779",
    },
    {
        label: "LinkedIn",
        icon: FaLinkedin,
        handle: "linkedin.com/in/deepanshu-kumar-pandit",
        href: "https://www.linkedin.com/in/deepanshu-kumar-pandit/",
    },
    {
        label: "Email",
        icon: Mail,
        handle: "deepanshukumarpandit2024@gmail.com",
        href: "mailto:deepanshukumarpandit2024@gmail.com",
    },
];

function Contact() {
    const [copied, setCopied] = useState(false);
    const emailAddress = "deepanshukumarpandit2024@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#030711] px-5 pb-12 pt-28 md:px-10 lg:px-12"
        >
            {/* Ambient Atmosphere */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[160px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
                        <Mail size={13} className="text-cyan-300" />
                        <span className="text-[11px] font-bold tracking-[0.24em] text-cyan-300">
                            07 / GET IN TOUCH
                        </span>
                    </div>

                    <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl">
                        LET'S BUILD
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                            SOMETHING
                        </span>
                        <br />
                        USEFUL.
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_0.8fr]"
                >
                    {/* Left Column: Direct Action & Location Card */}
                    <div>
                        <p className="max-w-xl text-base leading-relaxed text-slate-300/80 md:text-lg">
                            Have an exciting project, an internship opportunity, or a problem you'd like to collaborate on? I'm always open to discussing new opportunities in AI, Machine Learning, and software engineering.
                        </p>

                        {/* Direct Email Action Button */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href={`mailto:${emailAddress}`}
                                className="group flex h-13 items-center gap-3 rounded-full bg-cyan-400 px-6 font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
                            >
                                <Send size={16} />
                                <span>Send Email Directly</span>
                                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>

                            <button
                                type="button"
                                onClick={handleCopy}
                                className="flex h-13 items-center gap-2.5 rounded-full border border-cyan-400/35 bg-white/[0.03] px-5 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white"
                            >
                                {copied ? (
                                    <>
                                        <Check size={16} className="text-emerald-400" />
                                        <span className="text-emerald-300">Copied Address!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} className="text-cyan-300" />
                                        <span>Copy Email Address</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Location & Status Card */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-lg">
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071120]/60 p-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                                    <p className="text-xs font-semibold text-white">Delhi NCR, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071120]/60 p-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time Zone</p>
                                    <p className="text-xs font-semibold text-white">IST (UTC +5:30)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Social Profiles List */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">
                            CONNECT & NETWORK
                        </p>

                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#071120]/70 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-[#071120]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-colors group-hover:bg-cyan-400/15 group-hover:text-cyan-300">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                                                {link.label}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {link.handle}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Footer Section */}
                <div className="mt-28 border-t border-white/10 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-xs tracking-wider text-slate-500 sm:flex-row sm:text-left">
                        <p>© {new Date().getFullYear()} Deepanshu Kumar Pandit. All rights reserved.</p>
                        <p className="text-slate-400">
                            Built with <span className="text-cyan-300">React</span>, <span className="text-cyan-300">TypeScript</span> & <span className="text-cyan-300">Tailwind CSS</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
