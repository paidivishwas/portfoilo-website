import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Spotlight from './components/Spotlight'
import useSmoothScroll from './lib/useSmoothScroll'
import { about } from './data/content'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Spotlight />
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Ticker items={about.skills} />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
