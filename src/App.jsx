import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/layout/Footer'

function App() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-teal-500/30 font-sans relative">
            {/* Global abstract background elements */}
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a]"></div>

            <Navbar />

            <main className="flex flex-col w-full">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default App
