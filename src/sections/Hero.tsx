
import { motion } from 'framer-motion'
import {
    ArrowRight,
    ExternalLink,
    ChevronDown
} from 'lucide-react'

import { useTyping } from '../hooks/useTyping'
import { useTheme } from '../hooks/useTheme'
import InteractiveTerminal from '../components/InteractiveTerminal'

const roles = [
    'Desenvolvimento de Software',
    'Redes e Infraestrutura',
    'Automação de Processos',
    'Tecnologia e Inovação'
]

export default function Hero() {

    const typedText = useTyping(roles)

    const { theme } = useTheme()

    const isLight = theme === 'light'

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-24"
        >

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                {/* Apresentação */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="min-w-0"
                >

                    {/* Status */}
                    <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-2 mb-5 sm:mb-6">

                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />

                        <span className="text-secondary text-xs font-mono">
                            System online
                        </span>

                    </div>

                    {/* Apresentação pessoal */}
                    <p className="text-lg sm:text-xl text-foreground/80 mb-2 sm:mb-3">
                        Olá, eu sou
                    </p>

                    <h1 className="text-[clamp(2.4rem,12.5vw,3rem)] sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight bg-linear-to-r from-secondary via-blue-400 to-primary bg-clip-text text-transparent">
                        Thaís Romero
                    </h1>

                    {/* Efeito de digitação */}
                    <div className="min-h-14 mt-4 sm:mt-5">

                        <span className="text-base sm:text-xl md:text-2xl font-mono text-foreground wrap-break-word">

                            {typedText}

                            <span className="text-secondary animate-pulse">
                                |
                            </span>

                        </span>

                    </div>

                    {/* Descrição */}
                    <p className={`text-base md:text-lg leading-relaxed max-w-xl ${
                        isLight
                            ? 'text-foreground/80'
                            : 'text-foreground/60'
                    }`}>

                        Unindo experiência em redes e infraestrutura
                        ao desenvolvimento de software, criando soluções
                        tecnológicas que otimizam processos e geram resultados.

                    </p>

                    {/* Botões */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-secondary to-primary font-semibold px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base ${
                                isLight
                                    ? 'text-white'
                                    : 'text-background'
                            }`}
                        >

                            Ver projetos

                            <ArrowRight size={18} />

                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/thais-romero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center justify-center gap-2 sm:gap-3 border border-primary/50 hover:bg-primary/10 transition-colors px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base"
                        >

                            <ExternalLink size={20} />

                            LinkedIn

                        </motion.a>

                    </div>

                </motion.div>

                {/* Terminal interativo */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="min-w-0"
                >

                    <InteractiveTerminal />

                </motion.div>

            </div>

            {/* Indicador de rolagem */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary"
            >

                <ChevronDown size={28} />

            </motion.div>

        </section>
    )
}
