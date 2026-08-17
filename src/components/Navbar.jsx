 import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (id) => {
    setMobileOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navItems = ['home', 'about', 'projects', 'portfolio', 'contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 5%' : '1rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 221, 77, 0.15)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#ffdd4d',
          textShadow: '0 0 20px rgba(255, 221, 77, 0.3)',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('home')}
      >
        Chinaza.dev
      </div>

      {!isMobile && (
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                onClick={() => scrollToSection(item)}
                style={{
                  color: 'rgba(255, 221, 77, 0.7)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  textTransform: 'capitalize',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffdd4d'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 221, 77, 0.7)'
                }}
              >
                {item}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: '#ffdd4d',
                    boxShadow: '0 0 10px rgba(255, 221, 77, 0.3)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      )}

      {isMobile && (
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffdd4d',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
          }}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {isMobile && mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 221, 77, 0.2)',
            padding: '2rem 5%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 999,
            animation: 'slideDown 0.3s ease',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                color: 'rgba(255, 221, 77, 0.7)',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 600,
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                borderBottom: '1px solid rgba(255, 221, 77, 0.1)',
                paddingBottom: '1rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffdd4d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 221, 77, 0.7)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}

export default Navbar