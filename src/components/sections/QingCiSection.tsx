import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './QingCiSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function QingCiSection({ craft }: { craft: Craft }) {
  const accentColor = '#5A7F6B'
  const label = '陶瓷 · 雨过天青云破处'

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const detailImages = [
    img('longquan celadon porcelain vase detail, crackle glaze texture, museum lighting, close up macro photography, jade green color'),
    img('ceramic artisan hands throwing clay on pottery wheel, traditional Chinese porcelain workshop, warm light, close up hands'),
    img('celadon tea set collection, Song dynasty style, elegant arrangement, dramatic side lighting, dark background, product photography'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['雨过天青', '冰裂纹开', '如玉温润'][i] || '',
    description: para.slice(0, 60) + '…',
  }))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }

  return (
    <section id={`craft-${craft.id}`} className="relative overflow-hidden">
      <div
        className="ambient-light-bg"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: `radial-gradient(circle, ${accentColor}25 0%, transparent 60%)`,
        }}
      />

      <div
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        <div
          className="qingci-ink-wash ink-wash-1"
          style={{
            background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
          }}
        />
        <div
          className="qingci-ink-wash ink-wash-2"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${accentColor}10 0%, transparent 60%)`,
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
          }}
        />
        <div
          className="qingci-ink-wash ink-wash-3"
          style={{
            background: `radial-gradient(ellipse at 70% 60%, ${accentColor}08 0%, transparent 50%)`,
            transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -8}px)`,
          }}
        />

        <div
          className="qingci-vase-float"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 6}deg)`,
          }}
        >
          <div className="qingci-vase-glow" style={{ background: accentColor }} />
          <img
            src={craft.hero}
            alt={craft.name}
            className="qingci-vase-img"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 text-center px-6">
          <Reveal>
            <div
              className="font-display text-[11px] tracking-[0.3em] uppercase font-bold mb-6"
              style={{ color: accentColor }}
            >
              {craft.index} · {label}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-serif font-black leading-none mb-4"
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                color: '#3d1f1f',
                letterSpacing: '0.1em',
                textShadow: `0 0 60px ${accentColor}30`,
              }}
            >
              {craft.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="font-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: 'rgba(61, 31, 31, 0.5)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div
                className="w-20 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60)` }}
              />
              <SealStamp text={craft.seal} size="md" />
              <div
                className="w-20 h-px"
                style={{ background: `linear-gradient(90deg, ${accentColor}60, transparent)` }}
              />
            </div>
          </Reveal>
        </div>

        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-4"
          style={{ transform: `translateX(calc(-50% + ${mousePos.x * 30}px))` }}
        >
          {craft.palette?.slice(0, 3).map((col, i) => (
            <div
              key={col}
              className="w-8 h-8 rounded-full border-2 border-cream shadow-lg"
              style={{
                background: col,
                boxShadow: `0 4px 20px ${col}60`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-3 space-y-8">
            <Reveal>
              <div className="bz-shell-forest overflow-hidden rounded-[1.5rem] light-sweep-container">
                <div className="bz-core relative overflow-hidden">
                  <img
                    src={detailImages[0]}
                    alt="青瓷细节"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6">
                    <span className="eyebrow" style={{ background: 'rgba(253,251,247,0.85)', color: '#131210' }}>
                      {craft.category} · 釉色
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-serif text-xl md:text-2xl font-black text-cream mb-1">雨过天青云破处</div>
                    <div className="font-serif text-sm text-cream/80">这般颜色做将来</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
              {detailImages.slice(1).map((image, i) => (
                <Reveal key={i} delay={100 + i * 80}>
                  <div className="bz-shell overflow-hidden rounded-2xl light-sweep-container h-full">
                    <div className="bz-core relative overflow-hidden h-full">
                      <img
                        src={image}
                        alt={['匠人之手', '器之大成'][i]}
                        className="w-full aspect-square object-cover transition-transform duration-[1200ms] hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="font-serif font-bold text-cream text-sm">
                          {['匠人之手', '器之大成'][i]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={150}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Palette · 代表色
                  </span>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {craft.palette?.map((col, i) => (
                      <div
                        key={col}
                        className="palette-color aspect-square rounded-lg"
                        style={{
                          background: col,
                          boxShadow: `0 2px 8px ${col}40`,
                          animationDelay: `${i * 0.08}s`,
                        }}
                        title={col}
                      />
                    ))}
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    五色 · 青为首
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Pattern · 纹样
                  </span>
                  <div className="w-full aspect-[4/3] mt-4 overflow-hidden rounded-lg">
                    <div className="pattern-breathe w-full h-full">
                      <SilkWeavePattern className="w-full h-full" color={accentColor} />
                    </div>
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    莲纹 · 出淤泥而不染
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bz-shell-forest glow-border-card">
                <div className="bz-core p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="eyebrow eyebrow-forest">AI · 问道</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-sm text-ink/75 leading-relaxed mb-4">
                    想知道青瓷为何"千峰翠色"？
                  </p>
                  <InkButton variant="forest" className="w-full justify-center text-sm">
                    问 AI 寻幽探胜
                  </InkButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <p
              className="font-serif text-2xl md:text-3xl text-ink leading-[1.5] max-w-4xl mx-auto text-center mb-4"
              style={{ textShadow: '0 1px 0 rgba(244, 228, 220, 0.5)' }}
            >
              {craft.abstract}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-16 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60)` }}
              />
              <div className="bronze-line w-16 opacity-60 decorative-line" />
              <div
                className="w-16 h-px"
                style={{ background: `linear-gradient(90deg, ${accentColor}60, transparent)` }}
              />
            </div>
          </Reveal>
        </div>

        <div className="space-y-24 mb-24">
          {craft.article.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
              >
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-3xl opacity-30 blur-xl"
                      style={{ background: accentColor }}
                    />
                    <img
                      src={detailImages[i % detailImages.length]}
                      alt={['溯源', '匠心', '传承'][i] || '细节'}
                      className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div
                    className="font-display text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ color: accentColor }}
                  >
                    {['Chapter 01', 'Chapter 02', 'Chapter 03'][i]}
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
              <span className="eyebrow">Featured · 青瓷之美</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                悬停 · 探寻玉质瓷魂
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
              <span className="eyebrow">Craft · 七十二道工序</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                点击翻转 · 窥见匠心
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {craft.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <FlipCard
                  frontTitle={step.title}
                  frontSubtitle={`第 ${i + 1} 道`}
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
