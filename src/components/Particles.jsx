 import { useEffect, useRef } from 'react'

const Particles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width, height
    const particles = []
    const particleCount = 80
    const connectionDistance = 150
    const mouseDistance = 200
    let mouse = { x: null, y: null }
    let animationId

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    resize()

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.size = Math.random() * 4 + 1
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        if (mouse.x !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouseDistance) {
            const force = (mouseDistance - dist) / mouseDistance
            this.x += (dx / dist) * force * 2
            this.y += (dy / dist) * force * 2
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 221, 77, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 221, 77, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      // Black background fill
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default Particles