import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

function GitHubIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.65.5.5 5.78.5 12.28c0 5.2 3.29 9.62 7.86 11.18.57.11.78-.25.78-.55v-2.1c-3.2.71-3.87-1.4-3.87-1.4-.52-1.35-1.27-1.71-1.27-1.71-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.79 2.67 1.27 3.32.97.1-.75.4-1.27.72-1.56-2.55-.3-5.24-1.3-5.24-5.79 0-1.28.45-2.32 1.18-3.14-.12-.3-.51-1.49.11-3.1 0 0 .96-.32 3.15 1.2a10.6 10.6 0 0 1 5.74 0c2.19-1.52 3.14-1.2 3.14-1.2.63 1.61.24 2.8.12 3.1.73.82 1.18 1.86 1.18 3.14 0 4.5-2.7 5.49-5.26 5.78.42.38.78 1.12.78 2.27v3.37c0 .3.21.66.79.55 4.56-1.56 7.85-5.98 7.85-11.18C23.5 5.78 18.35.5 12 .5Z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.2v13H1V8Zm6.7 0h4v1.78h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.05 2.8 5.05 6.44V21h-4.16v-6.17c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.6-2.37 3.25V21H7.7V8Z" />
        </svg>
    );
}

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#030711] text-white"
        >
            {/* Cinematic background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(0,119,255,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,217,255,0.09),transparent_38%),linear-gradient(110deg,#030711_0%,#050b16_55%,#020712_100%)]" />
                <div className="absolute right-[-10%] top-[15%] h-[650px] w-[650px] rounded-full border border-cyan-400/10" />

                <div className="absolute right-[4%] top-[28%] h-[500px] w-[500px] rounded-full border border-cyan-400/10" />

                <div className="absolute right-[18%] top-[38%] h-[330px] w-[330px] rounded-full border border-blue-400/10" />

                {/* Orbital lines */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-[0%] top-[18%] h-[700px] w-[900px] rounded-[50%] border border-cyan-400/15"
                />

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 55,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-[8%] top-[25%] h-[520px] w-[760px] rounded-[50%] border border-blue-400/10"
                />

                {/* Stars */}
                <span className="absolute right-[25%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                <span className="absolute right-[12%] top-[34%] h-1 w-1 rounded-full bg-cyan-200" />
                <span className="absolute right-[31%] top-[47%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                <span className="absolute left-[42%] top-[28%] h-1 w-1 rounded-full bg-white/60" />
                <span className="absolute left-[35%] top-[62%] h-1 w-1 rounded-full bg-cyan-300/70" />
                <span className="absolute right-[38%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </div>

            {/* Navigation */}
            <nav className="absolute left-5 right-5 top-5 z-50 md:left-10 md:right-10 md:top-7">
                <div className="mx-auto flex h-16 max-w-[1450px] items-center rounded-full border border-cyan-300/20 bg-[#07101d]/75 px-5 shadow-[0_0_50px_rgba(0,150,255,0.06)] backdrop-blur-xl md:px-7">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex shrink-0 items-center gap-4"
                    >
                        <span className="text-3xl font-bold tracking-[-0.08em]">
                            D<span className="text-cyan-300">P</span>
                        </span>

                        <span className="hidden h-6 w-px bg-white/20 sm:block" />

                        <span className="hidden text-sm text-white/80 md:block">
                            Deepanshu Kumar Pandit
                        </span>
                    </a>

                    {/* Navigation */}
                    <div className="mx-auto hidden items-center gap-8 lg:flex">
                        {[
                            ["HOME", "#home"],
                            ["ABOUT", "#about"],
                            ["PROJECTS", "#work"],
                            ["EXPERIENCE", "#experience"],
                            ["CONTACT", "#contact"],
                        ].map(([label, href], index) => (
                            <a
                                key={label}
                                href={href}
                                className={`relative text-[11px] tracking-[0.18em] transition-colors ${index === 0
                                    ? "text-cyan-300"
                                    : "text-white/65 hover:text-white"
                                    }`}
                            >
                                {label}

                                {index === 0 && (
                                    <span className="absolute -bottom-5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Social + theme */}
                    <div className="ml-auto flex items-center gap-4">
                        <a
                            href="https://github.com/Deepanshu779"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden text-white/80 transition-colors hover:text-cyan-300 sm:block"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/deepanshu-kumar-pandit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden text-white/80 transition-colors hover:text-cyan-300 sm:block"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </a>

                    </div>
                </div>
            </nav>

            {/* Main content */}
            <div className="relative z-20 mx-auto flex min-h-screen max-w-[1550px] items-center px-6 pb-20 pt-28 md:px-12 lg:px-16">
                <div className="grid w-full items-center lg:grid-cols-[0.78fr_1.22fr]">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        className="relative z-30"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <span className="text-sm tracking-[0.25em] text-white/70">
                                Hello! I’m
                            </span>

                            <span className="h-px w-20 bg-cyan-300" />
                        </div>

                        <h1 className="text-[clamp(3.8rem,6.6vw,7.2rem)] font-black uppercase leading-[0.86] tracking-[-0.055em]">
                            DEEPANSHU
                            <br />

                            <span className="text-cyan-300">
                                KUMAR
                            </span>

                            <br />

                            PANDIT
                        </h1>

                        <p className="mt-8 text-sm font-medium tracking-[0.38em] text-white/90 md:text-base">
                            AI / ML DEVELOPER
                        </p>

                        <div className="mt-6 h-[2px] w-36 bg-cyan-300" />

                        <p className="mt-7 max-w-[500px] text-base leading-8 text-white/60 md:text-lg">
                            I build practical AI, Machine Learning and
                            <br className="hidden md:block" />
                            Generative AI applications.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#work"
                                className="group flex h-14 items-center gap-8 rounded-full bg-cyan-300 px-7 font-semibold text-[#021018] shadow-[0_0_35px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-200"
                            >
                                View My Work

                                <ArrowUpRight
                                    size={20}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-14 items-center gap-5 rounded-full border border-cyan-300/35 bg-white/[0.02] px-7 text-white/85 transition-all hover:border-cyan-300 hover:bg-cyan-300/5"
                            >
                                Download Resume

                                <Download
                                    size={18}
                                    className="transition-transform group-hover:translate-y-1"
                                />
                            </a>
                        </div>

                        <div className="mt-8 flex gap-4 sm:hidden">
                            <a
                                href="https://github.com/Deepanshu779"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/15 p-3 text-white/70"
                            >
                                <GitHubIcon />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/deepanshu-kumar-pandit/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/15 p-3 text-white/70"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 1.1,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="relative mt-4 flex h-[440px] items-end justify-center sm:h-[560px] lg:-mt-2 lg:h-[760px]"
                    >
                        {/* Glow behind portrait */}
                        <div className="absolute bottom-[10%] right-[10%] h-[55%] w-[65%] rounded-full bg-cyan-400/10 blur-[110px]" />

                        {/* Large blue halo */}
                        <motion.div
                            animate={{
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[17%] right-[10%] h-[65%] w-[72%] rounded-full border border-cyan-300/15 bg-blue-500/[0.05] shadow-[0_0_100px_rgba(0,150,255,0.12)]"
                        />

                        {/* Orbiting point */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute bottom-[25%] right-[5%] h-[60%] w-[75%] rounded-[50%] border border-cyan-300/20"
                        >
                            <span className="absolute right-[8%] top-[6%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)]" />
                        </motion.div>

                        {/* Profile */}
                        <motion.img
                            src="/profile.png"
                            alt="Deepanshu Kumar Pandit"
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 h-[108%] w-[108%] object-contain object-bottom drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-[17%] z-40 hidden flex-col items-center gap-3 text-[9px] tracking-[0.28em] text-white/55 md:flex"
            >
                <span className="h-10 w-5 rounded-full border border-white/70 p-1">
                    <motion.span
                        animate={{ y: [0, 14, 0] }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                        }}
                        className="block h-2 w-2 rounded-full bg-white"
                    />
                </span>

                <span>SCROLL TO EXPLORE</span>

                <span className="h-14 w-px bg-white/40" />

                <ArrowDown size={13} />
            </motion.a>
        </section>
    );
}

export default Hero;
