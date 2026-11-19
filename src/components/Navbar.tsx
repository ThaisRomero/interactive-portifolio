import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Code2,
    Home,
    User,
    Layers,
    FolderCode,
    Mail,
    Menu,
    X
} from 'lucide-react'

const navItems = [
    { label: 'Início', href: '#home', icon: Home },
    { label: 'Sobre', href: '#about', icon: User },
    { label: 'Habilidades', href: '#skills', icon: Layers },
    { label: 'Projetos', href: '#projects', icon: FolderCode },
    { label: 'Contato', href: '#contact', icon: Mail },
]

export default function Navbar() {

    const [active, setActive] = useState('#home')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {

    function handleScroll() {

        const scrollPosition = window.scrollY + 150

        for (const item of [...navItems].reverse()) {

            const section = document.getElementById(
                item.href.substring(1)
            )

            if (section && scrollPosition >= section.offsetTop) {

                setActive(item.href)
                break

            }
        }
    }

    window.addEventListener('scroll', handleScroll, {
        passive: true
    })

    handleScroll()

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }

}, [])

    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl"
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setActive('#home')}
                    aria-label="Página inicial"
                    className="text-secondary transition-colors hover:text-primary"
                >
                    <Code2 size={38} />
                </a>

                {/* Menu desktop */}
                <div className="hidden md:flex items-center gap-8">

                    {navItems.map(({ label, href, icon: Icon }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setActive(href)}
                            className={`relative flex items-center gap-2 py-3 text-sm transition-colors ${
                                active === href
                                    ? 'text-secondary'
                                    : 'text-foreground/70 hover:text-secondary'
                            }`}
                        >
                            <Icon size={18} />

                            {label}

                            {active === href && (
                                <motion.span
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-secondary to-primary"
                                />
                            )}
                        </a>
                    ))}

                </div>

                {/* Botão mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Alternar menu"
                    aria-expanded={menuOpen}
                    className="md:hidden text-secondary cursor-pointer"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

            </nav>

            {/* Menu mobile */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden flex flex-col gap-5 px-6 py-6 border-t border-white/10"
                >
                    {navItems.map(({ label, href, icon: Icon }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => {
                                setActive(href)
                                setMenuOpen(false)
                            }}
                            className={`flex items-center gap-3 ${
                                active === href
                                    ? 'text-secondary'
                                    : 'text-foreground/70'
                            }`}
                        >
                            <Icon size={20} />

                            {label}
                        </a>
                    ))}
                </motion.div>
            )}

        </motion.header>
    )
}