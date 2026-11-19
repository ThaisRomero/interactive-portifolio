import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: string
}

export default function Background() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const canvas = canvasRef.current

        if (!canvas) return

        const ctx = canvas.getContext('2d')

        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        let animationId = 0

        let particles: Particle[] = []

        const mouse = {
            x: -1000,
            y: -1000
        }

        const colors = [
            '#22D3EE',
            '#8B5CF6'
        ]

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        function resize() {

            if (!canvas || !ctx) return

            width = window.innerWidth
            height = window.innerHeight

            const dpr = Math.min(window.devicePixelRatio || 1, 2)

            canvas.width = width * dpr
            canvas.height = height * dpr

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            createParticles()

            if (reducedMotion) draw()
        }

        function createParticles() {

            const count = Math.min(
                110,
                Math.floor((width * height) / 18000)
            )

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.5 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            }))
        }

        function draw() {

            if (!ctx) return

            ctx.clearRect(0, 0, width, height)

            particles.forEach((particle, index) => {

                if (!reducedMotion) {
                    particle.x += particle.vx
                    particle.y += particle.vy
                }

                if (particle.x < 0 || particle.x > width) {
                    particle.vx *= -1
                }

                if (particle.y < 0 || particle.y > height) {
                    particle.vy *= -1
                }

                ctx.beginPath()

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                )

                ctx.fillStyle = particle.color
                ctx.fill()

                for (let i = index + 1; i < particles.length; i++) {

                    const other = particles[i]

                    const distance = Math.hypot(
                        particle.x - other.x,
                        particle.y - other.y
                    )

                    if (distance < 125) {

                        ctx.beginPath()

                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(other.x, other.y)

                        ctx.strokeStyle =
                            `rgba(139, 92, 246, ${0.25 * (1 - distance / 125)})`

                        ctx.lineWidth = 0.6
                        ctx.stroke()
                    }
                }

                const mouseDistance = Math.hypot(
                    particle.x - mouse.x,
                    particle.y - mouse.y
                )

                if (!reducedMotion && mouseDistance < 160) {

                    ctx.beginPath()

                    ctx.moveTo(particle.x, particle.y)
                    ctx.lineTo(mouse.x, mouse.y)

                    ctx.strokeStyle =
                        `rgba(34, 211, 238, ${0.4 * (1 - mouseDistance / 160)})`

                    ctx.stroke()
                }
            })
        }

        function animate() {

            draw()

            animationId = requestAnimationFrame(animate)
        }

        function handleMouseMove(event: MouseEvent) {

            mouse.x = event.clientX
            mouse.y = event.clientY
        }

        function handleMouseLeave() {

            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        resize()

        if (!reducedMotion) animate()

        return () => {

            cancelAnimationFrame(animationId)

            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }

    }, [])

    return (

        <div
            aria-hidden="true"
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >

            <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-secondary/10 blur-[150px]" />

            <div className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full bg-primary/15 blur-[150px]" />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />

        </div>
    )
}