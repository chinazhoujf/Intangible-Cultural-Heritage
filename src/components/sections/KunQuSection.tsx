import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './KunQuSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function KunQuSection({ craft }: { craft: Craft }) {
  const accentColor = '#B8392C'
  const label = '戏曲 · 百戏之祖'

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const detailImages = [
    img('kunqu opera performer face close up, traditional Chinese opera makeup, dramatic stage lighting, red and black colors, artistic portrait'),
    img('kunqu opera silk water sleeves flowing, traditional Chinese dance, elegant movement, stage performance, motion blur artistic photography'),
    img('kunqu opera full stage performance, traditional Chinese theater, ornate costumes, dramatic lighting, wide shot'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['水磨腔', '水袖舞', '牡丹亭'][i] || '',
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
    <section
      id={`craft-${craft.id}`}
      className="relative overflow-hidden"
    >
      <div
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        <div className="kunqu-stage-curtain">
          <div
            className="kunqu-curtain-left"
            style={{ transform: `translateX(${mousePos.x * -30}px)` }}
          />
          <div
            className="kunqu-curtain-right"
            style={{ transform: `translateX(${mousePos.x * 30}px)` }}
          />
        </div>

        <div
          className="kunqu-stage-light"
          style={{
            transform: `translateX(${mousePos.x * 50}px)`,
          }}
        />

        <div
          className="kunqu-water-sleeve kunqu-sleeve-left"
          style={{
            transform: `translate(${mousePos.x * -40}px, ${mousePos.y * 20}px) rotate(${-15 + mousePos.x * 10}deg)`,
          }}
        />
        <div
          className="kunqu-water-sleeve kunqu-sleeve-right"
          style={{
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 20}px) rotate(${15 + mousePos.x * -10}deg)`,
          }}
        />

        <div className="relative z-20 text-center px-6">
          <Reveal>
            <div
              className="font-display text-[11px] tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: accentColor }}
            >
              {craft.index} · {label}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative inline-block">
              <div
                className="kunqu-title-decoration kunqu-deco-top"
                style={{ borderColor: accentColor }}
              />
              <h1
                className="font-serif font-black leading-none"
                style={{
                  fontSize: 'clamp(4rem, 14vw, 10rem)',
                  color: accentColor,
                  letterSpacing: '0.2em',
                  textShadow: `0 0 40px ${accentColor}50, 0 4px 8px rgba(0,0,0,0.2)`,
                }}
              >
                {craft.name}
              </h1>
              <div
                className="kunqu-title-decoration kunqu-deco-bottom"
                style={{ borderColor: accentColor }}
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="font-display text-[12px] tracking-[0.4em] uppercase mt-6"
              style={{ color: 'rgba(61, 31, 31, 0.6)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="kunqu-cloud-pattern" style={{ background: accentColor }} />
              <SealStamp text={craft.seal} size="md" />
              <div className="kunqu-cloud-pattern" style={{ background: accentColor }} />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-6 mt-10">
              {['生', '旦', '净', '末', '丑'].map((role, i) => (
                <div
                  key={role}
                  className="kunqu-role-badge"
                  style={{
                    color: i === 1 ? accentColor : '#3d1f1f',
                    borderColor: i === 1 ? accentColor : 'rgba(61, 31, 31, 0.2)',
                    animationDelay: `${i * 0.1}s`,
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
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {detailImages.map((image, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`bz-shell overflow-hidden rounded-2xl light-sweep-container h-full ${
                      i === 0 ? 'md:row-span-2' : ''
                    }`}
                  >
                    <div className="bz-core relative overflow-hidden h-full group">
                      <img
                        src={image}
                        alt={['粉墨春秋', '水袖翩跹', '舞台万象'][i]}
                        className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                          i === 0 ? 'h-full min-h-[400px]' : 'aspect-[4/3]'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="font-serif font-black text-cream text-xl mb-1">
                          {['粉墨春秋', '水袖翩跹', '舞台万象'][i]}
                        </div>
                        <div className="font-serif text-xs text-cream/70">
                          {['百戏之祖 · 雅韵悠长', '长袖善舞 · 柔情似水', '唱念做打 · 四功五法'][i]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <Reveal delay={100}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Role · 行当
                  </span>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {['生', '旦', '净', '末', '丑'].map((role, i) => (
                      <div
                        key={role}
                        className="aspect-square flex items-center justify-center font-serif font-bold rounded-lg transition-all duration-300 cursor-pointer hover:scale-110"
                        style={{
                          color: i === 1 ? accentColor : '#3d1f1f',
                          background: i === 1 ? `${accentColor}15` : 'rgba(61, 31, 31, 0.05)',
                          border: `1px solid ${i === 1 ? accentColor : 'rgba(61, 31, 31, 0.1)'}`,
                        }}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    五大行当 · 生旦净末丑
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Palette · 戏之色
                  </span>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {craft.palette?.map((col, i) => (
                      <div
                        key={col}
                        className="palette-color aspect-square rounded-md"
                        style={{
                          background: col,
                          boxShadow: `0 2px 8px ${col}50`,
                          animationDelay: `${i * 0.08}s`,
                        }}
                        title={col}
                      />
                    ))}
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    五色 · 朱为正
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Pattern · 云纹
                  </span>
                  <div className="w-full aspect-[4/3] mt-4 overflow-hidden rounded-lg">
                    <div className="pattern-breathe w-full h-full">
                      <SilkWeavePattern className="w-full h-full" color={accentColor} />
                    </div>
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    祥云纹 · 如意吉祥
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bz-shell-forest glow-border-card">
                <div className="bz-core p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="eyebrow eyebrow-forest">AI · 听曲</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-sm text-ink/75 leading-relaxed mb-4">
                    想知道"水磨腔"为何婉转动人？
                  </p>
                  <InkButton variant="forest" className="w-full justify-center text-sm">
                    问 AI · 寻音问曲
                  </InkButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="kunqu-cloud-pattern-sm" style={{ background: accentColor }} />
                <p
                  className="font-serif text-2xl md:text-3xl text-ink leading-[1.6]"
                  style={{ textShadow: '0 1px 0 rgba(244, 228, 220, 0.5)' }}
                >
                  {craft.abstract}
                </p>
                <div className="kunqu-cloud-pattern-sm" style={{ background: accentColor }} />
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
                      className="absolute -inset-1 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}30, transparent)`,
                        filter: 'blur(10px)',
                        opacity: 0.5,
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
                    {['THE ORIGIN', 'THE CRAFT', 'THE LEGACY'][i]}
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
              <span className="eyebrow">Featured · 曲之华章</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                悬停 · 共赏昆曲雅韵
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
              <span className="eyebrow">Craft · 四功五法</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                点击翻转 · 体悟戏韵
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {craft.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <FlipCard
                  frontTitle={step.title}
                  frontSubtitle={`第 ${i + 1} 法`}
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
