import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './ZiShaSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function ZiShaSection({ craft }: { craft: Craft }) {
  const accentColor = '#7A5C45'
  const clayColor = '#9B7653'
  const label = '紫砂 · 人间珠宝安足取'

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const detailImages = [
    img('yixing zisha teapot detail close up, purple clay texture, traditional Chinese teaware, dramatic side lighting, macro product photography'),
    img('potter hands shaping clay on wheel, traditional Yixing zisha workshop, warm light, close up of hands working'),
    img('collection of Yixing zisha teapots, various shapes, clay texture, arranged on wooden table, warm ambient lighting'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['紫玉金砂', '阳羡茶经', '壶中乾坤'][i] || '',
    description: para.slice(0, 60) + '…',
  }))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }

  const potNames = ['石瓢', '西施', '掇球', '仿古', '井栏', '德钟']

  return (
    <section id={`craft-${craft.id}`} className="relative overflow-hidden">
      <div
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden zisha-hero-bg"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        <div
          className="zisha-clay-texture"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, ${clayColor}30 0%, transparent 60%)`,
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -10}px)`,
          }}
        />
        <div
          className="zisha-clay-texture zisha-clay-2"
          style={{
            background: `radial-gradient(ellipse at 30% 60%, ${accentColor}20 0%, transparent 50%)`,
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          }}
        />

        <div className="zisha-pot-array">
          {potNames.map((name, i) => {
            const angle = (i / potNames.length) * Math.PI * 2 - Math.PI / 2
            const radius = 200
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius * 0.4
            const delay = i * 0.15
            return (
              <div
                key={name}
                className="zisha-pot-item"
                style={{
                  transform: `translate(${x + mousePos.x * 20}px, ${y + mousePos.y * 10}px)`,
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="zisha-pot-glow" style={{ background: clayColor }} />
                <div className="zisha-pot-name" style={{ color: accentColor }}>
                  {name}
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="zisha-center-pot"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 6}deg)`,
          }}
        >
          <div className="zisha-center-glow" style={{ background: clayColor }} />
          <img
            src={craft.hero}
            alt={craft.name}
            className="zisha-center-img"
          />
        </div>

        <div className="relative z-20 text-center px-6 w-full">
          <Reveal>
            <div
              className="font-display text-[11px] tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: accentColor }}
            >
              {craft.index} · {label}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-serif font-black leading-none mb-4"
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                color: '#3d1f1f',
                letterSpacing: '0.15em',
                background: `linear-gradient(180deg, #3d1f1f 0%, ${accentColor} 50%, #3d1f1f 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 2px 8px ${clayColor}30)`,
              }}
            >
              {craft.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="font-display text-[12px] tracking-[0.4em] uppercase"
              style={{ color: 'rgba(61, 31, 31, 0.5)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="zisha-seal-line" style={{ background: accentColor }} />
              <SealStamp text={craft.seal} size="md" />
              <div className="zisha-seal-line" style={{ background: accentColor }} />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-3 mt-8">
              {craft.palette?.slice(0, 3).map((col, i) => (
                <div
                  key={col}
                  className="zisha-color-orb"
                  style={{
                    background: col,
                    boxShadow: `0 4px 20px ${col}60, inset 0 2px 4px rgba(255,255,255,0.3)`,
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
          <div className="lg:col-span-6 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              {detailImages.map((image, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`bz-shell overflow-hidden rounded-2xl light-sweep-container h-full ${
                      i === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <div className="bz-core relative overflow-hidden h-full group">
                      <img
                        src={image}
                        alt={['紫玉金砂', '匠人之手', '壶中天地'][i]}
                        className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                          i === 0 ? 'aspect-[16/9]' : 'aspect-square'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="font-serif font-black text-cream text-lg">
                          {['紫玉金砂', '匠人之手', '壶中天地'][i]}
                        </div>
                        <div className="font-serif text-xs text-cream/70 mt-1">
                          {['阳羡茶经 · 紫砂为贵', '千锤百炼 · 匠心独运', '壶里乾坤 · 茶中岁月'][i]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <Reveal delay={150}>
              <div className="bz-shell-forest glow-border-card overflow-hidden">
                <div className="bz-core p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="eyebrow eyebrow-forest">AI · 问壶</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-base text-ink/75 leading-relaxed mb-5">
                    想知道紫砂壶为何"人间珠宝安足取"？
                  </p>
                  <InkButton variant="forest" className="w-full justify-center">
                    问 AI · 紫砂寻幽
                  </InkButton>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
              <Reveal delay={200}>
                <div className="bz-shell glow-border-card">
                  <div className="bz-core p-5 light-sweep-container">
                    <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                      Palette · 砂之色
                    </span>
                    <div className="grid grid-cols-5 gap-1.5 mt-3">
                      {craft.palette?.map((col, i) => (
                        <div
                          key={col}
                          className="palette-color aspect-square rounded-full"
                          style={{
                            background: col,
                            boxShadow: `0 1px 4px ${col}50`,
                            animationDelay: `${i * 0.08}s`,
                          }}
                          title={col}
                        />
                      ))}
                    </div>
                    <div className="font-serif text-xs text-ink/40 text-center mt-3">
                      五色土 · 紫砂为贵
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="bz-shell glow-border-card">
                  <div className="bz-core p-5 light-sweep-container">
                    <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                      Pattern · 砂纹
                    </span>
                    <div className="w-full aspect-square mt-3 overflow-hidden rounded-lg">
                      <div className="pattern-breathe w-full h-full">
                        <SilkWeavePattern className="w-full h-full" color={accentColor} />
                      </div>
                    </div>
                    <div className="font-serif text-xs text-ink/40 text-center mt-3">
                      回纹 · 绵延不断
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="bz-shell glow-border-card">
                <div className="bz-core p-5">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase mb-3 block">
                    Teapots · 壶型
                  </span>
                  <div className="grid grid-cols-6 gap-2">
                    {potNames.map((name, i) => (
                      <div
                        key={name}
                        className="text-center transition-all duration-300 cursor-pointer hover:scale-110"
                      >
                        <div
                          className="w-full aspect-square rounded-full mb-1 flex items-center justify-center"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${clayColor}40, ${accentColor}20)`,
                            border: `1px solid ${accentColor}30`,
                          }}
                        />
                        <div
                          className="font-serif text-xs"
                          style={{ color: accentColor }}
                        >
                          {name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
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
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60)` }} />
                <div className="w-3 h-3 rotate-45" style={{ background: accentColor }} />
                <div className="w-16 h-px" style={{ background: `linear-gradient(90deg, ${accentColor}60, transparent)` }} />
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
                      className="absolute -inset-2 rounded-2xl opacity-20 blur-xl"
                      style={{
                        background: `radial-gradient(circle, ${clayColor}, transparent)`,
                      }}
                    />
                    <img
                      src={detailImages[i % detailImages.length]}
                      alt={['溯源', '匠心', '传承'][i] || '细节'}
                      className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
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
              <span className="eyebrow">Featured · 砂之华章</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                悬停 · 细品紫砂韵味
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
              <span className="eyebrow">Craft · 紫砂九艺</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mt-3">
                点击翻转 · 细品匠心
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {craft.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <FlipCard
                  frontTitle={step.title}
                  frontSubtitle={`第 ${i + 1} 艺`}
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
