
import { motion } from 'framer-motion'
import { Code2, ArrowUp, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { useTheme } from '../hooks/useTheme'

export default function Footer() {

    const currentYear = new Date().getFullYear()

    const { theme } = useTheme()

    const isLight = theme === 'light'

    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    return (

        <footer className={`relative z-10 border-t backdrop-blur-xl transition-colors ${
            isLight
                ? 'border-border/20 bg-surface/65'
                : 'border-white/10 bg-background/70'
        }`}>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 sm:py-8 lg:py-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8">

                    {/* Identidade visual */}
                    <div className="flex items-center gap-3 sm:gap-4">

                        <Code2
                            className="w-8 h-8 sm:w-9 sm:h-9 text-secondary"
                        />

                        <div>

                            <p className="text-sm sm:text-base font-semibold">
                                Thaís Romero
                            </p>

                            <p className={`text-xs mt-1 ${
                                isLight
                                    ? 'text-foreground/75'
                                    : 'text-foreground/60'
                            }`}>
                                Tecnologia e Desenvolvimento
                            </p>

                        </div>

                    </div>

                    {/* Créditos */}
                    <div className="text-center">

                        <p className={`text-xs sm:text-sm ${
                            isLight
                                ? 'text-foreground/80'
                                : 'text-foreground/75'
                        }`}>
                            © {currentYear} Thaís Romero
                        </p>

                        <p className={`flex items-center justify-center gap-2 text-xs mt-1.5 sm:mt-2 ${
                            isLight
                                ? 'text-foreground/70'
                                : 'text-foreground/60'
                        }`}>

                            Desenvolvido com

                            <Heart
                                size={12}
                                className="text-primary"
                                fill="currentColor"
                            />

                            e código

                        </p>

                        <p className={`font-mono text-xs mt-1.5 sm:mt-2 ${
                            isLight
                                ? 'text-primary'
                                : 'text-primary'
                        }`}>
                            Built with React & TypeScript
                        </p>

                    </div>

                    {/* Redes sociais e voltar ao topo */}
                    <div className="flex items-center gap-3 sm:gap-4">

                        <motion.a
                            href="https://github.com/ThaisRomero"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ y: -3 }}
                            className={`w-11 h-11 flex items-center justify-center rounded-lg transition-colors ${
                                isLight
                                    ? 'text-foreground/85 hover:text-secondary'
                                    : 'text-foreground/75 hover:text-secondary'
                            }`}
                        >

                            <FaGithub
                                className="w-5 h-5 sm:w-[23px] sm:h-[23px]"
                            />

                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/thais-romero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ y: -3 }}
                            className={`w-11 h-11 flex items-center justify-center rounded-lg transition-colors ${
                                isLight
                                    ? 'text-foreground/85 hover:text-[#0A66C2]'
                                    : 'text-foreground/75 hover:text-secondary'
                            }`}
                        >

                            <FaLinkedin
                                className="w-5 h-5 sm:w-[23px] sm:h-[23px]"
                            />

                        </motion.a>

                        <motion.button
                            type="button"
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Voltar ao início"
                            title="Voltar ao início"
                            className={`w-11 h-11 flex items-center justify-center rounded-lg border text-secondary cursor-pointer transition-colors ml-1 sm:ml-3 ${
                                isLight
                                    ? 'border-primary/30 bg-primary/10 hover:bg-primary/20 shadow-sm'
                                    : 'border-primary/40 bg-primary/10 hover:bg-primary/20'
                            }`}
                        >

                            <ArrowUp size={20} />

                        </motion.button>

                    </div>

                </div>

            </div>

        </footer>

    )
}
