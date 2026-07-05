import { useRef, useState } from 'react'
import { timeline } from '../../data/timeline'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'

export default function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amt = dir === 'left' ? -360 : 360
    scrollRef.current.scrollBy({ left: amt, behavior: 'smooth' })
  }

  return (
    <section id="timeline" className="relative py-32 md:py-40" style={{ background: 'linear-gradient(180deg, #f4e4dc 0%, #faf0e8 30%, #f4e4dc 100%)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#b8392c]/60" />
                <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#b8392c]">
                  Section 04 · Timeline
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-ink leading-none">
                时光轴
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                aria-label="向左滚动"
                className="w-10 h-10 rounded-full bg-vermilion/10 hover:bg-vermilion hover:text-cream text-vermilion flex items-center justify-center transition-all duration-500"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="向右滚动"
                className="w-10 h-10 rounded-full bg-vermilion/10 hover:bg-vermilion hover:text-cream text-vermilion flex items-center justify-center transition-all duration-500"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-serif text-base md:text-lg text-ink/70 max-w-2xl leading-relaxed mb-10 md:mb-14">
            从新石器时代到当代，十二个节点，串联起非遗的千年脉络。
          </p>
        </Reveal>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {timeline.map((ev, i) => (
            <Reveal key={i} delay={i * 60} className="flex-shrink-0">
              <div
                className="cursor-pointer group"
                style={{ scrollSnapAlign: 'start', background: 'rgba(61,31,31,0.04)', border: '1px solid rgba(184,57,44,0.12)', padding: '0.5rem', boxShadow: '0 12px 40px rgba(184,57,44,0.05)' }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="p-5 md:p-6 relative w-72 md:w-80 bg-cream">
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-vermilion/20">
                    <div className="font-display text-[11px] tracking-[0.3em] text-vermilion font-bold uppercase">
                      {String(i + 1).padStart(2, '0')} · {ev.year}
                    </div>
                    <div className="font-serif text-[11px] text-ink/50">{ev.era}</div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 h-10 bg-vermilion/40 flex-shrink-0" />
                    <div>
                      <div className="font-serif text-lg md:text-xl font-bold text-ink leading-tight mb-1">
                        {ev.title}
                      </div>
                      <div className="font-display text-[10px] tracking-[0.25em] text-ink/40 uppercase">
                        {ev.craft}
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-sm text-ink/65 leading-relaxed">
                    {ev.desc}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-700 ${
                      active === i ? 'max-h-40 mt-5 pt-4 border-t border-vermilion/20' : 'max-h-0'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <SealStamp text="录" size="sm" />
                      <div className="font-serif text-sm text-ink/75 leading-relaxed flex-1">
                        {ev.title}是 {ev.era} 时期的重要文化事件，与 {ev.craft} 技艺的发展密切相关。
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-vermilion/20 flex items-center justify-between">
                    <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                      {active === i ? '点击收起' : '点击展开'}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        active === i ? 'bg-vermilion' : 'bg-ink/20'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-vermilion/25" />
            <div className="font-display text-[10px] tracking-[0.4em] text-ink/40 uppercase">
              公元前 5000 年 · 当代
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-vermilion/25" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
