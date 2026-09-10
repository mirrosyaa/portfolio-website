import Sky from './components/Sky'
import Glow from './components/Glow'
import ScrollBar from './components/ScrollBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Sky />
      <Glow />

      <div className="page">
        <ScrollBar />
        <Nav />
        <main>
          <Hero />
          <Work />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
