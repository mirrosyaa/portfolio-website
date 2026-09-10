import { useScrollProgress } from '../lib'
import './ScrollBar.css'

export default function ScrollBar() {
  const pct = useScrollProgress()
  return (
    <div
      className="scrollbar"
      style={{ transform: `scaleX(${pct / 100})` }}
      aria-hidden="true"
    />
  )
}
