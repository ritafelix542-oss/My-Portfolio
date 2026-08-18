 import { useEffect, useRef } from 'react'
import { FaLaptopCode } from 'react-icons/fa'


const About = () => {
  const statsRef = useRef(null)

  useEffect(() => {
    const statNumbers = statsRef.current?.querySelectorAll('.stat-number')
    if (!statNumbers) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target)
          let current = 0
          const increment = target / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              const suffix = target === 100 ? '%' : target === 24 ? '/7' : '+'
              entry.target.textContent = target + suffix
              clearInterval(timer)
            } else {
              const suffix = target === 100 ? '%' : target === 24 ? '/7' : '+'
              entry.target.textContent = Math.floor(current) + suffix
            }
          }, 30)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    statNumbers.forEach(stat => observer.observe(stat))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-header reveal text-center text-4xl">
        <span className="section-tag text-amber-300  p-b-4 "><h3>About Me</h3></span>
        <h2
           className='text-amber-400 text-2xl pt-4'>
          Passionate about <span  style={{ color: '#ffdd4d' }} className=''>clean code</span> & design
        </h2>
        <p className='font-bold'>A frontend developer who loves turning ideas into reality through code.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div className="reveal">
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #ffdd4d, #ff9500)',
              padding: '3px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(255, 221, 77, 0.3)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#0a0a0a',
                borderRadius: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: '#ffdd4d',
                position: 'relative',
              }}
            >
              <img src="/myPics.jpeg" alt="" />
            </div>
          </div>

          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {[
              { target: 6, label: 'Projects Built' },
              { target: 3, label: 'Technologies' },
              { target: 100, label: 'Dedication' },
              { target: 24, label: 'Learning' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: '#0a0a0a',
                  border: '1px solid rgba(255, 221, 77, 0.15)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'rgba(255, 221, 77, 0.4)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 221, 77, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255, 221, 77, 0.15)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="stat-number"
                  data-target={stat.target}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#ffdd4d',
                    textShadow: '0 0 10px rgba(255, 221, 77, 0.3)',
                  }}
                >
                  0
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255, 221, 77, 0.6)', marginTop: '0.3rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#ffdd4d',
            }}
          >
            Hello! I'm Chinaza Rita
          </h3>
          <p style={{ color: 'rgba(255, 221, 77, 0.65)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            I'm a passionate frontend developer with a love for creating stunning, user-friendly web applications. I specialize in React, Vite, HTML, CSS, and JavaScript.
          </p>
          <p style={{ color: 'rgba(255, 221, 77, 0.65)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            From movie apps to e-commerce platforms, I enjoy building projects that solve real problems and provide great user experiences. I'm constantly learning and improving my skills.
          </p>
          <p style={{ color: 'rgba(255, 221, 77, 0.65)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            When I'm not coding, I love exploring Nigerian cuisine — my Afang Soup recipe site is proof of that!
          </p>
          <button className="btn btn-primary text-amber-400" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  )
}

export default About