import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'

export default function Footer() {
  return (
    <footer id="postscript" className="relative pt-32 md:pt-40 pb-16 bg-ink text-cream">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 0%, rgba(184,57,44,0.25), transparent 70%)' }} />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 pb-12 border-b border-cream/10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-vermilion/60" />
                <span className="font-display text-[10px] tracking-[0.4em] uppercase text-vermilion">
                  PS · Postscript
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-cream leading-none tracking-tight">
                非遗
                <span className="text-cream/30 font-display text-[0.4em] align-top tracking-[0.3em] ml-2">
                  / Atlas
                </span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="font-serif text-base text-cream/60 leading-relaxed">
                这是一本数字出版物。它不是终点，而是一次邀请。愿你的手，也能接住这一束光。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <Reveal>
            <div className="md:col-span-2">
              <div className="flex items-start gap-4 mb-6">
                <SealStamp text="遗" size="md" />
                <div>
                  <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase">
                    Non-material
                  </div>
                  <div className="font-serif text-lg text-cream/85 mt-1">
                    国家级非物质文化遗产<br />
                    数字出版物 No.01
                  </div>
                </div>
              </div>
              <p className="font-serif text-sm text-cream/55 leading-relaxed max-w-md">
                本作品旨在以当代设计语言呈现中国传统技艺。内容供文化传播使用，如需商业授权请与传承人直接联系。
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-3">
                Sections
              </div>
              <div className="space-y-2">
                {['卷首', '目录', '六艺', '时光轴', '传承者', 'AI 解码'].map((s, i) => (
                  <div key={s} className="font-serif text-sm text-cream/75 flex items-center justify-between border-b border-cream/5 py-1.5">
                    <span>{s}</span>
                    <span className="font-display text-[10px] tracking-[0.2em] text-cream/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-3">
                Credits
              </div>
              <div className="space-y-2 font-serif text-sm text-cream/75">
                <div>Edition · 第一版</div>
                <div>Year · 2026</div>
                <div className="pt-2 mt-2 border-t border-cream/10">
                  <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-2 mt-3">
                    Design
                  </div>
                  <div className="text-cream/75">Editorial Luxury ·</div>
                  <div className="text-cream/50 text-xs">
                    Inspired by taste-skill
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-display text-[10px] tracking-[0.3em] text-cream/30 uppercase">
            © 2026 · Intangible Cultural Heritage Atlas
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-breath" />
            <span className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase">
              Live · Edition 01
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
