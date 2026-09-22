import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <div className="text-center md:text-left">
                    <a href="#" className="text-2xl font-bold tracking-tighter text-slate-50 relative group inline-block mb-2">
                        Ezedin<span className="text-teal-400">.</span>
                    </a>
                    <p className="text-slate-400 text-sm max-w-sm">
                        Backend-leaning Full-Stack Developer specializing in secure, scalable, and exceptional digital experiences.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <div className="flex gap-6 mb-4">
                        <a href="https://github.com/ezedin130" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-teal-500 hover:text-slate-900 border border-slate-800">
                            <Github size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-teal-500 hover:text-slate-900 border border-slate-800">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:ezedinawol130@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-teal-500 hover:text-slate-900 border border-slate-800">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Ezedin. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
