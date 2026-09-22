import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-[#030303] border-t border-zinc-900/50 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-[5rem] lg:text-[8rem] font-black font-['Space_Grotesk'] text-zinc-100 tracking-tighter leading-[0.85] mb-8 mix-blend-lighten">
                        Let's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Collaborate.</span>
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl font-light max-w-md mb-12">
                        Looking to scale a product or engineer a new frontier? Reach out and let's craft exceptional software together.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:ezedinawol130@gmail.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/50 transition-all w-max pr-8">
                            <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                <Mail size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Email</p>
                                <p className="text-zinc-200 text-lg font-medium flex items-center gap-2">
                                    ezedinawol130@gmail.com <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </p>
                            </div>
                        </a>

                        <a href="tel:+251973544920" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/50 transition-all w-max pr-8">
                            <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <Phone size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                                <p className="text-zinc-200 text-lg font-medium flex items-center gap-2">
                                    +251 973 544 920 <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <form className="p-8 md:p-12 bg-zinc-950 border border-zinc-800/50 rounded-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none"></div>

                        <div className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 text-zinc-100 placeholder-transparent focus:outline-none focus:border-teal-400 transition-colors" />
                                    <label htmlFor="name" className="absolute left-0 -top-3 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:text-xs peer-focus:font-bold peer-focus:text-teal-400">Full Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 text-zinc-100 placeholder-transparent focus:outline-none focus:border-teal-400 transition-colors" />
                                    <label htmlFor="email" className="absolute left-0 -top-3 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:text-xs peer-focus:font-bold peer-focus:text-teal-400">Email Address</label>
                                </div>
                            </div>

                            <div className="relative pt-4">
                                <textarea id="message" rows="4" placeholder=" " className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 text-zinc-100 placeholder-transparent focus:outline-none focus:border-teal-400 transition-colors resize-none"></textarea>
                                <label htmlFor="message" className="absolute left-0 top-0 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-xs peer-focus:font-bold peer-focus:text-teal-400">Project Details</label>
                            </div>

                            <MagneticButton className="inline-block mt-4">
                                <button type="submit" className="group relative w-full sm:w-auto px-12 py-5 bg-zinc-100 text-zinc-950 font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden flex items-center justify-center gap-3">
                                    <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-zinc-950">
                                        Send Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </MagneticButton>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
