import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${scrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex flex-col text-zinc-100 relative group overflow-hidden">
                    <span className="text-2xl font-black tracking-tighter uppercase font-['Space_Grotesk'] leading-none">Ezedin</span>
                    <span className="text-[0.6rem] font-bold tracking-[0.3em] text-teal-400 mt-1">Engineer</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center bg-zinc-900/50 rounded-full px-6 py-2 border border-zinc-800/50 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-5 py-2 text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors group overflow-hidden"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute left-1/2 bottom-1 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-opacity"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a href="https://github.com/ezedin130" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
                        <Github size={20} strokeWidth={1.5} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-teal-400 hover:scale-110 transition-all">
                        <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-zinc-400 hover:text-white relative z-[60]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 w-full h-screen bg-[#050505] z-50 flex flex-col justify-center px-12"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl sm:text-6xl font-bold font-['Space_Grotesk'] text-zinc-400 hover:text-white py-4 border-b border-zinc-900 transition-colors uppercase tracking-tight"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
