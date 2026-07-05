import { useEffect, useState } from 'react'

const items = [
  { id: 'cover', label: '卷首', en: 'Cover' },
  { id: 'toc', label: '目录', en: 'Index' },
  { id: 'crafts', label: '六艺', en: 'Crafts' },
  { id: 'timeline', label: '时光轴', en: 'Timeline' },
  { id: 'inheritors', label: '传承者', en: 'Makers' },
  { id: 'ai', label: 'AI 解码', en: 'Decode' },
  { id: 'postscript', label: '后记', en: 'PS' },
]

export default function PageNav() {
  const [active, setActive] = useState('cover')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300)
      let best = items[0].id
      let bestDistance = Infinity
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        const distance = Math.abs(top - 120)
        if (distance < bestDistance) {
          bestDistance = distance
          best = item.id
        }
      }
      setActive(best)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!scrolled) return null

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50" style={{ background: 'rgba(244,228,220,0.92)', border: '1px solid rgba(184,57,44,0.15)', padding: '0.5rem', boxShadow: '0 10px 40px rgba(184,57,44,0.15)', backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center gap-0.5 md:gap-1">
        {items.map((item, i) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-2.5 md:px-3 py-1.5 text-[11px] tracking-[0.2em] rounded-full transition-all duration-500 ${
                isActive
                  ? 'bg-vermilion text-cream font-bold'
                  : 'text-ink/60 hover:text-ink hover:bg-vermilion/10'
              }`}
              aria-label={item.label}
            >
              <span className="hidden md:inline">{String(i + 1).padStart(2, '0')}</span>
              <span className={`md:ml-1.5 font-serif ${isActive ? 'text-cream' : 'text-ink/70'}`}>
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
