
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

import {
    Network,
    Code2,
    Workflow,
    GraduationCap,
    Briefcase
} from 'lucide-react'

const areas = [
    {
        icon: Network,
        title: 'Redes e Infraestrutura',
        description: 'Monitoramento, conectividade e operações de rede.'
    },
    {
        icon: Code2,
        title: 'Desenvolvimento',
        description: 'Desenvolvimento de aplicações e soluções web.'
    },
    {
        icon: Workflow,
        title: 'Automação',
        description: 'Otimização de processos e integração de sistemas.'
    },
    {
        icon: GraduationCap,
        title: 'Aprendizado Contínuo',
        description: 'Exploração de novas tecnologias e evolução profissional.'
    }
]

const timeline = [
    {
        year: '2027',
        title: 'Análise e Desenvolvimento de Sistemas',
        description: 'Graduação — início previsto para fevereiro de 2027.',
        icon: GraduationCap
    },
    {
        year: 'Atual',
        title: 'Técnico de Redes II — NOC',
        description: 'Monitoramento de redes, análise de incidentes e automação de processos.',
        icon: Briefcase
    },
    {
        year: '2024',
        title: 'Redes de Computadores',
        description: 'Graduação tecnológica concluída.',
        icon: GraduationCap
    }
]

export default function About() {

    const { theme } = useTheme()

    const isLight = theme === 'light'

    return (

        <section
            id="about"
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
                        01 — ABOUT ME
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                        Sobre mim
                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                </motion.div>

                {/* Apresentação e áreas de conhecimento */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

                    {/* Apresentação profissional */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="min-w-0"
                    >

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 sm:mb-6">

                            Tecnologia além do{' '}

                            <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                                código.
                            </span>

                        </h3>

                        <div className={`space-y-4 sm:space-y-5 text-base md:text-lg leading-relaxed ${
                            isLight
                                ? 'text-foreground/80'
                                : 'text-foreground/65'
                        }`}>

                            <p>
                                Sou profissional de tecnologia, formada em
                                Redes de Computadores, com experiência em
                                infraestrutura, monitoramento e operações
                                de redes.
                            </p>

                            <p>
                                Minha trajetória profissional despertou o
                                interesse pelo desenvolvimento de software
                                e pela automação, explorando maneiras de
                                transformar desafios operacionais em
                                soluções tecnológicas.
                            </p>

                            <p>
                                Busco unir conhecimentos de diferentes
                                áreas da tecnologia para desenvolver
                                aplicações eficientes, funcionais e
                                inovadoras, sempre valorizando o
                                aprendizado contínuo.
                            </p>

                        </div>

                    </motion.div>

                    {/* Cards de conhecimento */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                        {areas.map(({ icon: Icon, title, description }, index) => (

                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                className={`group rounded-xl border backdrop-blur-md p-5 sm:p-6 transition-colors hover:border-secondary/40 ${
                                    isLight
                                        ? 'border-border/20 bg-surface/95 shadow-[0_4px_16px_rgba(15,23,42,0.07)]'
                                        : 'border-white/10 bg-surface/60'
                                }`}
                            >

                                {/* Ícone e título */}
                                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 mb-3 sm:mb-2">

                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg flex items-center justify-center text-secondary sm:mb-5 group-hover:bg-primary/15 group-hover:text-primary transition-colors ${
                                        isLight
                                            ? 'bg-secondary/15'
                                            : 'bg-secondary/10'
                                    }`}>

                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />

                                    </div>

                                    <h4 className="font-semibold text-base sm:text-lg">
                                        {title}
                                    </h4>

                                </div>

                                <p className={`text-sm leading-relaxed ${
                                    isLight
                                        ? 'text-foreground/75'
                                        : 'text-foreground/55'
                                }`}>
                                    {description}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

                {/* Linha do tempo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-12 sm:mt-16 lg:mt-24 max-w-3xl mx-auto"
                >

                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
                        Minha trajetória
                    </h3>

                    <div className="relative border-l border-primary/40 ml-2 sm:ml-5 pl-6 sm:pl-9 space-y-5 sm:space-y-8">

                        {timeline.map(({ year, title, description, icon: Icon }, index) => (

                            <motion.div
                                key={title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15
                                }}
                                className={`relative rounded-xl border backdrop-blur-md p-5 sm:p-6 hover:border-primary/40 transition-colors ${
                                    isLight
                                        ? 'border-border/20 bg-surface/95 shadow-[0_4px_16px_rgba(15,23,42,0.07)]'
                                        : 'border-white/10 bg-surface/50'
                                }`}
                            >

                                {/* Marcador da linha do tempo */}
                                <div className={`absolute -left-8.5 sm:-left-11.75 top-6 sm:top-7 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-3 sm:border-4 border-background bg-secondary ${
                                    isLight
                                        ? 'shadow-[0_0_10px_rgba(14,116,144,0.35)]'
                                        : 'shadow-[0_0_15px_#22D3EE]'
                                }`} />

                                <div className="flex items-center gap-3 mb-3">

                                    <Icon
                                        size={20}
                                        className="text-secondary"
                                    />

                                    <span className="text-secondary font-mono text-sm">
                                        {year}
                                    </span>

                                </div>

                                <h4 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
                                    {title}
                                </h4>

                                <p className={`text-sm sm:text-base leading-relaxed ${
                                    isLight
                                        ? 'text-foreground/75'
                                        : 'text-foreground/60'
                                }`}>
                                    {description}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>

        </section>

    )
}
