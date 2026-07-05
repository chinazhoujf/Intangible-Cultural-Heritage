import { useState, useEffect, useRef } from 'react'
import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import './CraftSection.css'

type Props = {
  craft: Craft
  accentColor?: string
  accentLabel?: string
}

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

function AnimatedTitle({ text, accentColor }: { text: string; accentColor: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="font-serif text-4xl md:text-5xl font-black text-ink leading-none mt-2">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="title-char"
          style={{
            animationDelay: isVisible ? `${i * 0.12}s` : '0s',
            animationPlayState: isVisible ? 'running' : 'paused',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

function AnimatedSeal({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={isVisible ? 'stamp-animated' : 'opacity-0'}>
      <SealStamp text={text} size={size} />
    </div>
  )
}

function HeroImageCard({ craft, accentColor }: { craft: Craft; accentColor: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="hero-card-3d h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hero-card-inner h-full bz-shell-forest"
        style={{
          transform: `rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
        }}
      >
        <div className="bz-core h-full relative overflow-hidden rounded-[1.25rem]">
          <div className="hero-card-glow" />
          <img
            src={craft.hero}
            alt={craft.name}
            className={`w-full h-full object-cover aspect-[16/9] md:aspect-[4/3] ${isVisible ? 'hero-image-reveal' : 'opacity-0'}`}
            loading="lazy"
            style={{ minHeight: 360 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none" />

          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span
              className="eyebrow"
              style={{ background: 'rgba(253,251,247,0.85)', color: '#131210' }}
            >
              {craft.category} · {craft.name}
            </span>
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right">
            <div className="font-display text-[10px] tracking-[0.3em] text-milk/50 uppercase">
              {craft.enName}
            </div>
            <div className="font-serif text-sm text-milk/90 mt-1">{craft.origin}</div>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 max-w-[50%]">
            <div
              className="font-serif font-black leading-none text-cream mb-2"
              style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}
            >
              {craft.name}
            </div>
            <div className="font-serif text-sm md:text-base text-milk/90 leading-relaxed">
              {craft.abstract.slice(0, 50)}…
            </div>
          </div>

          <div
            className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
              filter: 'blur(15px)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function ImageTextRow({
  image,
  title,
  text,
  accentColor,
  reverse = false,
  index = 0,
}: {
  image: string
  title: string
  text: string
  accentColor: string
  reverse?: boolean
  index?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`,
      }}
    >
      <div className={`light-sweep-container overflow-hidden rounded-2xl ${reverse ? 'md:order-2' : ''}`}>
        <img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className={reverse ? 'md:order-1' : ''}>
        <div
          className="w-10 h-0.5 mb-4 rounded-full"
          style={{ background: accentColor }}
        />
        <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mb-4">
          {title}
        </h3>
        <p className="font-serif text-base text-ink/70 leading-[2]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function CraftShowcase({
  craft,
  accentColor = '#3B4A3E',
  accentLabel,
}: Props) {
  const label = accentLabel || craft.category
  const stepsCount = craft.steps.length

  const detailImages = [
    img(`${craft.imageSeed} craft detail close up, traditional Chinese ${craft.category} art, intricate details, warm lighting, editorial photography`),
    img(`${craft.imageSeed} artisan working hands, traditional Chinese craftsmanship, close up of hands creating ${craft.name}, workshop setting, warm golden light`),
    img(`${craft.imageSeed} finished masterpiece, museum quality ${craft.name}, dramatic lighting, dark background, product photography`),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['精雕细琢', '匠心独运', '传世之美'][i] || '',
    description: para.slice(0, 60) + '…',
  }))

  return (
    <section id={`craft-${craft.id}`} className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="ambient-light-bg"
        style={{ top: '10%', left: '-10%', animationDelay: '0s' }}
      />
      <div
        className="ambient-light-bg"
        style={{
          bottom: '20%',
          right: '-15%',
          animationDelay: '4s',
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="flex items-start justify-between gap-8 mb-10 md:mb-16">
            <div className="flex items-center gap-5">
              <AnimatedSeal text={craft.seal} size="md" />
              <div>
                <span
                  className="font-display text-[11px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: accentColor }}
                >
                  {craft.index} · {label}
                </span>
                <AnimatedTitle text={craft.name} accentColor={accentColor} />
                <div className="font-display text-[11px] tracking-[0.3em] text-ink/40 mt-2 uppercase">
                  {craft.enName} · {craft.era}
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase text-right">
                {craft.origin}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-5 md:gap-6 mb-16 md:mb-24">
          <Reveal delay={100} className="lg:col-span-8">
            <HeroImageCard craft={craft} accentColor={accentColor} />
          </Reveal>

          <Reveal delay={180} className="lg:col-span-4">
            <div className="space-y-5 md:space-y-6 h-full flex flex-col">
              <div className="bz-shell glow-border-card flex-1">
                <div className="bz-core p-5 md:p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Palette · 代表色
                  </span>
                  <div className="flex gap-2 mt-4">
                    {craft.palette?.map((col, i) => (
                      <div
                        key={col}
                        className="palette-color flex-1 aspect-square rounded-md"
                        style={{
                          background: col,
                          boxShadow: '0 1px 0 rgba(0,0,0,0.08)',
                          animationDelay: `${i * 0.1}s`,
                        }}
                        title={col}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bz-shell glow-border-card flex-1">
                <div className="bz-core p-5 md:p-6 light-sweep-container">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Pattern · 纹样
                  </span>
                  <div className="w-full aspect-[4/3] mt-4 overflow-hidden rounded-md">
                    <div className="pattern-breathe w-full h-full">
                      <SilkWeavePattern className="w-full h-full" color={accentColor} />
                    </div>
                  </div>
                  <div className="font-serif text-xs text-ink/40 text-center mt-3">
                    回纹 · {craft.name}经典纹样
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mb-16 md:mb-24">
          <Reveal>
            <p
              className="font-serif text-2xl md:text-3xl text-ink leading-[1.4] max-w-4xl mb-4"
              style={{ textShadow: '0 1px 0 rgba(244, 228, 220, 0.5)' }}
            >
              {craft.abstract}
            </p>
            <div className="bronze-line w-32 opacity-60 decorative-line" />
          </Reveal>
        </div>

        <div className="space-y-16 md:space-y-24 mb-20 md:mb-28">
          {craft.article.map((para, i) => (
            <ImageTextRow
              key={i}
              image={detailImages[i % detailImages.length]}
              title={['溯源', '匠心', '传承'][i] || '细节'}
              text={para}
              accentColor={accentColor}
              reverse={i % 2 === 1}
              index={i}
            />
          ))}
        </div>

        <div className="mb-16 md:mb-20">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <span className="eyebrow">Featured · 亮点</span>
              <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                悬停查看
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
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

        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-end justify-between mb-8">
                <span className="eyebrow">Craft · Process</span>
                <span className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                  {stepsCount} steps · 点击翻转
                </span>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {craft.steps.map((step, i) => (
                <Reveal key={i} delay={i * 80}>
                  <FlipCard
                    frontTitle={step.title}
                    frontSubtitle={`第 ${i + 1} 步`}
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

          <div className="lg:col-span-4">
            <Reveal delay={200}>
              <div className="bz-shell-forest sticky top-28 glow-border-card">
                <div className="bz-core p-6 md:p-8 light-sweep-container">
                  <div className="flex items-start justify-between mb-5">
                    <span className="eyebrow eyebrow-forest">AI · 解码</span>
                    <SealStamp text={craft.seal} size="sm" />
                  </div>
                  <p className="font-serif text-sm md:text-base text-ink/75 leading-relaxed mb-6">
                    想深入了解 {craft.name}？让 AI 进一步解释。
                  </p>
                  <div className="border-t border-ink/10 pt-5 mb-5">
                    <div className="font-display text-[10px] tracking-[0.3em] text-ink/40 uppercase mb-3">
                      热门问题
                    </div>
                    <div className="space-y-3">
                      {craft.tags.slice(0, 3).map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 font-serif text-sm text-ink/70 transition-colors hover:text-vermilion cursor-pointer p-2 rounded-lg hover:bg-vermilion/5"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                            style={{ background: accentColor }}
                          />
                          {t}是什么意思？
                        </div>
                      ))}
                    </div>
                  </div>
                  <InkButton variant="forest" className="w-full justify-center">
                    向 AI 提问
                  </InkButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-2 pt-8 border-t border-ink/10">
            {craft.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-glow px-3 py-1 font-serif text-xs transition-all duration-300 rounded-full cursor-pointer hover:text-vermilion hover:scale-105"
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
