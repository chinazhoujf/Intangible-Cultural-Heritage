import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './PiYingSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function PiYingSection({ craft }: { craft: Craft }) {
  const accentColor = '#8B4513'
  const warmLight = '#E8A84C'
  const label = '皮影 · 一张牛皮演千秋'

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const detailImages = [
    img('chinese shadow puppet show silhouette, traditional leather puppets behind illuminated screen, warm amber light, dramatic shadows, folk art'),
    img('shadow puppet artisan hands carving leather, traditional craft workshop, warm light, close up of hands working with tools'),
    img('collection of ornate chinese shadow puppets, intricate cutouts, colorful leather, dramatic lighting, museum display'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['灯影千秋', '皮里春秋', '一口千古'][i] || '',
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
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        <div className="piying-screen">
          <div className="piying-screen-glow" style={{ background: warmLight }} />
          <div
            className="piying-screen-frame"
            style={{ borderColor: accentColor }}
          />
        </div>

        <div
          className="piying-light-beam"
          style={{
            transform: `translateX(${mousePos.x * 80}px) translateY(${mousePos.y * 30}px)`,
            background: `radial-gradient(ellipse at center, ${warmLight}40 0%, transparent 60%)`,
          }}
        />

        <div
          className="piying-shadow piying-shadow-1"
          style={{
            transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 20}px)`,
          }}
        >
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20shadow%20puppet%20warrior%20silhouette%20traditional%20opera%20character%20black%20silhouette%20transparent%20background&image_size=square"
            alt="皮影"
          />
        </div>
        <div
          className="piying-shadow piying-shadow-2"
          style={{
            transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -15}px)`,
          }}
        >
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20shadow%20puppet%20female%20character%20silhouette%20traditional%20opera%20black%20silhouette%20transparent%20background&image_size=square"
            alt="皮影"
          />
        </div>

        <div className="piying-curtain-top" style={{ background: accentColor }} />
        <div className="piying-curtain-bottom" style={{ background: accentColor }} />

        <div className="relative z-20 text-center px-6">
          <Reveal>
            <div
              className="font-display text-[11px] tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: warmLight }}
            >
              {craft.index} · {label}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative inline-block">
              <h1
                className="font-serif font-black leading-none"
                style={{
                  fontSize: 'clamp(4rem, 14vw, 9rem)',
                  color: '#f4e4dc',
                  letterSpacing: '0.15em',
                  textShadow: `0 0 30px ${warmLight}60, 0 4px 20px rgba(0,0,0,0.5)`,
                }}
              >
                {craft.name}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="font-display text-[12px] tracking-[0.4em] uppercase mt-6"
              style={{ color: 'rgba(244, 228, 220, 0.6)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="piying-deco-line" style={{ background: warmLight }} />
              <SealStamp text={craft.seal} size="md" />
              <div className="piying-deco-line" style={{ background: warmLight }} />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-4 mt-8">
              {['生', '旦', '净', '丑'].map((role, i) => (
                <div
                  key={role}
                  className="piying-role-chip"
                  style={{
                    borderColor: `${warmLight}50`,
                    color: '#f4e4dc',
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {role}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={100}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Palette · 影之色
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
                    五色 · 灯影幻
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Pattern · 影纹
                  </span>
                  <div className="w-full aspect-[4/3] mt-4 overflow-hidden rounded-lg">
                    <div className="pattern-breathe w-full h-full">
                      <SilkWeavePattern className="w-full h-full" color={accentColor} />
                    </div>
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    万字纹 · 吉祥如意
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bz-shell-forest glow-border-card">
                <div className="bz-core p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="eyebrow eyebrow-forest">AI · 问影</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-sm text-ink/75 leading-relaxed mb-4">
                    想知道皮影戏为何"一口道尽千古事"？
                  </p>
                  <InkButton variant="forest" className="w-full justify-center text-sm">
                    问 AI · 灯影寻踪
                  </InkButton>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        alt={['灯影千秋', '刀刻春秋', '皮里乾坤'][i]}
                        className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                          i === 0 ? 'aspect-[16/9]' : 'aspect-square'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="font-serif font-black text-cream text-xl mb-1">
                          {['灯影千秋', '刀刻春秋', '皮里乾坤'][i]}
                        </div>
                        <div className="font-serif text-xs text-cream/70">
                          {['一张牛皮演千秋', '精雕细刻见匠心', '十指舞动百万兵'][i]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <p
                className="font-serif text-2xl md:text-3xl text-ink leading-[1.6] mb-4"
                style={{ textShadow: '0 1px 0 rgba(244, 228, 220, 0.5)' }}
              >
                {craft.abstract}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-px" style={{ background: accentColor, opacity: 0.4 }} />
                <div className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
                <div className="w-12 h-px" style={{ background: accentColor, opacity: 0.4 }} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-28 mb-24">
          {craft.article.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`grid md:grid-cols-2 gap-10 items-center`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-20 blur-md"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${warmLight}, transparent)`,
                      }}
                    />
                    <img
                      src={detailImages[i % detailImages.length]}
                      alt={['溯源', '匠心', '传承'][i] || '细节'}
                      className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="font-display text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ color: accentColor }}
                  >
                    {['SHADOW PLAY', 'LEATHER CRAFT', 'CENTURY LEGACY'][i]}
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
              <span className="eyebrow">Featured · 影之华章</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                悬停 · 探寻皮影之美
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
              <span className="eyebrow">Craft · 皮影九技</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                点击翻转 · 细品灯影
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {craft.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <FlipCard
                  frontTitle={step.title}
                  frontSubtitle={`第 ${i + 1} 技`}
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
