import { useEffect, useRef } from 'react'
import './Sky.css'

// Canvas night sky: drifting points that link to their neighbours and to the
// cursor, the odd meteor, and every so often a satellite tracking slowly across
// with a blinking light. Falls back to a still starfield for reduced motion.
export default function Sky() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dots = []
    let meteors = []
    let satellites = []
    let frame = 0
    let raf = 0
    const pointer = { x: -999, y: -999 }

    const dot = (d) => {
      ctx.beginPath()
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(180, 210, 255, 0.75)'
      ctx.fill()
    }

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(Math.round((width * height) / 15000), 110)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.4,
      }))
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < -20) d.x = width + 20
        if (d.x > width + 20) d.x = -20
        if (d.y < -20) d.y = height + 20
        if (d.y > height + 20) d.y = -20

        const dx = d.x - pointer.x
        const dy = d.y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (dist > 0 && dist < 130) {
          const push = ((130 - dist) / 130) * 0.7
          d.x += (dx / dist) * push
          d.y += (dy / dist) * push
        }
        dot(d)
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 116) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(90, 150, 230, ${(1 - dist / 116) * 0.22})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const pd = Math.hypot(dots[i].x - pointer.x, dots[i].y - pointer.y)
        if (pd < 170) {
          ctx.beginPath()
          ctx.moveTo(dots[i].x, dots[i].y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.strokeStyle = `rgba(53, 192, 255, ${(1 - pd / 170) * 0.35})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      frame += 1
      if (frame % 150 === 0 && meteors.length < 2 && Math.random() < 0.75) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.35,
          v: Math.random() * 5 + 7,
          len: Math.random() * 140 + 130,
        })
      }
      meteors = meteors.filter((m) => m.x < width + 280 && m.y < height + 280)
      for (const m of meteors) {
        const tx = m.x - m.len * 0.92
        const ty = m.y - m.len * 0.38
        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty)
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(tx, ty)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.stroke()
        m.x += m.v * 0.92
        m.y += m.v * 0.38
      }

      // satellites: rare, slow, straight line, with a light that blinks
      if (frame % 500 === 0 && satellites.length < 1 && Math.random() < 0.6) {
        const goingRight = Math.random() < 0.5
        satellites.push({
          x: goingRight ? -30 : width + 30,
          y: 50 + Math.random() * height * 0.55,
          vx: (goingRight ? 1 : -1) * (Math.random() * 0.5 + 0.55),
          vy: (Math.random() - 0.5) * 0.12,
          blink: Math.random() * 6,
        })
      }
      satellites = satellites.filter((s) => s.x > -50 && s.x < width + 50)
      for (const s of satellites) {
        s.x += s.vx
        s.y += s.vy
        s.blink += 0.16

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * 15, s.y - s.vy * 15)
        ctx.strokeStyle = 'rgba(150, 190, 255, 0.14)'
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(s.x, s.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(214, 232, 255, 0.9)'
        ctx.fill()

        const blink = 0.35 + 0.65 * Math.abs(Math.sin(s.blink))
        ctx.beginPath()
        ctx.arc(s.x, s.y, 3.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(53, 192, 255, ${0.2 * blink})`
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }

    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onOut = (e) => {
      if (!e.relatedTarget) {
        pointer.x = -999
        pointer.y = -999
      }
    }

    build()
    if (still) {
      dots.forEach(dot)
    } else {
      raf = requestAnimationFrame(render)
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerout', onOut)
    }
    window.addEventListener('resize', build)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onOut)
      window.removeEventListener('resize', build)
    }
  }, [])

  return <canvas ref={ref} className="sky" aria-hidden="true" />
}
