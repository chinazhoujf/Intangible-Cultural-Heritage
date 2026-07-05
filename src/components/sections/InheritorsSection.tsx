import { inheritors } from '../../data/inheritors'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'

export default function InheritorsSection() {
  return (
    <section id="inheritors" className="relative py-32 md:py-40" style={{ background: 'linear-gradient(180deg, #ede0d5 0%, #faf0e8 50%, #f4e4dc 100%)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#b8392c]/60" />
                <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#b8392c]">
                  Section 05 · Makers
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-ink leading-none">
                传承者
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-serif text-base md:text-lg text-ink/70 leading-relaxed">
                三位匠人，三种人生。他们的手记得纹路，他们的口记得故事。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6 md:space-y-8">
          {inheritors.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <div style={{ background: 'rgba(61,31,31,0.04)', border: '1px solid rgba(184,57,44,0.12)', padding: '0.625rem', boxShadow: '0 20px 60px rgba(184,57,44,0.08)' }}>
                <div className="p-0 overflow-hidden bg-cream">
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-4 relative">
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="w-full h-full object-cover min-h-[260px] md:min-h-[340px]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/70 pointer-events-none hidden lg:block" />
                      <div className="absolute bottom-5 left-5">
                        <div style={{ background: 'rgba(244,228,220,0.92)', border: '1px solid rgba(184,57,44,0.15)', padding: '0.5rem' }}>
                          <div className="p-3 bg-cream">
                            <div className="font-serif text-xl md:text-2xl font-black text-ink">
                              {p.name}
                            </div>
                            <div className="font-display text-[10px] tracking-[0.25em] text-ink/50 mt-1 uppercase">
                              {p.craft} · {p.region} · {p.years}年
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-8 md:p-10">
                      <div className="flex items-start gap-3 mb-6">
                        <SealStamp text={p.name[1] || '引'} size="sm" />
                        <blockquote className="font-serif text-xl md:text-2xl text-ink leading-[1.5]">
                          「{p.quote}」
                        </blockquote>
                      </div>
                      <div className="space-y-5 pt-2 border-t border-vermilion/20">
                        {p.dialogue.map((d, j) => (
                          <div key={j} className="flex gap-4">
                            <span className="font-display text-[10px] tracking-[0.3em] text-vermilion uppercase mt-1 flex-shrink-0">
                              问 {j + 1}
                            </span>
                            <div className="flex-1">
                              <p className="font-serif text-sm md:text-base text-ink/80 leading-relaxed mb-2">
                                {d.q}
                              </p>
                              <div className="flex items-start gap-2">
                                <span className="font-display text-[10px] tracking-[0.3em] text-bronze uppercase mt-1">答</span>
                                <p className="font-serif text-sm md:text-base text-ink/75 leading-relaxed">
                                  {d.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-3 p-8 md:p-10 bg-cream-soft/60 border-l border-vermilion/15">
                      <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase mb-4">
                        Profile
                      </div>
                      <div className="space-y-4">
                        {[
                          { k: '姓名', v: p.name },
                          { k: '年龄', v: `${p.age} 岁` },
                          { k: '技艺', v: p.craft },
                          { k: '从艺', v: `${p.years} 年` },
                          { k: '地区', v: p.region },
                        ].map((r) => (
                          <div key={r.k} className="pb-3 border-b border-vermilion/15 last:border-0 last:pb-0">
                            <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase mb-1">
                              {r.k}
                            </div>
                            <div className="font-serif text-sm text-ink font-bold">{r.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
