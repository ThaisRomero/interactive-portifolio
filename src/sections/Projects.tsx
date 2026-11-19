import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
    X,
    CheckCircle2,
    ExternalLink
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

import type { Project } from '../data/projects'

export default function Projects() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null)

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
            className="relative py-28 scroll-mt-20"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Título da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <span className="text-secondary font-mono text-sm tracking-widest">

                        03 — MY PROJECTS

                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">

                        Projetos em destaque

                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                    <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto mt-6">

                        Transformando conhecimento em soluções reais,
                        explorando tecnologia, criatividade e inovação.

                    </p>

                </motion.div>

                {/* Grid de projetos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

                    {projects.map(project => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDetails={setSelectedProject}
                        />

                    ))}

                </div>

            </div>

            {/* Modal de detalhes */}
            <AnimatePresence>

                {selectedProject && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-100 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
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
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/40 bg-surface p-6 sm:p-10 shadow-2xl"
                        >

                            {/* Fechar modal */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                aria-label="Fechar detalhes"
                                autoFocus
                                className="absolute top-5 right-5 text-foreground/50 hover:text-secondary cursor-pointer transition-colors"
                            >

                                <X size={26} />

                            </button>

                            <span className="text-secondary font-mono text-xs tracking-widest">

                                PROJECT DETAILS

                            </span>

                            <h3
                                id="project-modal-title"
                                className="text-3xl md:text-4xl font-bold mt-4 mb-3 pr-8"
                            >

                                {selectedProject.title}

                            </h3>

                            <p className="text-primary mb-6">

                                {selectedProject.subtitle}

                            </p>

                            <p className="text-foreground/70 leading-relaxed mb-8">

                                {selectedProject.details}

                            </p>

                            {/* Funcionalidades */}
                            <h4 className="text-xl font-semibold mb-5">

                                Principais recursos

                            </h4>

                            <div className="space-y-4 mb-8">

                                {selectedProject.features.map(feature => (

                                    <div
                                        key={feature}
                                        className="flex items-start gap-3"
                                    >

                                        <CheckCircle2
                                            size={19}
                                            className="text-secondary shrink-0 mt-0.5"
                                        />

                                        <span className="text-foreground/75">

                                            {feature}

                                        </span>

                                    </div>

                                ))}

                            </div>

                            {/* Tecnologias */}
                            <h4 className="text-xl font-semibold mb-5">

                                Tecnologias utilizadas

                            </h4>

                            <div className="flex flex-wrap gap-2 mb-8">

                                {selectedProject.technologies.map(technology => (

                                    <span
                                        key={technology}
                                        className="rounded-md border border-primary/20 bg-primary/10 text-primary text-sm px-3 py-2"
                                    >

                                        {technology}

                                    </span>

                                ))}

                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4">

                                {selectedProject.github && (

                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 border border-primary/40 rounded-lg px-5 py-3 hover:bg-primary/10 transition-colors"
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
                                        className="flex items-center gap-3 bg-linear-to-r from-secondary to-primary text-background font-semibold rounded-lg px-5 py-3"
                                    >

                                        <ExternalLink size={20} />

                                        Demonstração

                                    </a>

                                )}

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    )
}