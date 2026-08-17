 import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socials = [
    { icon: <FaTwitter />, href: 'https://twitter.com/yourusername' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername' },
    { icon: <FaGithub />, href: 'https://github.com/yourusername' },
    { icon: <FaEnvelope />, href: 'mailto:chinaza@email.com' },
  ]

  return (
    <footer
      style={{
        padding: '3rem 5%',
        borderTop: '1px solid rgba(255, 221, 77, 0.15)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        background: '#000000',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              background: '#0a0a0a',
              border: '1px solid rgba(255, 221, 77, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 221, 77, 0.7)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '1.2rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffdd4d'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.borderColor = '#ffdd4d'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 221, 77, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0a0a0a'
              e.currentTarget.style.color = 'rgba(255, 221, 77, 0.7)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(255, 221, 77, 0.15)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p style={{ color: 'rgba(255, 221, 77, 0.6)', fontSize: '0.9rem' }}>
        © 2026 Chinaza Rita. Built with React + Vite + Passion
      </p>
    </footer>
  )
}

export default Footer