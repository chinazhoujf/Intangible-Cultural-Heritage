import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'

const crafts = [
  { id: 1, name: '缂丝', en: 'Ke-Si', era: '汉代', region: '苏州', note: '通经断纬的织中圣品' },
  { id: 2, name: '青瓷', en: 'Qing-Ci', era: '商周', region: '龙泉', note: '雨过天青的釉色之极' },
  { id: 3, name: '苗银', en: 'Miao-Yin', era: '先秦', region: '黔东南', note: '苗家女儿的嫁妆银冠' },
  { id: 4, name: '昆曲', en: 'Kun-Qu', era: '元代', region: '昆山', note: '百戏之祖的水磨唱腔' },
  { id: 5, name: '皮影', en: 'Pi-Ying', era: '汉代', region: '唐山', note: '一张牛皮演绎的千年戏' },
  { id: 6, name: '紫砂', en: 'Zi-Sha', era: '明代', region: '宜兴', note: '一把茶壶里的宋式哲学' },
]

export default function TableOfContents() {
  return (
    <section id="toc" className="relative py-28 md:py-40" style={{ background: 'linear-gradient(180deg, #ede0d5 0%, #f4e4dc 100%)' }}>
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#b8392c]/60" />
                <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#b8392c]">
                  CHAP. 01 · INDEX
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-ink leading-none">
                目录
                <span className="font-display text-base text-ink/40 tracking-[0.3em] ml-4 align-middle uppercase">
                  Six Crafts
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-serif text-base text-ink/60 max-w-md leading-relaxed">
              点击任一条目，跳转到对应的专题页。每节含器物图像、工艺流程与传承者访谈片段。
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          <div className="flex flex-col gap-4 md:gap-5 md:w-[55%]">
            <Reveal>
              <a href="#craft-1" className="block group cursor-pointer" style={{
                background: 'rgba(61, 31, 31, 0.04)',
                border: '1px solid rgba(184, 57, 44, 0.12)',
                padding: '0.625rem',
                boxShadow: '0 20px 60px rgba(184, 57, 44, 0.06)',
              }}>
                <div className="p-6 md:p-8 flex flex-col justify-between relative min-h-[280px] md:min-h-[320px] transition-colors duration-500 bg-cream" style={{ boxShadow: 'inset 0 0 0 1px rgba(184, 57, 44, 0.06)' }}>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[11px] tracking-[0.3em] text-[#b8392c] uppercase font-bold">
                      01
                    </span>
                    <SealStamp text="印" size="sm" />
                  </div>
                  <div className="mt-4">
                    <div className="font-serif font-black text-ink leading-none text-5xl md:text-7xl lg:text-8xl">
                      缂丝
                    </div>
                    <div className="font-display tracking-[0.3em] text-ink/30 mt-2 uppercase text-sm">
                      Ke-Si
                    </div>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                        汉代 · 苏州
                      </div>
                      <div className="font-serif text-sm md:text-base text-ink/60 leading-relaxed max-w-[260px]">
                        通经断纬的织中圣品
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-cream transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 text-sm flex-shrink-0">
                      →
                    </span>
                  </div>
                  <div className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-b from-vermilion/30 to-transparent pointer-events-none" />
                </div>
              </a>
            </Reveal>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              {crafts.slice(1, 3).map((craft, idx) => (
                <Reveal key={craft.id} delay={(idx + 1) * 60} className="flex-1">
                  <a href={`#craft-${craft.id}`} className="block group cursor-pointer h-full" style={{
                    background: 'rgba(61, 31, 31, 0.04)',
                    border: '1px solid rgba(184, 57, 44, 0.12)',
                    padding: '0.625rem',
                  }}>
                    <div className="p-5 md:p-6 flex flex-col justify-between h-full min-h-[180px] transition-colors duration-500 bg-cream">
                      <div className="flex items-start justify-between">
                        <span className="font-display text-[11px] tracking-[0.3em] text-[#b8392c] uppercase font-bold">
                          {String(craft.id).padStart(2, '0')}
                        </span>
                        {idx === 0 && <SealStamp text="印" size="sm" />}
                      </div>
                      <div className="mt-4">
                        <div className="font-serif font-black text-ink leading-none text-3xl md:text-4xl">
                          {craft.name}
                        </div>
                        <div className="font-display tracking-[0.3em] text-ink/30 mt-2 uppercase text-xs">
                          {craft.en}
                        </div>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                          {craft.era} · {craft.region}
                        </div>
                        <span className="w-8 h-8 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-cream transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 text-sm flex-shrink-0">
                          →
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 md:w-[45%]">
            {crafts.slice(3).map((craft, idx) => (
              <Reveal key={craft.id} delay={(idx + 3) * 60}>
                <a href={`#craft-${craft.id}`} className="block group cursor-pointer" style={{
                  background: 'rgba(61, 31, 31, 0.04)',
                  border: '1px solid rgba(184, 57, 44, 0.12)',
                  padding: '0.625rem',
                }}>
                  <div className="p-5 md:p-6 flex items-center gap-4 md:gap-6 transition-colors duration-500 bg-cream">
                    <div className="flex-shrink-0">
                      <span className="font-display text-[11px] tracking-[0.3em] text-[#b8392c] uppercase font-bold">
                        {String(craft.id).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif font-black text-ink leading-none text-2xl md:text-3xl">
                        {craft.name}
                      </div>
                      <div className="font-display tracking-[0.3em] text-ink/30 mt-1.5 uppercase text-xs">
                        {craft.en}
                      </div>
                      <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase mt-2">
                        {craft.era} · {craft.region}
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-cream transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 text-sm flex-shrink-0">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={520}>
          <div className="mt-16 md:mt-24 flex items-center justify-between gap-4 border-t border-vermilion/20 pt-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
              <span className="font-display text-[10px] tracking-[0.3em] text-ink/50 uppercase">
                国家级非物质文化遗产代表性项目
              </span>
            </div>
            <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase hidden sm:block">
              Edition 01 · 2026
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
