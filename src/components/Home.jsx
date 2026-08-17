 const Home = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="home-content" style={{ maxWidth: '900px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.2rem',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 221, 77, 0.4)',
            borderRadius: '100px',
            fontSize: '0.85rem',
            color: '#ffdd4d',
            marginBottom: '2rem',
            animation: 'fadeInDown 0.8s ease forwards',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              background: '#ffdd4d',
              borderRadius: '50%',
              boxShadow: '0 0 10px #ffdd4d',
              animation: 'pulse 2s infinite',
            }}
          />
          Open to collaborations
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#ffdd4d',
            animation: 'fadeInUp 0.8s ease 0.2s forwards',
            opacity: 0,
          }}
        >
          Hi, I'm <span style={{ color: '#ffdd4d', textShadow: '0 0 30px rgba(255, 221, 77, 0.4)' }}>Chinaza</span>
          <br />
          Frontend Developer
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 221, 77, 0.65)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            animation: 'fadeInUp 0.8s ease 0.4s forwards',
            opacity: 0,
          }}
        >
          I build beautiful, responsive, and interactive web experiences using React, Vite, and modern web technologies.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.6s forwards',
            opacity: 0,
          }}
        >
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View My Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}

export default Home