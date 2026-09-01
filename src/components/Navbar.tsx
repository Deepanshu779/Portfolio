import { motion } from "framer-motion";

const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
];

function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed left-0 top-0 z-[100] w-full px-6 py-6 md:px-10 lg:px-12"
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-sm font-semibold tracking-[0.2em] text-white"
                >
                    DP
                </a>

                {/* Center identity */}
                <a
                    href="https://www.linkedin.com/in/deepanshu-kumar-pandit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden text-[10px] tracking-[0.15em] text-white/30 transition-colors hover:text-white/70 md:block"
                >
                    LINKEDIN.COM/IN/DEEPANSHU-KUMAR-PANDIT
                </a>

                {/* Navigation */}
                <div className="flex items-center gap-5 md:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[10px] tracking-[0.16em] text-white/55 transition-colors hover:text-cyan-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}

export default Navbar;