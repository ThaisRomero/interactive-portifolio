
import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import { useTheme } from '../hooks/useTheme'

const contacts = [
    {
        title: 'LinkedIn',
        description: 'Conexões profissionais',
        icon: FaLinkedin,
        color: '#0A66C2',
        lightColor: '#0A66C2',
        href: 'https://www.linkedin.com/in/thais-romero/'
    },
    {
        title: 'GitHub',
        description: 'Projetos e código-fonte',
        icon: FaGithub,
        color: '#F1F5F9',
        lightColor: '#1E293B',
        href: 'https://github.com/ThaisRomero'
    },
    {
        title: 'E-mail',
        description: 'Entre em contato',
        icon: Mail,
        color: '#22D3EE',
        lightColor: '#0E7490',
        href: 'mailto:SEU_EMAIL'
    },
    {
        title: 'Localização',
        description: 'Jacareí — SP, Brasil',
        icon: MapPin,
        color: '#8B5CF6',
        lightColor: '#6D28D9',
        href: null
    }
]

export default function Contact() {

    const { theme } = useTheme()

    const isLight = theme === 'light'

    return (

        <section
            id="contact"
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
                        04 — GET IN TOUCH
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                        Vamos nos conectar?
                    </h2>

                    <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary mx-auto mt-5 rounded-full" />

                    <p className={`text-base md:text-lg max-w-2xl mx-auto mt-5 sm:mt-6 ${
                        isLight
                            ? 'text-foreground/80'
                            : 'text-foreground/60'
                    }`}>

                        Sempre aberta a novas ideias, conexões
                        profissionais e compartilhamento de conhecimento.

                    </p>

                </motion.div>

                {/* Cards de contato */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">

                    {contacts.map((contact, index) => (

                        <motion.div
                            key={contact.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1
                            }}
                            className={`group relative min-w-0 overflow-hidden rounded-2xl border backdrop-blur-md hover:border-secondary/40 transition-colors ${
                                isLight
                                    ? 'border-border/20 bg-surface/95 shadow-[0_6px_20px_rgba(15,23,42,0.08)]'
                                    : 'border-white/10 bg-surface/60'
                            }`}
                        >

                            {/* Iluminação */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at top, ${
                                        isLight
                                            ? contact.lightColor
                                            : contact.color
                                    }20, transparent 75%)`
                                }}
                            />

                            <div className="relative h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 gap-3 sm:gap-4">

                                {/* Ícone */}
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl border flex items-center justify-center ${
                                    isLight
                                        ? 'bg-background/50 border-border/15 shadow-sm'
                                        : 'bg-background/60 border-white/10'
                                }`}>

                                    <contact.icon
                                        color={
                                            isLight
                                                ? contact.lightColor
                                                : contact.color
                                        }
                                        className="w-6 h-6 sm:w-[30px] sm:h-[30px] group-hover:scale-110 transition-transform duration-300"
                                    />

                                </div>

                                {/* Título */}
                                <h3 className="text-base sm:text-xl font-semibold">
                                    {contact.title}
                                </h3>

                                {/* Descrição */}
                                <p className={`text-xs sm:text-sm leading-relaxed ${
                                    isLight
                                        ? 'text-foreground/75'
                                        : 'text-foreground/60'
                                }`}>
                                    {contact.description}
                                </p>

                                {/* Link */}
                                {contact.href && (

                                    <a
                                        href={contact.href}
                                        target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 rounded-2xl"
                                        aria-label={`Acessar ${contact.title}`}
                                    >

                                        <ArrowUpRight
                                            className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-[19px] sm:h-[19px] group-hover:text-secondary transition-colors ${
                                                isLight
                                                    ? 'text-foreground/50'
                                                    : 'text-foreground/30'
                                            }`}
                                        />

                                    </a>

                                )}

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Mensagem final */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`text-center mt-8 sm:mt-16 font-mono text-xs sm:text-sm ${
                        isLight
                            ? 'text-foreground/65'
                            : 'text-foreground/40'
                    }`}
                >

                    <span className="text-secondary">
                        &gt;{' '}
                    </span>

                    Let's build something amazing.

                    <span className="text-secondary animate-pulse">
                        _
                    </span>

                </motion.div>

            </div>

        </section>

    )
}
