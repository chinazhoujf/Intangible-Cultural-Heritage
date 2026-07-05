import { useState, useEffect, useCallback } from 'react'

type Slide = {
  id: number
  name: string
  enName: string
  era: string
  description: string
  image: string
  color: string
}

const slides: Slide[] = [
  {
    id: 1,
    name: '缂丝',
    enName: 'Ke-Si',
    era: '汉代工艺',
    description: '通经断纬的织中圣品，一寸缂丝一寸金。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20kesi%20silk%20tapestry%20weaving%20close%20up%20detail%2C%20intricate%20gold%20and%20red%20threads%2C%20imperial%20dragon%20pattern%2C%20museum%20exhibition%20lighting%2C%20warm%20red%20beige%20tones%2C%20editorial%20photography',
    color: '#b8392c',
  },
  {
    id: 2,
    name: '青瓷',
    enName: 'Qing-Ci',
    era: '商周瓷器',
    description: '雨过天青云破处，这般颜色做将来。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20longquan%20celadon%20porcelain%20vase%20close%20up%2C%20ice%20crack%20glaze%2C%20jade%20green%20color%2C%20museum%20dark%20background%2C%20soft%20spotlight%20lighting%2C%20artistic%20composition%2C%20muted%20red%20border',
    color: '#5c7a6a',
  },
  {
    id: 3,
    name: '苗银',
    enName: 'Miao-Yin',
    era: '先秦银饰',
    description: '苗家女儿的盛装，蝴蝶妈妈的故事。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=miao%20silver%20headdress%20ornament%20detail%20shot%2C%20intricate%20filigree%20butterfly%20pattern%2C%20miao%20minority%20jewelry%2C%20dark%20velvet%20background%2C%20soft%20red%20accent%20lighting%2C%20museum%20exhibit',
    color: '#8a7a5c',
  },
  {
    id: 4,
    name: '昆曲',
    enName: 'Kun-Qu',
    era: '元代戏曲',
    description: '百戏之祖水磨腔，牡丹亭上三生路。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kunqu%20opera%20performer%20on%20traditional%20stage%2C%20elaborate%20water%20sleeve%20movement%2C%20traditional%20chinese%20costume%20with%20red%20and%20gold%20embroidery%2C%20dramatic%20stage%20lighting%2C%20ink%20wash%20backdrop%2C%20artistic%20composition',
    color: '#a04040',
  },
  {
    id: 5,
    name: '皮影',
    enName: 'Pi-Ying',
    era: '汉代影戏',
    description: '一张牛皮演绎千古故事，三根竹签撑起百年人生。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20shadow%20puppetry%20silhouette%20on%20illuminated%20white%20cloth%2C%20intricate%20cut%20patterns%20of%20ancient%20general%20warrior%20figure%2C%20warm%20backlit%20lighting%2C%20red%20and%20ochre%20tones%2C%20museum%20exhibition%20view',
    color: '#7a3c3c',
  },
  {
    id: 6,
    name: '紫砂',
    enName: 'Zi-Sha',
    era: '明代茶具',
    description: '一把茶壶里的宋式哲学，紫砂泥料五色土。',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yixing%20purple%20clay%20teapot%20still%20life%2C%20artistic%20zen%20composition%2C%20warm%20brown%20clay%20texture%2C%20tea%20ceremony%20setting%20on%20bamboo%20mat%2C%20soft%20natural%20lighting%2C%20red%20seal%20stamp%20accent%2C%20editorial%20photography',
    color: '#6b4a3a',
  },
]

export default function HeritageCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goNext = useCallback(() => {
    setDirection('right')
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection('left')
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [goNext])

  const active = slides[current]

  return (
    <section id="carousel" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f4e4dc 0%, #ede0d5 50%, #f4e4dc 100%)' }}>
      {/* 背景纹样 —— 中式回纹装饰 */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #b8392c 0px, #b8392c 2px, transparent 2px, transparent 24px), repeating-linear-gradient(-45deg, #b8392c 0px, #b8392c 2px, transparent 2px, transparent 24px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
        {/* 标题区域 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#b8392c]/60" />
              <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#b8392c]">
                六艺 · 数字图谱
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-[#3d1f1f] leading-none">
              六大非遗
            </h2>
            <p className="font-serif text-base md:text-lg text-[#5c2a2a]/70 mt-4 max-w-md">
              左右点击查看六大非遗技艺专题，每件作品背后都是一段文化传承。
            </p>
          </div>

          {/* 计数 */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <span className="font-serif text-5xl md:text-7xl font-black text-[#b8392c] leading-none">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="h-10 w-px bg-[#b8392c]/30" />
            <span className="font-serif text-2xl md:text-3xl text-[#5c2a2a]/40 font-bold">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* 轮播主体 */}
        <div className="relative">
          {/* 主内容区 */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(61, 31, 31, 0.15), 0 0 0 1px rgba(184, 57, 44, 0.15)' }}>
            {/* 图片 */}
            <img
              key={active.id}
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover transition-opacity duration-700 ease-out"
              style={{ animation: direction === 'right' ? 'slideInRight 0.9s ease-out' : 'slideInLeft 0.9s ease-out' }}
            />

            {/* 左侧红色渐变遮罩 —— 放置文字 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d1f1f]/85 via-[#5c2a2a]/40 to-transparent pointer-events-none" />

            {/* 左上装饰 —— 中式回纹角 */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#b8392c]" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#b8392c]" />
                </div>
                <span className="font-display text-[10px] tracking-[0.35em] text-[#f4e4dc] uppercase">
                  {active.era}
                </span>
              </div>
            </div>

            {/* 右下装饰 —— 回纹角 */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10">
              <div className="w-8 h-8 relative">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-[#b8392c]" />
                <div className="absolute bottom-0 right-0 w-1 h-full bg-[#b8392c]" />
              </div>
            </div>

            {/* 左侧文字区 */}
            <div className="absolute inset-y-0 left-0 w-full md:w-1/2 flex items-center z-10">
              <div className="px-8 md:px-16 max-w-xl">
                <div className="font-display text-[11px] tracking-[0.4em] text-[#e8b8a8] uppercase mb-4">
                  {active.enName}
                </div>
                <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-[#f4e4dc] leading-none mb-6">
                  {active.name}
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#b8392c]" />
                  <span className="font-display text-[10px] tracking-[0.3em] text-[#e8b8a8] uppercase">
                    {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-serif text-base md:text-lg text-[#f4e4dc]/80 leading-relaxed max-w-sm mb-8">
                  {active.description}
                </p>
                <a
                  href={`#craft-${active.id}`}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-[#b8392c] text-[#f4e4dc] font-display text-[11px] tracking-[0.3em] uppercase hover:bg-[#a32e22] transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(184, 57, 44, 0.4)' }}
                >
                  查看详情
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 中式风格控制按钮 —— 左右箭头 */}
          <button
            onClick={goPrev}
            aria-label="上一张"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-20 md:w-16 md:h-24 flex items-center justify-center bg-[#3d1f1f]/60 backdrop-blur-sm border-y border-r border-[#b8392c]/40 text-[#f4e4dc] hover:bg-[#b8392c] transition-all duration-300 group"
          >
            {/* 菱形装饰 + 箭头 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 bg-[#b8392c] rotate-45 group-hover:bg-[#f4e4dc] transition-colors" />
              <span className="text-2xl md:text-3xl font-serif">‹</span>
              <div className="w-2 h-2 bg-[#b8392c] rotate-45 group-hover:bg-[#f4e4dc] transition-colors" />
            </div>
          </button>

          <button
            onClick={goNext}
            aria-label="下一张"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-20 md:w-16 md:h-24 flex items-center justify-center bg-[#3d1f1f]/60 backdrop-blur-sm border-y border-l border-[#b8392c]/40 text-[#f4e4dc] hover:bg-[#b8392c] transition-all duration-300 group"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 bg-[#b8392c] rotate-45 group-hover:bg-[#f4e4dc] transition-colors" />
              <span className="text-2xl md:text-3xl font-serif">›</span>
              <div className="w-2 h-2 bg-[#b8392c] rotate-45 group-hover:bg-[#f4e4dc] transition-colors" />
            </div>
          </button>
        </div>

        {/* 底部缩略图导航 —— 中式菱形按钮 */}
        <div className="mt-10 md:mt-14 flex items-center justify-center gap-3 md:gap-5 flex-wrap">
          {slides.map((slide, i) => {
            const isActive = current === i
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setDirection(i > current ? 'right' : 'left')
                  setCurrent(i)
                }}
                className="group flex flex-col items-center"
              >
                {/* 中式菱形装饰 */}
                <div
                  className={`w-6 h-6 md:w-7 md:h-7 rotate-45 transition-all duration-500 flex items-center justify-center ${
                    isActive
                      ? 'bg-[#b8392c] scale-110'
                      : 'bg-transparent border border-[#b8392c]/50 hover:border-[#b8392c] hover:scale-110'
                  }`}
                  style={isActive ? { boxShadow: '0 0 16px rgba(184, 57, 44, 0.6)' } : {}}
                >
                  <span
                    className={`-rotate-45 text-[10px] md:text-xs font-serif font-bold ${
                      isActive ? 'text-[#f4e4dc]' : 'text-[#b8392c]'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* 标签名 */}
                <span
                  className={`font-serif text-[10px] md:text-xs tracking-widest mt-3 transition-colors ${
                    isActive ? 'text-[#b8392c] font-bold' : 'text-[#5c2a2a]/50 group-hover:text-[#b8392c]'
                  }`}
                >
                  {slide.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* 底部装饰 —— 中式回纹线 */}
        <div className="mt-16 md:mt-20 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b8392c]/30 to-transparent" />
          <div className="w-3 h-3 bg-[#b8392c]/40 rotate-45" />
          <div className="font-display text-[10px] tracking-[0.4em] text-[#b8392c]/60 uppercase">
            华夏传承 · 千年技艺
          </div>
          <div className="w-3 h-3 bg-[#b8392c]/40 rotate-45" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b8392c]/30 to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0.3; transform: translateX(30px) scale(1.02); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0.3; transform: translateX(-30px) scale(1.02); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </section>
  )
}
