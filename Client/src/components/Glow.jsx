import { useEffect, useRef } from 'react'
import './Glow.css'

// Soft light that trails the cursor.
export default function Glow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      el.style.setProperty('--gx', `${e.clientX}px`)
      el.style.setProperty('--gy', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} className="glow" aria-hidden="true" />
}
