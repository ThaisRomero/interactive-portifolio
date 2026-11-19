import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {

    const { theme, toggleTheme } = useTheme()

    return (

        <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label={
                theme === 'dark'
                    ? 'Ativar tema claro'
                    : 'Ativar tema escuro'
            }
            title={
                theme === 'dark'
                    ? 'Ativar tema claro'
                    : 'Ativar tema escuro'
            }
            className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 text-secondary hover:bg-primary/20 transition-colors cursor-pointer overflow-hidden"
        >

            <AnimatePresence mode="wait" initial={false}>

                <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.18 }}
                >

                    {theme === 'dark'
                        ? <Sun size={20} />
                        : <Moon size={20} />
                    }

                </motion.span>

            </AnimatePresence>

        </motion.button>

    )
}