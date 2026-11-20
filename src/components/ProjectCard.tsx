
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

import { useTheme } from '../hooks/useTheme'

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
        dot: 'bg-emerald-400',
        lightColor: 'text-emerald-700',
        lightBackground: 'bg-emerald-500/10',
        lightDot: 'bg-emerald-600'
    },
    finishing: {
        label: 'Em finalização',
        color: 'text-yellow-400',
        background: 'bg-yellow-400/10',
        dot: 'bg-yellow-400',
        lightColor: 'text-amber-700',
        lightBackground: 'bg-amber-500/15',
        lightDot: 'bg-amber-500'
    },
    development: {
        label: 'Em desenvolvimento',
        color: 'text-secondary',
        background: 'bg-secondary/10',
        dot: 'bg-secondary',
        lightColor: 'text-secondary',
        lightBackground: 'bg-secondary/10',
        lightDot: 'bg-secondary'
    }
}

export default function ProjectCard({
    project,
    onDetails
}: ProjectCardProps) {

    const [imageError, setImageError] = useState(false)

    const { theme } = useTheme()

    const isLight = theme === 'light'

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
                border backdrop-blur-md min-w-0
                transition-colors hover:border-secondary/50
                ${isLight
                    ? 'bg-surface/95 shadow-[0_8px_25px_rgba(15,23,42,0.08)]'
                    : 'bg-surface/60'}
                ${project.featured
                    ? 'border-primary/40 md:col-span-2 lg:grid lg:grid-cols-2'
                    : isLight
                        ? 'border-border/20 flex flex-col'
                        : 'border-white/10 flex flex-col'}
            `}
        >

            {/* Imagem do projeto */}
            <div className={`relative overflow-hidden bg-[#090B14] ${
                project.featured
                    ? 'min-h-48 sm:min-h-56 md:min-h-72 lg:min-h-64'
                    : 'min-h-48 sm:min-h-56 md:min-h-48 lg:min-h-64'
            }`}>

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
                            className="text-cyan-400/50"
                        />

                        <span className="font-mono text-sm text-slate-300">
                            {project.title}
                        </span>

                        <ImageOff
                            size={18}
                            className="text-slate-500"
                        />

                    </div>

                )}

                {!isLight && (

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

                )}

                {project.featured && (

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 rounded-full bg-[#090B14]/80 border border-violet-500/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-violet-400 backdrop-blur-md">

                        <Star size={14} />

                        Projeto em destaque

                    </div>

                )}

            </div>

            {/* Informações */}
            <div className="flex flex-col flex-1 min-w-0 p-5 sm:p-6 md:p-5 lg:p-8">

                {/* Status */}
                <div className={`
                    self-start inline-flex items-center gap-2
                    rounded-full px-3 py-1.5 text-xs mb-4 sm:mb-5
                    ${isLight
                        ? `${status.lightBackground} ${status.lightColor}`
                        : `${status.background} ${status.color}`}
                `}>

                    <span className={`
                        w-2 h-2 shrink-0 rounded-full
                        ${isLight ? status.lightDot : status.dot}
                    `} />

                    {status.label}

                </div>

                {/* Título */}
                <h3 className={`font-bold mb-2 group-hover:text-secondary transition-colors ${
                    project.featured
                        ? 'text-xl sm:text-2xl md:text-3xl'
                        : 'text-xl lg:text-2xl'
                }`}>

                    {project.title}

                </h3>

                <p className="text-primary text-sm mb-3 sm:mb-4">

                    {project.subtitle}

                </p>

                <p className={`text-sm lg:text-base leading-relaxed mb-5 sm:mb-6 ${
                    isLight
                        ? 'text-foreground/80'
                        : 'text-foreground/60'
                }`}>

                    {project.description}

                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">

                    {project.technologies.map(technology => (

                        <span
                            key={technology}
                            className="rounded-md border border-primary/20 bg-primary/10 text-primary text-xs px-2.5 lg:px-3 py-1.5"
                        >

                            {technology}

                        </span>

                    ))}

                </div>

                {/* Ações */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-5 mt-auto">

                    <button
                        type="button"
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
                            className={`flex items-center gap-2 text-sm hover:text-secondary transition-colors ${
                                isLight
                                    ? 'text-foreground/85'
                                    : 'text-foreground/70'
                            }`}
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
                            className={`flex items-center gap-2 text-sm hover:text-secondary transition-colors ${
                                isLight
                                    ? 'text-foreground/85'
                                    : 'text-foreground/70'
                            }`}
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
