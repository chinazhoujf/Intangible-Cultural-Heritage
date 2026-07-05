import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './MiaoYinSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function MiaoYinSection({ craft }: { craft: Craft }) {
  const accentColor = '#7C6C54'
  const silverColor = '#C8BFA8'
  const label = '银饰 · 穿在身上的史诗'

  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const detailImages = [
    img('miao silver jewelry detail close up, intricate filigree work, traditional Chinese minority ethnic ornament, dramatic side lighting, macro photography'),
    img('miao artisan silversmith hands hammering silver, traditional craft workshop, warm golden light, close up hands working'),
    img('miao silver headdress masterpiece, full set of traditional miao ethnic jewelry, dark background, museum quality, product photography'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['花丝镶嵌', '百鸟朝凤', '银装素裹'][i] || '',
    description: para.slice(0, 60) + '…',
  }))

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setScrollY(-rect.top)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id={`craft-${craft.id}`}
      className="relative overflow-hidden"
    >
      <div
        className="miao-pattern-flow miao-pattern-left"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="miao-pattern-flow miao-pattern-right"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      />

      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="miao-silver-radiate" style={{ borderColor: `${silverColor}40` }} />
        <div className="miao-silver-radiate miao-radiate-2" style={{ borderColor: `${silverColor}30` }} />
        <div className="miao-silver-radiate miao-radiate-3" style={{ borderColor: `${silverColor}20` }} />

        <div className="miao-silver-shimmer" style={{ background: silverColor }} />

        <div className="relative z-20 text-center px-6 w-full">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="miao-ornament-line" style={{ background: silverColor }} />
              <span
                className="font-display text-[10px] tracking-[0.4em] uppercase font-bold"
                style={{ color: silverColor }}
              >
                {craft.index} · {label}
              </span>
              <div className="miao-ornament-line" style={{ background: silverColor }} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative inline-block">
              <h1
                className="font-serif font-black leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                  color: '#3d1f1f',
                  letterSpacing: '0.15em',
                  background: `linear-gradient(180deg, #3d1f1f 0%, ${accentColor} 50%, #3d1f1f 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 2px 20px ${silverColor}30)`,
                }}
              >
                {craft.name}
              </h1>
              <div
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-12"
                style={{
                  background: `linear-gradient(180deg, transparent, ${silverColor}, transparent)`,
                  opacity: 0.6,
                }}
              />
              <div
                className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-12"
                style={{
                  background: `linear-gradient(180deg, transparent, ${silverColor}, transparent)`,
                  opacity: 0.6,
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="font-display text-[12px] tracking-[0.4em] uppercase mt-6"
              style={{ color: 'rgba(61, 31, 31, 0.5)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="miao-corner-deco tl" style={{ borderColor: silverColor }} />
              <SealStamp text={craft.seal} size="md" />
              <div className="miao-corner-deco br" style={{ borderColor: silverColor }} />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-3 mt-10">
              {craft.palette?.slice(0, 4).map((col, i) => (
                <div
                  key={col}
                  className="miao-color-dot"
                  style={{
                    background: col,
                    boxShadow: `0 0 15px ${col}60`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-5">
              {detailImages.map((image, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`bz-shell overflow-hidden rounded-2xl light-sweep-container h-full ${
                      i === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="bz-core relative overflow-hidden h-full group">
                      <img
                        src={image}
                        alt={['银饰之美', '匠人之心', '盛装之华'][i]}
                        className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                          i === 0 ? 'aspect-[16/9]' : 'aspect-square'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="font-serif font-bold text-cream text-lg">
                          {['银饰之美', '匠人之心', '盛装之华'][i]}
                        </div>
                        <div className="font-serif text-xs text-cream/70 mt-1">
                          {['花丝镶嵌 · 精工细作', '千锤百炼 · 匠心传承', '苗家盛装 · 银装素裹'][i]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={150}>
              <div className="bz-shell-forest glow-border-card overflow-hidden">
                <div className="bz-core p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="eyebrow eyebrow-forest">AI · 问银</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-base text-ink/75 leading-relaxed mb-5">
                    想知道苗银为何如此精美？
                  </p>
                  <InkButton variant="forest" className="w-full justify-center">
                    问 AI · 探秘苗银
                  </InkButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Palette · 银之色
                  </span>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {craft.palette?.map((col, i) => (
                      <div
                        key={col}
                        className="palette-color aspect-square rounded-full"
                        style={{
                          background: col,
                          boxShadow: `0 2px 10px ${col}50`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                        title={col}
                      />
                    ))}
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    五色 · 银为魂
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Pattern · 苗纹
                  </span>
                  <div className="w-full aspect-[4/3] mt-4 overflow-hidden rounded-lg">
                    <div className="pattern-breathe w-full h-full">
                      <SilkWeavePattern className="w-full h-full" color={accentColor} />
                    </div>
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    蝴蝶纹 · 苗族图腾
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="miao-ornament-line" style={{ background: accentColor }} />
              <p
                className="font-serif text-2xl md:text-3xl text-ink leading-[1.5] text-center"
                style={{ textShadow: '0 1px 0 rgba(244, 228, 220, 0.5)' }}
              >
                {craft.abstract}
              </p>
              <div className="miao-ornament-line" style={{ background: accentColor }} />
            </div>
          </Reveal>
        </div>

        <div className="space-y-28 mb-24">
          {craft.article.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`grid md:grid-cols-12 gap-10 items-center`}
              >
                <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-2xl opacity-20 blur-lg"
                      style={{ background: silverColor }}
                    />
                    <img
                      src={detailImages[i % detailImages.length]}
                      alt={['溯源', '匠心', '传承'][i] || '细节'}
                      className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                      loading="lazy"
                    />
                    <div
                      className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2"
                      style={{ borderColor: silverColor }}
                    />
                    <div
                      className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2"
                      style={{ borderColor: silverColor }}
                    />
                  </div>
                </div>
                <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-1 text-right' : ''}`}>
                  <div
                    className="font-display text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ color: accentColor }}
                  >
                    {['CHAPTER ONE', 'CHAPTER TWO', 'CHAPTER THREE'][i]}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-black text-ink mb-5">
                    {['溯源', '匠心', '传承'][i] || '细节'}
                  </h3>
                  <p className="font-serif text-base text-ink/70 leading-[2]">
                    {para}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="miao-ornament-line w-16" style={{ background: accentColor }} />
                <span className="eyebrow">Featured · 银之华章</span>
                <div className="miao-ornament-line w-16" style={{ background: accentColor }} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink">
                悬停 · 触摸银饰温度
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hoverCards.map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <HoverRevealCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  accentColor={accentColor}
                  index={i}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <Reveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="miao-ornament-line w-16" style={{ background: accentColor }} />
                <span className="eyebrow">Craft · 银饰九工</span>
                <div className="miao-ornament-line w-16" style={{ background: accentColor }} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink">
                点击翻转 · 细品匠心
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {craft.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <FlipCard
                  frontTitle={step.title}
                  frontSubtitle={`第 ${i + 1} 工`}
                  frontNumber={String(i + 1).padStart(2, '0')}
                  backTitle={step.title}
                  backDescription={step.desc}
                  accentColor={accentColor}
                  index={i}
                  sealText={craft.seal}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 pt-10 border-t border-ink/10">
            {craft.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-glow px-4 py-1.5 font-serif text-sm transition-all duration-300 rounded-full cursor-pointer hover:scale-105"
                style={{
                  color: 'rgba(19,18,16,0.7)',
                  border: `1px solid ${accentColor}30`,
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                # {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
