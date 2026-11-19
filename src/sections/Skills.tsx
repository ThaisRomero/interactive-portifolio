
import { motion } from 'framer-motion'

import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss,
    SiPython,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiGit,
    SiLinux
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'

import {
    Monitor,
    Server,
    Wrench,
    BookOpen
} from 'lucide-react'

import { useTheme } from '../hooks/useTheme'

const categories = [
    {
        title: 'Front-end',
        icon: Monitor,
        technologies: [
            { name: 'React', icon: SiReact, color: '#61DAFB', lightColor: '#0891B2' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', lightColor: '#CA8A04' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', lightColor: '#3178C6' },
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26', lightColor: '#E34F26' },
            { name: 'CSS3', icon: SiCss, color: '#1572B6', lightColor: '#1572B6' }
        ]
    },
    {
        title: 'Back-end',
        icon: Server,
        technologies: [
            { name: 'Python', icon: SiPython, color: '#3776AB', lightColor: '#3776AB' },
            { name: 'PHP', icon: SiPhp, color: '#777BB4', lightColor: '#6366A0' }
        ]
    },
    {
        title: 'Ferramentas',
        icon: Wrench,
        technologies: [
            { name: 'Git', icon: SiGit, color: '#F05032', lightColor: '#E34F26' },
            { name: 'Linux', icon: SiLinux, color: '#FCC624', lightColor: '#B45309' }
        ]
    },
    {
        title: 'Em aprendizado',
        icon: BookOpen,
        technologies: [
            { name: 'Java', icon: FaJava, color: '#ED8B00', lightColor: '#C76B00' },
            { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', lightColor: '#DC2626' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1', lightColor: '#28658A' }
        ]
    }
]

export default function Skills() {

    const { theme } = useTheme()

    const isLight = theme === 'light'

    return (

        <section
            id="skills"
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
                        02 — TECH STACK
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                        Habilidades e Tecnologias
                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                    <p className={`text-base md:text-lg max-w-2xl mx-auto mt-5 sm:mt-6 ${
                        isLight
                            ? 'text-foreground/80'
                            : 'text-foreground/60'
                    }`}>
                        Tecnologias que utilizo para transformar ideias
                        em soluções, sempre em constante evolução.
                    </p>

                </motion.div>

                {/* Categorias */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                    {categories.map((category, categoryIndex) => (

                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: categoryIndex * 0.1
                            }}
                            className={`rounded-2xl border backdrop-blur-md p-4 sm:p-8 transition-colors ${
                                isLight
                                    ? 'border-slate-400/30 bg-surface/90 shadow-[0_8px_25px_rgba(15,23,42,0.07)]'
                                    : 'border-white/10 bg-surface/50'
                            }`}
                        >

                            {/* Cabeçalho da categoria */}
                            <div className="flex items-center gap-3 mb-5 sm:mb-7">

                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">

                                    <category.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />

                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {category.title}
                                </h3>

                            </div>

                            {/* Tecnologias */}
                            <div className="grid grid-cols-2 min-[375px]:grid-cols-3 gap-3 sm:gap-4">

                                {category.technologies.map((technology, index) => (

                                    <motion.div
                                        key={technology.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ y: -5 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.08
                                        }}
                                        className={`group relative overflow-hidden flex flex-col items-center justify-center gap-2 sm:gap-4 min-h-24 sm:min-h-32 min-w-0 rounded-xl border transition-colors ${
                                            isLight
                                                ? 'border-slate-400/30 bg-background/50 shadow-sm hover:border-secondary/50'
                                                : 'border-white/10 bg-background/70 hover:border-secondary/40'
                                        }`}
                                    >

                                        {/* Iluminação */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: `radial-gradient(circle at center, ${
                                                    isLight
                                                        ? technology.lightColor
                                                        : technology.color
                                                }20, transparent 75%)`
                                            }}
                                        />

                                        {/* Logotipo */}
                                        <technology.icon
                                            color={
                                                isLight
                                                    ? technology.lightColor
                                                    : technology.color
                                            }
                                            className="relative w-8 h-8 sm:w-[42px] sm:h-[42px] transition-transform duration-300 group-hover:scale-110"
                                        />

                                        {/* Nome */}
                                        <span className={`relative text-xs sm:text-sm font-medium text-center group-hover:text-foreground transition-colors ${
                                            isLight
                                                ? 'text-foreground/90'
                                                : 'text-foreground/80'
                                        }`}>
                                            {technology.name}
                                        </span>

                                    </motion.div>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Mensagem final */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`text-center font-mono text-xs sm:text-sm mt-8 sm:mt-12 ${
                        isLight
                            ? 'text-foreground/65'
                            : 'text-foreground/40'
                    }`}
                >
                    <span className="text-secondary">&gt; </span>

                    Always learning, always evolving.

                    <span className="text-secondary animate-pulse">_</span>
                </motion.p>

            </div>

        </section>

    )
}
