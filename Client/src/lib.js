import { useEffect, useRef, useState } from 'react'

// Fires once, the first time an element scrolls into view.
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView]
}

// Which section is currently on screen, for the nav highlight.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [ids])

  return active
}

export function useScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const read = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    read()
    window.addEventListener('scroll', read, { passive: true })
    window.addEventListener('resize', read)
    return () => {
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', read)
    }
  }, [])

  return pct
}

// Counts from 0 up to `to` once `start` becomes true.
export function useCountUp(to, start, ms = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min((now - t0) / ms, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, start, ms])

  return value
}

// Nudges an element toward the cursor while it's hovered.
export function useMagnet(pull = 0.25) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const move = (e) => {
      const b = el.getBoundingClientRect()
      const x = e.clientX - b.left - b.width / 2
      const y = e.clientY - b.top - b.height / 2
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`
    }
    const clear = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', clear)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', clear)
    }
  }, [pull])

  return ref
}

// Moves a card's glow to follow the cursor.
export function spotlight(e) {
  const b = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - b.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - b.top}px`)
}
