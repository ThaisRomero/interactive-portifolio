import { useState } from 'react'
import { motion } from 'framer-motion'

import {
    ArrowUpRight,
    ExternalLink,
    FolderCode,
    ImageOff,
    Star
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

import type { Project } from '../data/projects'

interface ProjectCardProps {
    project: Project
    onDetails: (project: Project) => void
}

const statusConfig = {
    completed: {
        label: 'Concluído',
        color: 'text-emerald-400',
        background: 'bg-emerald-400/10',
        dot: 'bg-emerald-400'
    },
    finishing: {
        label: 'Em finalização',
        color: 'text-yellow-400',
        background: 'bg-yellow-400/10',
        dot: 'bg-yellow-400'
    },
    development: {
        label: 'Em desenvolvimento',
        color: 'text-secondary',
        background: 'bg-secondary/10',
        dot: 'bg-secondary'
    }
}

export default function ProjectCard({
    project,
    onDetails
}: ProjectCardProps) {

    const [imageError, setImageError] = useState(false)

    const status = statusConfig[project.status]

    return (

        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`
                group relative overflow-hidden rounded-2xl
                border bg-surface/60 backdrop-blur-md
                transition-colors hover:border-secondary/50
                ${project.featured
                    ? 'border-primary/40 lg:col-span-2 lg:grid lg:grid-cols-2'
                    : 'border-white/10 flex flex-col'}
            `}
        >

            {/* Imagem do projeto */}
            <div className="relative overflow-hidden min-h-64 bg-background">

                {!imageError ? (

                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onError={() => setImageError(true)}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                ) : (

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linear-to-br from-primary/10 to-secondary/10">

                        <FolderCode
                            size={64}
                            strokeWidth={1}
                            className="text-secondary/50"
                        />

                        <span className="font-mono text-sm text-foreground/60">
                            {project.title}
                        </span>

                        <ImageOff
                            size={18}
                            className="text-foreground/30"
                        />

                    </div>

                )}

                <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent pointer-events-none" />

                {project.featured && (

                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-background/80 border border-primary/40 px-4 py-2 text-xs text-primary backdrop-blur-md">

                        <Star size={14} />

                        Projeto em destaque

                    </div>

                )}

            </div>

            {/* Informações */}
            <div className="flex flex-col flex-1 p-6 sm:p-8">

                {/* Status */}
                <div className={`
                    self-start inline-flex items-center gap-2
                    rounded-full px-3 py-1.5 text-xs mb-5
                    ${status.background} ${status.color}
                `}>

                    <span className={`
                        w-2 h-2 rounded-full ${status.dot}
                    `} />

                    {status.label}

                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">

                    {project.title}

                </h3>

                <p className="text-primary text-sm mb-4">

                    {project.subtitle}

                </p>

                <p className="text-foreground/60 leading-relaxed mb-6">

                    {project.description}

                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-8">

                    {project.technologies.map(technology => (

                        <span
                            key={technology}
                            className="rounded-md border border-primary/20 bg-primary/10 text-primary text-xs px-3 py-1.5"
                        >

                            {technology}

                        </span>

                    ))}

                </div>

                {/* Ações */}
                <div className="flex flex-wrap items-center gap-5 mt-auto">

                    <button
                        onClick={() => onDetails(project)}
                        className="flex items-center gap-2 text-secondary text-sm font-medium cursor-pointer hover:text-foreground transition-colors"
                    >

                        Ver detalhes

                        <ArrowUpRight size={17} />

                    </button>

                    {project.github && (

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-secondary transition-colors"
                        >

                            <FaGithub size={19} />

                            GitHub

                        </a>

                    )}

                    {project.demo && (

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-secondary transition-colors"
                        >

                            <ExternalLink size={18} />

                            Demonstração

                        </a>

                    )}

                </div>

            </div>

        </motion.article>

    )
}