export interface Project {
    id: string
    title: string
    subtitle: string
    description: string
    details: string
    technologies: string[]
    image: string
    status: 'completed' | 'finishing' | 'development'
    featured: boolean
    github?: string
    demo?: string
    features: string[]
}

export const projects: Project[] = [
    {
        id: 'ponlab',
        title: 'PONLab',
        subtitle: 'Gestão e Monitoramento de Capacidade PON',

        description:
            'Sistema de monitoramento de infraestrutura de redes ópticas, com coleta automatizada de dados e indicadores de capacidade.',

        details:
            'Solução desenvolvida para automatizar a coleta, o processamento e a visualização de informações de equipamentos OLT, auxiliando na gestão da capacidade da rede. A versão demonstrativa utiliza dados fictícios.',

        technologies: [
            'Python',
            'Streamlit',
            'Pandas',
            'Telnet',
            'Linux',
            'Excel'
        ],

        image: '/projects/ponlab.png',
        status: 'completed',
        featured: true,
        github: 'https://github.com/ThaisRomero/PONLab',

        features: [
            'Coleta automatizada de informações',
            'Monitoramento de capacidade PON',
            'Suporte a múltiplos fabricantes de OLT',
            'Dashboard interativo',
            'Histórico de utilização',
            'Exportação de relatórios',
            'Indicadores e alertas de capacidade'
        ]
    },
    {
        id: 'encanto',
        title: 'Restaurante Encanto Gastronomia',
        subtitle: 'Website para o segmento gastronômico',

        description:
            'Aplicação web desenvolvida para o segmento gastronômico, com foco em design, experiência do usuário e interatividade.',

        details:
            'Projeto de desenvolvimento front-end que combina uma interface visual elegante com componentes modernos e animações, explorando diferentes recursos do ecossistema React.',

        technologies: [
            'React',
            'JavaScript',
            'CSS',
            'Bootstrap',
            'Ant Design',
            'Framer Motion',
            'React Router'
        ],

        image: '/projects/encanto.png',
        status: 'finishing',
        featured: false,

        github: 'https://github.com/ThaisRomero/restaurant',

        features: [
            'Desenvolvimento baseado em componentes',
            'Estilização com Bootstrap',
            'Animações e transições',
            'Navegação entre páginas'
        ]
    },
    {
        id: 'portfolio',
        title: 'Portfólio Interativo',
        subtitle: 'Portfólio profissional de tecnologia',

        description:
            'Portfólio pessoal com identidade visual tecnológica, terminal interativo e experiências dinâmicas de navegação.',

        details:
            'Aplicação desenvolvida para apresentar minha trajetória profissional, conhecimentos e projetos, explorando componentização, animações e interatividade.',

        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'Framer Motion',
            'Canvas API'
        ],

        image: '/projects/portfolio.png',
        status: 'development',
        featured: false,

        github: 'https://github.com/ThaisRomero/interactive-portfolio',

        features: [
            'Terminal interativo funcional',
            'Fundo animado com partículas',
            'Efeito de digitação',
            'Navegação com Scroll Spy',
            'Layout responsivo',
            'Animações durante a rolagem'
        ]
    }
]