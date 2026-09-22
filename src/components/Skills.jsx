import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Core",
            skills: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs", "JWT"],
            glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
            accent: "text-emerald-400"
        },
        {
            title: "Frontend & Mobile",
            skills: ["React.js", "Flutter", "Dart", "HTML5", "CSS3", "JavaScript", "State Mgmt"],
            glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
            accent: "text-sky-400"
        },
        {
            title: "Architecture & Tools",
            skills: ["MySQL", "MongoDB", "Git Workflow", "CI/CD", "Postman", "System Testing"],
            glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
            accent: "text-fuchsia-400"
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 overflow-hidden">
            {/* Decorative ultra-subtle pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-4">Technical Proficiency</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Space_Grotesk'] text-zinc-100 tracking-tighter">
                        An Elite Arsenal.
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className={`group p-10 rounded-3xl bg-zinc-950 border border-zinc-800/60 transition-all duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-2 relative overflow-hidden ${category.glow}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h4 className={`text-2xl font-bold font-['Space_Grotesk'] mb-8 relative z-10 ${category.accent}`}>
                                {category.title}
                            </h4>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        key={skillIdx}
                                        className="px-5 py-2.5 bg-[#030303] text-zinc-300 border border-zinc-800/80 rounded-xl text-sm font-medium transition-colors hover:text-white hover:border-zinc-500 shadow-xl cursor-crosshair"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
