import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, Download, Sparkles } from "lucide-react";

const roles = ["AI / ML DEVELOPER", "GENERATIVE AI BUILDER", "FULL-STACK DEVELOPER"];

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#070707] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12">
      {/* Quiet editorial grid + ambient light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "linear-gradient(to bottom, black, transparent 85%)" }} />
        <div className="absolute -right-32 top-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-500/15 blur-[130px] sm:right-[4%]" />
        <div className="absolute -bottom-40 left-[8%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.09] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070707] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[1380px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
        <div className="relative z-10">
          <motion.div {...rise(0)} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/75 backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/70" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
              Building useful things with AI
            </span>
            <span className="text-xs tracking-wide text-white/35">BASED IN INDIA · 2024—2028</span>
          </motion.div>

          <motion.p {...rise(0.06)} className="mb-3 text-xs font-medium uppercase tracking-[.36em] text-white/45">Hello, I’m</motion.p>
          <motion.h1 {...rise(0.12)} className="max-w-4xl text-[clamp(3.7rem,9.3vw,8.8rem)] font-semibold uppercase leading-[.78] tracking-[-.085em]">
            Deepanshu
            <span className="mt-2 block bg-gradient-to-r from-white via-white/80 to-white/35 bg-clip-text pb-2 text-transparent">Kumar</span>
            <span className="mt-2 block bg-gradient-to-r from-white via-white/80 to-white/35 bg-clip-text pb-3 text-transparent">Pandit<span className="text-violet-300">.</span></span>
          </motion.h1>

          <motion.div {...rise(0.2)} className="mt-8 flex min-h-7 items-center gap-3">
            <span className="h-px w-8 bg-violet-300/80" />
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p key={roleIndex} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }} className="text-xs font-semibold tracking-[.23em] text-violet-200 sm:text-sm">
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p {...rise(0.26)} className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            I’m a Computer Science (AI) student exploring intelligent systems and building thoughtful digital experiences—from AI-powered tools to full-stack products.
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-200">
              Explore my work <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/35 hover:bg-white/[0.06] hover:text-white">
              <Download size={15} /> Resume
            </a>
          </motion.div>

          <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/45">
            <a href="https://github.com/Deepanshu779" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Code2 size={15} /> GitHub <ArrowUpRight size={12} /></a>
            <a href="https://www.linkedin.com/in/deepanshu-kumar-pandit/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><ArrowUpRight size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-2"><Code2 size={15} /> React · Python · AI/ML</span>
          </motion.div>
        </div>

        {/* Portrait as an editorial cover, not a dashboard widget */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.12, ease }} className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute inset-[8%] rounded-[48%] bg-violet-400/15 blur-[90px]" />
          <div className="relative aspect-[.91/1] overflow-hidden rounded-[48%_48%_12px_12px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-[#15131b] to-[#09090b]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(167,139,250,.18),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#070707] via-[#070707]/55 to-transparent" />
            <motion.img src="/profile.png" alt="Portrait of Deepanshu Kumar Pandit" loading="eager" fetchPriority="high" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,.55)]" />
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[.18em] text-white/65 backdrop-blur-md sm:left-7 sm:top-7">
              <Sparkles size={12} className="text-violet-200" /> Curious by default
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <div><p className="text-[10px] uppercase tracking-[.24em] text-white/45">Currently</p><p className="mt-1 text-sm font-medium text-white/90">Learning. Building. Iterating.</p></div>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/25 text-white/80 backdrop-blur"><ArrowDownRight size={18} /></span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -right-2 -z-10 h-28 w-28 rounded-full border border-violet-200/20 sm:-right-6 sm:h-40 sm:w-40" />
          <div className="absolute -left-3 top-[44%] hidden -translate-x-full items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/30 xl:flex"><span className="h-px w-10 bg-white/20" />Curiosity → Creation</div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/35 transition hover:text-white/75 md:flex">
        Scroll to explore <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </a>
    </section>
  );
}

export default Hero;
