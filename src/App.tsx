import Navbar from './components/Navbar'
import Background from './components/Background'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function App() {

    return (

        <div className="relative min-h-screen bg-background">

            <Background />

            <Navbar />

            <main className="relative z-10">

                <Hero />

                <About />

                <Skills />

                <Projects />

            </main>

        </div>

    )
}

export default App