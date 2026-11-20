
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

import {
    X,
    CheckCircle2,
    ExternalLink
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useTheme } from '../hooks/useTheme'

import type { Project } from '../data/projects'

export default function Projects() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null)

    const { theme } = useTheme()

    const isLight = theme === 'light'

    useEffect(() => {

        if (!selectedProject) return

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        function handleEscape(event: KeyboardEvent) {

            if (event.key === 'Escape') {
                setSelectedProject(null)
            }

        }

        window.addEventListener('keydown', handleEscape)

        return () => {

            document.body.style.overflow = previousOverflow

            window.removeEventListener('keydown', handleEscape)

        }

    }, [selectedProject])

    return (

        <section
            id="projects"
            className="relative py-16 sm:py-20 lg:py-28 scroll-mt-20"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Título da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >

                    <span className="text-secondary font-mono text-sm tracking-widest">

                        03 — MY PROJECTS

                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">

                        Projetos em destaque

                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                    <p className={`text-base md:text-lg max-w-2xl mx-auto mt-5 sm:mt-6 ${
                        isLight
                            ? 'text-foreground/80'
                            : 'text-foreground/60'
                    }`}>

                        Transformando conhecimento em soluções reais,
                        explorando tecnologia, criatividade e inovação.

                    </p>

                </motion.div>

                {/* Grid de projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:max-lg:gap-5">

                    {projects.map(project => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDetails={setSelectedProject}
                        />

                    ))}

                </div>

            </div>

            {/* Modal renderizado diretamente no body */}
            {createPortal(

                <AnimatePresence>

                    {selectedProject && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className={`fixed inset-0 z-[9999] backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 ${
                                isLight
                                    ? 'bg-slate-900/60'
                                    : 'bg-black/75'
                            }`}
                        >

                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="project-modal-title"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.25 }}
                                onClick={event => event.stopPropagation()}
                                className={`relative flex flex-col w-full max-w-3xl max-h-[calc(100dvh-24px)] sm:max-h-[90dvh] overflow-hidden rounded-2xl border bg-surface ${
                                    isLight
                                        ? 'border-primary/25 shadow-[0_20px_70px_rgba(15,23,42,0.25)]'
                                        : 'border-primary/40 shadow-2xl'
                                }`}
                            >

                                {/* Cabeçalho fixo */}
                                <div className={`relative shrink-0 flex items-center justify-between gap-4 px-5 sm:px-10 py-3 sm:py-4 border-b bg-surface ${
                                    isLight
                                        ? 'border-border/15'
                                        : 'border-white/10'
                                }`}>

                                    <span className="text-secondary font-mono text-xs tracking-widest">

                                        PROJECT DETAILS

                                    </span>

                                    {/* Fechar modal */}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(null)}
                                        aria-label="Fechar detalhes"
                                        title="Fechar detalhes"
                                        autoFocus
                                        className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border cursor-pointer transition-colors ${
                                            isLight
                                                ? 'border-border/20 bg-background/60 text-foreground/70 hover:text-primary hover:bg-primary/10'
                                                : 'border-white/10 bg-background/50 text-foreground/70 hover:text-secondary hover:border-secondary/40'
                                        }`}
                                    >

                                        <X size={24} />

                                    </button>

                                </div>

                                {/* Conteúdo com rolagem independente */}
                                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 sm:px-10 pt-5 sm:pt-8 pb-6 sm:pb-10">

                                    {/* Título */}
                                    <h3
                                        id="project-modal-title"
                                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                                    >

                                        {selectedProject.title}

                                    </h3>

                                    <p className={`text-sm sm:text-base text-primary mb-5 sm:mb-6 ${
                                        isLight ? 'font-medium' : ''
                                    }`}>

                                        {selectedProject.subtitle}

                                    </p>

                                    {/* Descrição */}
                                    <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${
                                        isLight
                                            ? 'text-foreground/85'
                                            : 'text-foreground/70'
                                    }`}>

                                        {selectedProject.details}

                                    </p>

                                    {/* Funcionalidades */}
                                    <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">

                                        Principais recursos

                                    </h4>

                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">

                                        {selectedProject.features.map(feature => (

                                            <div
                                                key={feature}
                                                className={`flex items-start gap-3 ${
                                                    isLight
                                                        ? 'rounded-lg border border-border/10 bg-background/35 px-3 sm:px-4 py-2.5 sm:py-3'
                                                        : ''
                                                }`}
                                            >

                                                <CheckCircle2
                                                    size={19}
                                                    className="text-secondary shrink-0 mt-0.5"
                                                />

                                                <span className={`text-sm sm:text-base ${
                                                    isLight
                                                        ? 'text-foreground/85'
                                                        : 'text-foreground/75'
                                                }`}>

                                                    {feature}

                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                    {/* Tecnologias */}
                                    <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">

                                        Tecnologias utilizadas

                                    </h4>

                                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">

                                        {selectedProject.technologies.map(technology => (

                                            <span
                                                key={technology}
                                                className={`rounded-md border text-primary text-xs sm:text-sm px-3 py-1.5 sm:py-2 ${
                                                    isLight
                                                        ? 'border-primary/25 bg-primary/8 font-medium'
                                                        : 'border-primary/20 bg-primary/10'
                                                }`}
                                            >

                                                {technology}

                                            </span>

                                        ))}

                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 sm:gap-4">

                                        {selectedProject.github && (

                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-center gap-3 border rounded-lg px-4 sm:px-5 py-3 text-sm sm:text-base transition-colors ${
                                                    isLight
                                                        ? 'border-primary/30 bg-primary/5 text-foreground hover:bg-primary/15 font-medium'
                                                        : 'border-primary/40 hover:bg-primary/10'
                                                }`}
                                            >

                                                <FaGithub size={20} />

                                                Código-fonte

                                            </a>

                                        )}

                                        {selectedProject.demo && (

                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-center gap-3 font-semibold rounded-lg px-4 sm:px-5 py-3 text-sm sm:text-base ${
                                                    isLight
                                                        ? 'bg-linear-to-r from-cyan-700 to-violet-700 text-white'
                                                        : 'bg-linear-to-r from-secondary to-primary text-background'
                                                }`}
                                            >

                                                <ExternalLink size={20} />

                                                Demonstração

                                            </a>

                                        )}

                                    </div>

                                </div>

                            </motion.div>

                        </motion.div>

                    )}

                </AnimatePresence>,

                document.body

            )}

        </section>

    )
}
