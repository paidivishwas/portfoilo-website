import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import HireMe from './components/HireMe'
import Intro from './components/Intro'
import Spotlight from './components/Spotlight'
import ParticleField from './components/ParticleField'
import CaseStudyPage from './components/CaseStudyPage'
import useSmoothScroll from './lib/useSmoothScroll'

const caseId = () => window.location.hash.match(/^#\/case\/([\w-]+)/)?.[1] ?? null

export default function App() {
  useSmoothScroll()
  const [id, setId] = useState(caseId)

  useEffect(() => {
    const on = () => setId(caseId())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const back = () => {
    window.location.hash = ''
    setTimeout(() => document.getElementById('work')?.scrollIntoView(), 50)
  }

  if (id) {
    return (
      <>
        <ParticleField />
        <CaseStudyPage id={id} onBack={back} />
        <HireMe />
      </>
    )
  }

  return (
    <>
      <ParticleField />
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
      <HireMe />
    </>
  )
}
