import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

    return (
        <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a] border-t border-zinc-900/50">

            {/* Background Kinetic Typography */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-[0.02] flex flex-col gap-4">
                <motion.div style={{ x: x1 }} className="text-[15rem] font-black font-['Space_Grotesk'] whitespace-nowrap leading-none">
                    PERFORMANCE DEPENDABILITY
                </motion.div>
                <motion.div className="text-[15rem] font-black font-['Space_Grotesk'] whitespace-nowrap leading-none text-transparent stroke-text" style={{ WebkitTextStroke: '2px white', color: 'transparent', x: x2 }}>
                    ARCHITECTURE SECURITY
                </motion.div>
            </div>

            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:col-span-5"
                >
                    <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-4">Origin Story</h2>
                    <h3 className="text-4xl md:text-6xl font-black font-['Space_Grotesk'] text-zinc-100 tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-zinc-100 to-zinc-600">
                        Driven by complex problems.
                    </h3>
                    <div className="space-y-6 text-zinc-400 font-light text-lg">
                        <p>
                            My engineering journey is driven by an obsessive commitment to <strong className="text-zinc-200 font-medium">uncompromising reliability</strong> and <strong className="text-zinc-200 font-medium">secure data handling</strong>.
                        </p>
                        <p>
                            I specialize in bridging the technical gap between robust backend structures and seamless front-end experiences. From migrating massive legacy infrastructure at Hijra Bank to orchestrating intuitive e-commerce interfaces, I ensure architecture that scales flawlessly.
                        </p>
                    </div>
                </motion.div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bento-card p-8 border-t-0 border-l-0 bg-gradient-to-br from-zinc-900/80 to-zinc-950"
                    >
                        <h4 className="text-6xl font-black font-['Space_Grotesk'] text-teal-400 mb-2">3.64</h4>
                        <p className="text-zinc-300 font-medium mb-1">BSc in Computer Science</p>
                        <p className="text-zinc-500 text-sm">Wollo University, rigorous foundation in algorithmic thinking and systems.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bento-card p-8 bg-zinc-900/30 flex flex-col justify-center"
                    >
                        <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300 mb-6">
                            " "
                        </div>
                        <p className="italic text-zinc-400 text-sm font-light leading-relaxed">
                            "Building the right thing requires ensuring security, compliance, and undeniable performance behind the scenes."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bento-card p-8 sm:col-span-2 overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h4 className="text-lg font-bold text-zinc-200 mb-4 relative z-10">Bilingual Proficiency</h4>
                        <div className="flex gap-4 relative z-10 w-full overflow-hidden">
                            <div className="flex-1 p-4 bg-zinc-950 rounded-xl border border-zinc-800/50">
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Native</p>
                                <p className="font-bold text-zinc-200">Amharic</p>
                            </div>
                            <div className="flex-1 p-4 bg-zinc-950 rounded-xl border border-zinc-800/50">
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Professional</p>
                                <p className="font-bold text-zinc-200">English</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
