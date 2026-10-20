import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './styles.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Tasnia Haque Promy
        </div>
      </footer>
    </>
  )
}

export default App