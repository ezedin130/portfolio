import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, Smartphone, LayoutDashboard, DatabaseZap } from 'lucide-react';

const projects = [
    {
        title: 'Online Travel Agency App',
        company: 'UnlockGen',
        description: 'Comprehensive global flight reservation mobile application featuring a premium booking pipeline and real-time API integrations for seamless travel experiences.',
        tags: ['Mobile Dev', 'API Architecture', 'UI/UX'],
        icon: <Smartphone strokeWidth={1.5} size={32} />,
        color: 'from-orange-500/20 to-rose-500/20',
        span: 'col-span-1 lg:col-span-2 lg:row-span-2 min-h-[400px]',
        border: 'border-rose-500/20 hover:border-rose-500/50'
    },
    {
        title: 'Payroll Management System',
        description: 'Robust Spring Boot backend managing sensitive employee records, automated salary distributions, and strict role-based access controls.',
        tags: ['Spring Boot', 'RBAC', 'MySQL', 'Secure API'],
        icon: <Server strokeWidth={1.5} size={28} />,
        color: 'from-blue-500/20 to-cyan-500/20',
        span: 'col-span-1',
        border: 'border-cyan-500/20 hover:border-cyan-500/50'
    },
    {
        title: 'Birana',
        description: 'Bilingual mobile e-commerce platform bridging the gap for Ethiopian book readers with intuitive browsing and localized purchasing workflows.',
        tags: ['Flutter', 'Firebase', 'E-Commerce'],
        icon: <LayoutDashboard strokeWidth={1.5} size={28} />,
        color: 'from-emerald-500/20 to-teal-500/20',
        span: 'col-span-1',
        border: 'border-teal-500/20 hover:border-teal-500/50'
    },
    {
        title: 'E-Commerce Backend Engine',
        description: 'Expansive platform orchestrating high-volume product catalogs and secure order processing state machines.',
        tags: ['Node.js', 'Scaling', 'JWT'],
        icon: <DatabaseZap strokeWidth={1.5} size={28} />,
        color: 'from-indigo-500/20 to-violet-500/20',
        span: 'col-span-1 lg:col-span-2',
        border: 'border-indigo-500/20 hover:border-indigo-500/50'
    },
    {
        title: 'MindMate',
        description: 'A beautifully crafted mental health companion application guiding users through stress management and mindfulness routines.',
        tags: ['Dart', 'State', 'Wellness UX'],
        icon: <Smartphone strokeWidth={1.5} size={28} />,
        color: 'from-fuchsia-500/20 to-pink-500/20',
        span: 'col-span-1',
        border: 'border-fuchsia-500/20 hover:border-fuchsia-500/50'
    },
    {
        title: 'AIdFlow',
        description: 'Enterprise dashboard streamlining intricate workflows and optimizing core organizational efficiency.',
        tags: ['Enterprise', 'Automation'],
        icon: <Code2 strokeWidth={1.5} size={28} />,
        color: 'from-sky-500/20 to-blue-500/20',
        span: 'col-span-1',
        border: 'border-sky-500/20 hover:border-sky-500/50'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 relative z-10 bg-[#030303]">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-6xl font-black font-['Space_Grotesk'] text-zinc-100 tracking-tighter">
                            Engineering the <span className="text-zinc-600">Future.</span>
                        </h3>
                    </motion.div>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`group bento-card p-8 flex flex-col justify-between ${project.border} ${project.span}`}
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} blur-[80px] -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-zinc-950/50 backdrop-blur-sm rounded-2xl text-zinc-300 border border-zinc-800/50 group-hover:bg-zinc-900 group-hover:scale-110 transition-all duration-500 ease-[0.22,1,0.36,1]">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="#" className="p-2 border border-zinc-800 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1">
                                            <Github size={18} />
                                        </a>
                                        <a href="#" className="p-2 border border-zinc-800 rounded-full hover:bg-teal-900/30 hover:border-teal-500/50 text-zinc-400 hover:text-teal-400 transition-all transform hover:-translate-y-1 hover:rotate-45">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                {project.company && (
                                    <p className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">{project.company}</p>
                                )}
                                <h4 className="text-2xl lg:text-3xl font-bold font-['Space_Grotesk'] text-zinc-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-100 group-hover:to-zinc-500 transition-all">
                                    {project.title}
                                </h4>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="text-[10px] font-bold text-zinc-300 bg-zinc-800/80 uppercase tracking-wider px-3 py-1.5 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
