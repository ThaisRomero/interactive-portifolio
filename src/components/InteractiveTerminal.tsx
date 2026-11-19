import { useState, useRef, useEffect } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { Terminal } from 'lucide-react'

interface TerminalEntry {
    command: string
    output: string
}

const commands: Record<string, string> = {
    help: [
        'Comandos disponíveis:',
        '',
        'home      - Página inicial',
        'about     - Sobre mim',
        'skills    - Minhas tecnologias',
        'projects  - Meus projetos',
        'contact   - Contato',
        'github    - Perfil no GitHub',
        'linkedin  - Perfil no LinkedIn',
        'whoami    - Identificação',
        'date      - Data e hora atual',
        'clear     - Limpar terminal',
        '',
        'Atalhos:',
        'Tab       - Autocompletar',
        '↑ / ↓     - Histórico de comandos',
        'Ctrl + L  - Limpar terminal'
    ].join('\n'),

    home: 'Retornando à página inicial...',

    about: [
        'Experiência em redes e infraestrutura,',
        'desenvolvimento de software e automação.',
        '',
        'Navegando para Sobre mim...'
    ].join('\n'),

    skills: [
        'Front-end: React, JavaScript, TypeScript, HTML, CSS',
        'Back-end: Python, PHP',
        'Em estudo: Java, Laravel, MySQL',
        'Ferramentas: Git, Linux',
        '',
        'Navegando para Habilidades...'
    ].join('\n'),

    projects: [
        '01. PONLab - Gestão e Monitoramento de Capacidade PON',
        '02. Restaurante Encanto Gastronomia (em finalização)',
        '03. Portfólio Interativo',
        '',
        'Navegando para Projetos...'
    ].join('\n'),

    contact: [
        'LinkedIn: linkedin.com/in/thais-romero',
        'GitHub: github.com/ThaisRomero',
        '',
        'Navegando para Contato...'
    ].join('\n'),

    github: 'Abrindo GitHub...',

    linkedin: 'Abrindo LinkedIn...',

    whoami: 'thais-romero | Developer',

    sudo: 'Access denied. Nice try! :)'
}

const availableCommands = [
    'help',
    'home',
    'about',
    'skills',
    'projects',
    'contact',
    'github',
    'linkedin',
    'whoami',
    'date',
    'clear'
]

const navigationCommands: Record<string, string> = {
    home: 'home',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    contact: 'contact'
}

const externalLinks: Record<string, string> = {
    github: 'https://github.com/ThaisRomero',
    linkedin: 'https://www.linkedin.com/in/thais-romero/'
}

export default function InteractiveTerminal() {

    const [input, setInput] = useState('')

    const [history, setHistory] = useState<TerminalEntry[]>([
        {
            command: 'help',
            output: commands.help
        }
    ])

    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [suggestions, setSuggestions] = useState<string[]>([])

    const outputRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const navigationTimer = useRef<number | null>(null)

    // Rolagem automática do terminal
    useEffect(() => {

        if (outputRef.current) {
            outputRef.current.scrollTop =
                outputRef.current.scrollHeight
        }

    }, [history])

    // Cancelar navegação pendente ao desmontar o componente
    useEffect(() => {

        return () => {

            if (navigationTimer.current !== null) {
                window.clearTimeout(navigationTimer.current)
            }

        }

    }, [])

    function navigateToSection(sectionId: string) {

        const section = document.getElementById(sectionId)

        if (!section) return

        navigationTimer.current = window.setTimeout(() => {

            inputRef.current?.blur()

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

            navigationTimer.current = null

        }, 800)
    }

    function executeCommand(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const command = input.trim().toLowerCase()

        if (!command) return

        setCommandHistory(previous => [...previous, command])
        setHistoryIndex(-1)
        setSuggestions([])

        if (navigationTimer.current !== null) {

            window.clearTimeout(navigationTimer.current)
            navigationTimer.current = null

        }

        if (command === 'clear') {

            setHistory([])

        } else {

            let output: string

            if (command === 'date') {

                output = new Date().toLocaleString('pt-BR')

            } else {

                output = Object.hasOwn(commands, command)
                    ? commands[command]
                    : `Comando não encontrado: ${command}. Digite help.`

            }

            setHistory(previous => [
                ...previous,
                { command, output }
            ])

            // Navegação interna
            if (Object.hasOwn(navigationCommands, command)) {

                navigateToSection(navigationCommands[command])

            }

            // Links externos
            if (Object.hasOwn(externalLinks, command)) {

                window.open(
                    externalLinks[command],
                    '_blank',
                    'noopener,noreferrer'
                )

            }

        }

        setInput('')

    }

    function handleKeyboard(event: KeyboardEvent<HTMLInputElement>) {

        // Autocompletar comandos
        if (event.key === 'Tab') {

            const currentInput = input.trim().toLowerCase()

            if (!currentInput) return

            const matches = availableCommands.filter(command =>
                command.startsWith(currentInput)
            )

            if (!matches.length) return

            event.preventDefault()

            if (matches.length === 1) {

                setInput(matches[0])
                setSuggestions([])

            } else {

                setSuggestions(matches)

            }

            return
        }

        // Histórico: comando anterior
        if (event.key === 'ArrowUp') {

            event.preventDefault()

            if (!commandHistory.length) return

            const nextIndex = historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1)

            setHistoryIndex(nextIndex)
            setInput(commandHistory[nextIndex])
            setSuggestions([])

        }

        // Histórico: próximo comando
        if (event.key === 'ArrowDown') {

            event.preventDefault()

            if (historyIndex === -1) return

            const nextIndex = historyIndex + 1

            if (nextIndex >= commandHistory.length) {

                setInput('')
                setHistoryIndex(-1)

            } else {

                setHistoryIndex(nextIndex)
                setInput(commandHistory[nextIndex])

            }

            setSuggestions([])
        }

        // Limpar terminal
        if (event.ctrlKey && event.key.toLowerCase() === 'l') {

            event.preventDefault()

            setHistory([])
            setSuggestions([])

        }

        // Fechar sugestões
        if (event.key === 'Escape') {

            setSuggestions([])

        }

    }

    return (

        <div className="relative">

            {/* Iluminação externa */}
            <div className="absolute -inset-1 bg-linear-to-r from-secondary/20 to-primary/20 blur-xl rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-primary/40 bg-surface/90 backdrop-blur-xl">

                {/* Cabeçalho */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                    <div className="flex gap-2">

                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />

                    </div>

                    <span className="font-mono text-xs text-foreground/50">
                        portfolio — bash
                    </span>

                    <Terminal
                        size={16}
                        className="text-secondary"
                    />

                </div>

                {/* Histórico */}
                <div
                    ref={outputRef}
                    role="log"
                    aria-live="polite"
                    className="h-80 overflow-y-auto p-5 sm:p-7 font-mono text-sm space-y-5"
                >

                    {history.map((entry, index) => (

                        <div key={index}>

                            <p className="text-secondary mb-3">

                                thais@portfolio:~$

                                <span className="text-foreground">
                                    {' '}{entry.command}
                                </span>

                            </p>

                            <pre className="whitespace-pre-wrap wrap-break-word text-foreground/70 leading-relaxed font-mono">
                                {entry.output}
                            </pre>

                        </div>

                    ))}

                </div>

                {/* Sugestões de comandos */}
                {suggestions.length > 0 && (

                    <div className="border-t border-white/10 bg-background/40 px-5 py-3">

                        <p className="text-xs font-mono text-foreground/40 mb-3">
                            Comandos encontrados:
                        </p>

                        <div className="flex flex-wrap gap-2">

                            {suggestions.map(suggestion => (

                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => {

                                        setInput(suggestion)
                                        setSuggestions([])
                                        inputRef.current?.focus()

                                    }}
                                    className="px-3 py-1 rounded-md border border-primary/30 bg-primary/10 text-secondary text-xs font-mono hover:bg-primary/20 cursor-pointer transition-colors"
                                >

                                    {suggestion}

                                </button>

                            ))}

                        </div>

                    </div>

                )}

                {/* Entrada de comandos */}
                <form
                    onSubmit={executeCommand}
                    className="flex items-center gap-3 px-5 py-5 border-t border-white/10 font-mono text-xs sm:text-sm"
                    onClick={() => inputRef.current?.focus()}
                >

                    <span className="text-secondary shrink-0">
                        thais@portfolio:~$
                    </span>

                    <input
                        ref={inputRef}
                        type="text"
                        aria-label="Comando do terminal"
                        value={input}
                        onChange={event => {

                            setInput(event.target.value)
                            setSuggestions([])

                        }}
                        onKeyDown={handleKeyboard}
                        autoComplete="off"
                        spellCheck={false}
                        className="w-full min-w-0 bg-transparent outline-none text-foreground caret-secondary"
                    />

                </form>

            </div>

        </div>

    )
}