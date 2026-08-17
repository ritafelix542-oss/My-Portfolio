import { useEffect } from 'react'
import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Home from './components/Home'   // ← changed from Hero
import About from './components/About'
import Projects from './components/Projects'
//import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css"

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    revealElements.forEach(el => revealObserver.observe(el))

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const homeContent = document.querySelector('.home-content')  // ← changed class
      if (homeContent && scrolled < window.innerHeight) {
        homeContent.style.transform = `translateY(${scrolled * 0.3}px)`
        homeContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Particles />
      <Navbar />
      <Home />   
      <About />
      <Projects />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App