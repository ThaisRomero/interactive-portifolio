import Navbar from './components/Navbar'
import Background from './components/Background'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

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

                <Contact />

            </main>

            <Footer />

        </div>

    )
}

export default App