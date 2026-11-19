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
        'about     - Sobre mim',
        'skills    - Minhas tecnologias',
        'projects  - Meus projetos',
        'contact   - Contato',
        'whoami    - Identificação',
        'date      - Data atual',
        'clear     - Limpar terminal'
    ].join('\n'),

    about: 'Experiência em redes e infraestrutura, desenvolvimento de software e automação.',

   skills: [
    'Front-end: React, JavaScript, TypeScript, HTML, CSS',
    'Back-end: Python, PHP',
    'Em estudo: Java, Laravel, MySQL',
    'Ferramentas: Git, Linux'
].join('\n'),

    projects: [
    '01. PONLab - Gestão e Monitoramento de Capacidade PON',
    '02. Restaurante Encanto Gastronomia (em finalização)',
    '03. Portfólio Interativo'
].join('\n'),

    contact: 'LinkedIn: linkedin.com/in/thais-romero',

    whoami: 'thais-romero | Developer',

    sudo: 'Access denied. Nice try! :)'
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

    const outputRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        if (outputRef.current) {
            outputRef.current.scrollTop =
                outputRef.current.scrollHeight
        }

    }, [history])

    function executeCommand(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const command = input.trim().toLowerCase()

        if (!command) return

        setCommandHistory(previous => [...previous, command])
        setHistoryIndex(-1)

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
        }

        setInput('')
    }

    function handleKeyboard(event: KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'ArrowUp') {

            event.preventDefault()

            if (!commandHistory.length) return

            const nextIndex = historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1)

            setHistoryIndex(nextIndex)
            setInput(commandHistory[nextIndex])

        }

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
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'l') {

            event.preventDefault()
            setHistory([])

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
                        onChange={event => setInput(event.target.value)}
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