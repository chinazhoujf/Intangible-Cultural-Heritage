import type { Craft } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import InkButton from '../ui/InkButton'
import SilkWeavePattern from '../ui/SilkWeavePattern'
import HoverRevealCard from '../ui/HoverRevealCard'
import FlipCard from '../ui/FlipCard'
import GridMotion from '../ui/GridMotion'
import './CraftSection.css'

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_4_3`

export default function KeSiSection({ craft }: { craft: Craft }) {
  const accentColor = '#6B5329'
  const label = '织造 · 一寸缂丝一寸金'

  const weaveItems = [
    '通经', '断纬', '缂丝', '宋画', '织圣', '一寸金', '通经断纬',
    '刻丝', '朱克柔', '沈子蕃', '吴圻', '御制', '乾隆', '三希堂',
    '缂绣', '山水', '花鸟', '人物', '书法', '兰亭序', '赤壁赋',
    '宫毯', '缂毛', '妆花', '云锦', '蜀锦', '宋锦', '缂丝',
  ]

  const detailImages = [
    img('kesi silk tapestry detail close up, intricate warp and weft threads, golden vermilion pattern, museum lighting, editorial photograph'),
    img('kesi artisan hands weaving silk loom, traditional Chinese craft workshop, warm golden light, close up of hands'),
    img('kesi tapestry masterpiece, museum quality Chinese silk textile, dramatic side lighting, dark background, product photography'),
  ]

  const hoverCards = craft.article.slice(0, 3).map((para, i) => ({
    image: detailImages[i % detailImages.length],
    title: ['通经断纬', '寸金寸丝', '宋画缂绣'][i] || '',
    description: para.slice(0, 60) + '…',
  }))

  return (
    <section id={`craft-${craft.id}`} className="relative overflow-hidden">
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
          background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
        }}
      />

      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <GridMotion items={weaveItems} gradientColor={accentColor} className="w-full h-full" />

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6">
            <div
              className="font-display text-[11px] tracking-[0.3em] uppercase font-bold mb-4"
              style={{ color: accentColor }}
            >
              {craft.index} · {label}
            </div>
            <h1
              className="font-serif font-black leading-none"
              style={{
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                color: '#3d1f1f',
                textShadow: '0 2px 20px rgba(244, 228, 220, 0.8)',
              }}
            >
              {craft.name}
            </h1>
            <div
              className="font-display text-[12px] tracking-[0.3em] mt-4 uppercase"
              style={{ color: 'rgba(61, 31, 31, 0.5)' }}
            >
              {craft.enName} · {craft.era}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <div className="w-16 h-px" style={{ background: accentColor, opacity: 0.5 }} />
          <SealStamp text={craft.seal} size="md" />
          <div className="w-16 h-px" style={{ background: accentColor, opacity: 0.5 }} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-5 md:gap-6 mb-16 md:mb-24">
          <Reveal delay={100} className="lg:col-span-8">
            <div className="bz-shell-forest h-full overflow-hidden rounded-[1.5rem] light-sweep-container">
              <div className="bz-core h-full relative overflow-hidden">
                <img
                  src={craft.hero}
                  alt={craft.name}
                  className="w-full h-full object-cover aspect-[16/9] md:aspect-[4/3] transition-transform duration-[1200ms] hover:scale-105"
                  loading="lazy"
                  style={{ minHeight: 360 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-6 left-6">
                  <span
                    className="eyebrow"
                    style={{ background: 'rgba(253,251,247,0.85)', color: '#131210' }}
                  >
                    {craft.category} · {craft.name}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="font-display text-[10px] tracking-[0.3em] text-milk/50 uppercase">
                    {craft.enName}
                  </div>
                  <div className="font-serif text-sm text-milk/90 mt-1">{craft.origin}</div>
                </div>
              </div>
            </div>
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

        <div className="space-y-20 md:space-y-28 mb-20 md:mb-28">
          {craft.article.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="light-sweep-container overflow-hidden rounded-2xl">
                  <img
                    src={detailImages[i % detailImages.length]}
                    alt={['溯源', '匠心', '传承'][i] || '细节'}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div
                    className="w-10 h-0.5 mb-4 rounded-full"
                    style={{ background: accentColor }}
                  />
                  <h3 className="font-serif text-2xl md:text-3xl font-black text-ink mb-4">
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
            <div className="flex items-end justify-between mb-8">
              <span className="eyebrow">Featured · 缂丝亮点</span>
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
                  {craft.steps.length} steps · 点击翻转
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
