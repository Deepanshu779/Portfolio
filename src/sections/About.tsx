import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden bg-[#080b12] px-6 py-32 md:px-10 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex items-center justify-between border-b border-white/10 pb-6"
                >
                    <span className="text-xs tracking-[0.3em] text-cyan-300">
                        01 / ABOUT
                    </span>

                    <ArrowDownRight
                        size={18}
                        className="text-white/30"
                    />
                </motion.div>

                <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Main introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="mb-6 text-sm tracking-[0.2em] text-white/40">
                            WHO I AM
                        </p>

                        <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
                            Building ideas
                            <br />
                            into{" "}
                            <span className="text-cyan-300/80">
                                intelligent
                            </span>{" "}
                            experiences.
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="flex flex-col justify-end"
                    >
                        <p className="text-base leading-8 text-white/55 md:text-lg">
                            I'm Deepanshu Kumar Pandit, an engineering student
                            focused on Artificial Intelligence, Machine Learning,
                            and Generative AI.
                        </p>

                        <p className="mt-6 text-base leading-8 text-white/40 md:text-lg">
                            I enjoy turning ideas into useful products — from
                            AI-powered applications and intelligent assistants to
                            practical software solutions.
                        </p>

                        <a
                            href="#work"
                            className="group mt-10 flex w-fit items-center gap-3 text-xs tracking-[0.2em] text-white/70 transition-colors hover:text-cyan-300"
                        >
                            DISCOVER MY WORK

                            <ArrowDownRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-28 grid border-t border-white/10 pt-8 sm:grid-cols-3"
                >
                    <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0">
                        <p className="text-3xl font-light">AI/ML</p>
                        <p className="mt-2 text-xs tracking-[0.2em] text-white/35">
                            CORE FOCUS
                        </p>
                    </div>

                    <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
                        <p className="text-3xl font-light">GenAI</p>
                        <p className="mt-2 text-xs tracking-[0.2em] text-white/35">
                            SPECIALIZATION
                        </p>
                    </div>

                    <div className="pt-6 sm:px-8 sm:pt-0">
                        <p className="text-3xl font-light">Builder</p>
                        <p className="mt-2 text-xs tracking-[0.2em] text-white/35">
                            MINDSET
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;