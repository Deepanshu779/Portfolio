import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItem {
    label: string;
    href: string;
    id: string;
}

const navItems: NavItem[] = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "PROJECTS", href: "#work", id: "work" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "CREDENTIALS", href: "#credentials", id: "credentials" },
    { label: "CONTACT", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            if (totalScroll > 0) {
                setScrollProgress((currentScroll / totalScroll) * 100);
            }
            
            setScrolled(currentScroll > 40);

            // Determine active section
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPos = currentScroll + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on hash click
    const handleNavClick = () => {
        setMobileOpen(false);
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 z-[110] h-[2.5px] bg-transparent">
                <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Main Floating Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] px-4 pt-3 sm:px-6 md:px-8 transition-all duration-300">
                <nav
                    className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 ${
                        scrolled
                            ? "border border-cyan-400/25 bg-[#060c18]/85 shadow-[0_8px_32px_rgba(0,120,255,0.12)] backdrop-blur-xl"
                            : "border border-white/10 bg-[#060c18]/50 backdrop-blur-md"
                    }`}
                >
                    {/* Brand Logo */}
                    <a
                        href="#home"
                        className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/30 text-xs font-black tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-transform group-hover:scale-105">
                            DP
                        </span>
                        <span className="hidden sm:inline-block text-xs font-semibold tracking-wider text-slate-200">
                            DEEPANSHU
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className={`relative px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] transition-colors ${
                                        isActive
                                            ? "text-cyan-300 font-semibold"
                                            : "text-slate-300 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Action Buttons & Socials */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-3">
                            <a
                                href="https://github.com/Deepanshu779"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-cyan-300"
                            >
                                <FaGithub size={15} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/deepanshu-kumar-pandit/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-cyan-300"
                            >
                                <FaLinkedin size={15} />
                            </a>
                        </div>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        >
                            <Download size={13} />
                            <span>Resume</span>
                        </a>

                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-1 rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition-all hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                            <span>Let's Talk</span>
                            <ArrowUpRight size={13} />
                        </a>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle navigation menu"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Drawer Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-20 z-[99] rounded-2xl border border-cyan-400/30 bg-[#070e1c]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl lg:hidden"
                    >
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm tracking-wider transition-colors ${
                                            isActive
                                                ? "bg-cyan-400/15 font-bold text-cyan-300"
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        {isActive && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                                        )}
                                    </a>
                                );
                            })}

                            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleNavClick}
                                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-xs font-bold text-cyan-300"
                                >
                                    <Download size={15} />
                                    Download Resume
                                </a>

                                <div className="flex items-center justify-around pt-2">
                                    <a
                                        href="https://github.com/Deepanshu779"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
                                    >
                                        <FaGithub size={15} />
                                        GitHub
                                    </a>
                                    <span className="text-white/20">•</span>
                                    <a
                                        href="https://www.linkedin.com/in/deepanshu-kumar-pandit/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
                                    >
                                        <FaLinkedin size={15} />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}