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

const categories = [
    {
        title: 'Front-end',
        icon: Monitor,
        technologies: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss, color: '#1572B6' }
        ]
    },
    {
        title: 'Back-end',
        icon: Server,
        technologies: [
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'PHP', icon: SiPhp, color: '#777BB4' }
        ]
    },
    {
        title: 'Ferramentas',
        icon: Wrench,
        technologies: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'Linux', icon: SiLinux, color: '#FCC624' }
        ]
    },
    {
        title: 'Em aprendizado',
        icon: BookOpen,
        technologies: [
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
            { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
        ]
    }
]

export default function Skills() {

    return (

        <section
            id="skills"
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
                        02 — TECH STACK
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Habilidades e Tecnologias
                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                    <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto mt-6">
                        Tecnologias que utilizo para transformar ideias
                        em soluções, sempre em constante evolução.
                    </p>

                </motion.div>

                {/* Categorias */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

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
                            className="rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-md p-6 sm:p-8"
                        >

                            {/* Cabeçalho da categoria */}
                            <div className="flex items-center gap-3 mb-7">

                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">

                                    <category.icon size={22} />

                                </div>

                                <h3 className="text-xl font-semibold">
                                    {category.title}
                                </h3>

                            </div>

                            {/* Tecnologias */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

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
                                        className="group relative overflow-hidden flex flex-col items-center justify-center gap-4 min-h-32 rounded-xl border border-white/10 bg-background/70 hover:border-secondary/40 transition-colors"
                                    >

                                        {/* Iluminação */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: `radial-gradient(circle at center, ${technology.color}20, transparent 75%)`
                                            }}
                                        />

                                        {/* Logotipo */}
                                        <technology.icon
                                            size={42}
                                            color={technology.color}
                                            className="relative transition-transform duration-300 group-hover:scale-110"
                                        />

                                        {/* Nome */}
                                        <span className="relative text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
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
                    className="text-center font-mono text-sm text-foreground/40 mt-12"
                >
                    <span className="text-secondary">&gt; </span>

                    Always learning, always evolving.

                    <span className="text-secondary animate-pulse">_</span>
                </motion.p>

            </div>

        </section>

    )
}