import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity1 = useTransform(scrollY, [0, 700], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-[#030303]">
            {/* Abstract Animated Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none"
            />

            <motion.div style={{ y: y1, opacity: opacity1 }} className="max-w-[90rem] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-8 flex flex-col items-start text-left">
                    <div className="overflow-hidden mb-6">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-bold tracking-widest uppercase shadow-2xl">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                                Software Architect & Designer
                            </span>
                        </motion.div>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-black tracking-tighter mb-8 text-zinc-100 font-['Space_Grotesk'] mix-blend-lighten">
                        <motion.span
                            initial={{ opacity: 0, y: 50, rotateX: 45 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="block"
                        >
                            Building
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 50, rotateX: 45 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-500 pb-2"
                        >
                            Secure Systems.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light"
                    >
                        Bridging the gap between bulletproof backend architectures and pixel-perfect mobile applications. Experience engineered for trust and uncompromising performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                    >
                        <MagneticButton>
                            <a href="#projects" className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-zinc-100 text-zinc-950 text-sm font-bold uppercase tracking-wider rounded-full overflow-hidden transition-transform">
                                <div className="absolute inset-0 bg-teal-400 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-zinc-950">
                                    Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a
                                href="https://drive.google.com/file/d/1DPCR0iqAbXp2-JfBifbw5ubRbc9HPWzr/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-transparent text-zinc-100 text-sm font-bold uppercase tracking-wider rounded-full border border-zinc-800 hover:border-teal-500/50 overflow-hidden transition-colors"
                            >
                                <div className="absolute inset-0 bg-zinc-900/50 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-teal-400 transition-colors">
                                    <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                                    View Resume
                                </span>
                            </a>
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Abstract 3D/Visual space on Desktop right side */}
                <div className="hidden lg:flex lg:col-span-4 justify-end relative h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="relative w-full aspect-square max-w-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute inset-4 border border-zinc-800/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-8 border border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-zinc-800 font-['Space_Grotesk'] font-black text-9xl opacity-50 tracking-tighter mix-blend-screen">E.</span>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
