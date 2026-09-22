import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        type: "Freelance",
        title: "Software Support",
        company: "Amoudi Business Group",
        date: "Aug 2026 - Present",
        desc: "Providing continuous technical assistance and overseeing system performance to ensure optimal operational reliability across critical infrastructures.",
    },
    {
        type: "Contract",
        title: "Digital Marketer & Web Designer",
        company: "Liv Estetik",
        date: "Apr 2026 - May 2026",
        desc: "Designed and launched the official website (livestetikaddis.com) while orchestrating targeted digital campaigns to exponentially elevate the brand's digital footprint.",
    },
    {
        type: "Contract",
        title: "Mobile App Developer",
        company: "UnlockGen",
        date: "2024 - 2025",
        desc: "Architected a high-fidelity Online Travel Agency (OTA) flight booking application. Delivered a pixel-perfect, highly responsive reservation pipeline with robust third-party API integration.",
    },
    {
        type: "Internship",
        title: "Software Developer Intern",
        company: "Hijra Bank",
        date: "May 2025 - Jul 2025",
        desc: "Migrated legacy infrastructure to scalable backend services handling core KYC workflows. Led vigorous debugging operations to optimize execution times across distributed systems.",
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 bg-[#030303] border-t border-zinc-900 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent transform -translate-x-1/2 hidden md:block"></div>

            <div className="max-w-[70rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-4">Timeline</h2>
                    <h3 className="text-4xl md:text-6xl font-black font-['Space_Grotesk'] text-zinc-100 tracking-tighter">
                        Career Trajectory.
                    </h3>
                </motion.div>

                <div className="space-y-12 md:space-y-0 relative">
                    {experiences.map((exp, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className="relative md:h-48 md:mb-16 last:mb-0 group">
                                {/* Desktop layout */}
                                <div className={`hidden md:flex items-center w-full ${isEven ? 'justify-start' : 'justify-end'}`}>

                                    {/* Glowing Node on the line */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-teal-400 bg-zinc-950 z-20 group-hover:bg-teal-400 group-hover:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>

                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className={`w-[45%] ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                                    >
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{exp.date}</span>
                                        <h4 className="text-2xl font-bold font-['Space_Grotesk'] text-zinc-100 mt-2">{exp.title}</h4>
                                        <p className="text-teal-400 font-medium text-sm mb-4">{exp.company}</p>
                                        <p className="text-zinc-400 font-light text-sm leading-relaxed">{exp.desc}</p>
                                    </motion.div>
                                </div>

                                {/* Mobile layout */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="md:hidden relative pl-8 border-l border-zinc-800"
                                >
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{exp.date}</span>
                                    <h4 className="text-xl font-bold font-['Space_Grotesk'] text-zinc-100 mt-1">{exp.title}</h4>
                                    <p className="text-teal-400 font-medium text-sm mb-3">{exp.company}</p>
                                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{exp.desc}</p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
