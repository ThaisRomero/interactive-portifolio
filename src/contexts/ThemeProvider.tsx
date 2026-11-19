import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

import { ThemeContext } from './ThemeContext'
import type { Theme } from './ThemeContext'

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useState<Theme>(() => {

        const savedTheme = localStorage.getItem('portfolio-theme')

        return savedTheme === 'light' ? 'light' : 'dark'

    })

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)

        localStorage.setItem('portfolio-theme', theme)

    }, [theme])

    function toggleTheme() {

        setTheme(previous =>
            previous === 'dark' ? 'light' : 'dark'
        )

    }

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>

            {children}

        </ThemeContext.Provider>

    )
}