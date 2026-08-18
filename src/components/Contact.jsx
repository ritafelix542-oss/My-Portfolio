  import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setToast({ show: true, message: 'Message sent successfully!' })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(10, 10, 10, 0.8)',
      }}
    >
      <div className="section-header reveal">
        <span className="section-tag">Get In Touch</span>
        <h2>
          Let's build something <span style={{ color: '#ffdd4d' }}>amazing</span>
        </h2>
        <p>Have a project in mind? I'd love to hear about it!</p>
      </div>

      <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gap: '1.5rem',
            marginTop: '3rem',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <FormGroup label="Your name" type="text" id="name" />
            <FormGroup label="Your Email" type="email" id="email" />
          </div>
          <FormGroup label="Subject" type="text" id="subject" />
          <FormGroup label="Your Message" type="textarea" id="message" />
          <button type="submit" className="btn btn-primary" style={{ justifySelf: 'center', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Send Message <FaArrowRight />
          </button>
        </form>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: `translateX(-50%) ${toast.show ? 'translateY(0)' : 'translateY(100px)'}`,
          background: '#0a0a0a',
          border: '1px solid #ffdd4d',
          color: '#ffdd4d',
          padding: '1rem 2rem',
          borderRadius: '12px',
          fontWeight: 600,
          zIndex: 9999,
          opacity: toast.show ? 1 : 0,
          transition: 'all 0.4s ease',
          boxShadow: '0 0 30px rgba(255, 221, 77, 0.3)',
          pointerEvents: 'none',
        }}
      >
        {toast.message}
      </div>
    </section>
  )
}

const FormGroup = ({ label, type, id }) => {
  return (
    <div style={{ position: 'relative' }}>
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder=" "
          required
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 221, 77, 0.15)',
            borderRadius: '12px',
            color: '#ffdd4d',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'all 0.3s ease',
            outline: 'none',
            minHeight: '150px',
            resize: 'vertical',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#ffdd4d'
            e.target.style.boxShadow = '0 0 0 3px rgba(255, 221, 77, 0.15)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(255, 221, 77, 0.15)'
            e.target.style.boxShadow = 'none'
          }}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder=" "
          required
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 221, 77, 0.15)',
            borderRadius: '12px',
            color: '#ffdd4d',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'all 0.3s ease',
            outline: 'none',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#ffdd4d'
            e.target.style.boxShadow = '0 0 0 3px rgba(255, 221, 77, 0.15)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(255, 221, 77, 0.15)'
            e.target.style.boxShadow = 'none'
          }}
        />
      )}
      <label
        htmlFor={id}
        style={{
          position: 'absolute',
          left: '1.2rem',
          top: '1rem',
          color: 'rgba(255, 221, 77, 0.5)',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
          background: '#0a0a0a',
          padding: '0 0.3rem',
        }}
      >
        {label}
      </label>
    </div>
  )
}

export default Contact