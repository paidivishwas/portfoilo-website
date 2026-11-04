import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Spotlight from './components/Spotlight'
import useSmoothScroll from './lib/useSmoothScroll'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Spotlight />
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
