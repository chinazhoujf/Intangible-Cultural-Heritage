import Reveal from '../ui/Reveal'

export default function Cover() {
  return (
    <section id="cover" className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* 全屏背景图 —— 非遗传统建筑/展览风格 */}
      <div className="absolute inset-0">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20cultural%20heritage%20architecture%20view%20from%20above%2C%20ancient%20roof%20tiles%2C%20ink%20wash%20style%2C%20muted%20red%20and%20beige%20tones%2C%20museum%20exhibition%2C%20editorial%20photography%2C%20high%20angle%20shot"
          alt="非遗文化背景"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* 淡红色调渐变遮罩 —— 左侧深色区域用于放置文字，右侧渐亮 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d1f1f]/80 via-[#5c2a2a]/50 to-[#f4e4dc]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4e4dc]/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d1a1a]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 左上角 Logo + 名称 */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#b8392c] flex items-center justify-center" style={{ boxShadow: '0 0 0 2px #f4e4dc, 0 2px 8px rgba(184, 57, 44, 0.4)' }}>
            <span className="font-serif text-[#f4e4dc] text-lg md:text-xl font-bold">非</span>
          </div>
          <div className="font-display text-[11px] md:text-xs tracking-[0.3em] text-[#f4e4dc]/90 uppercase">
            非遗 · ATLAS
          </div>
        </div>
      </div>

      {/* 右上角联系按钮 */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-30">
        <button className="px-5 py-2.5 bg-[#f4e4dc]/20 backdrop-blur-sm border border-[#b8392c]/60 text-[#f4e4dc] text-[11px] tracking-[0.25em] uppercase hover:bg-[#b8392c]/40 transition-all duration-300 rounded-sm">
          联系我
        </button>
      </div>

      {/* 顶部导航文字 */}
      <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-6 md:gap-10">
          {['首页', '目录', '六艺', '时光轴', '传承者', 'AI解码'].map((item, i) => (
            <a
              key={item}
              href={`#${['cover', 'toc', 'crafts', 'timeline', 'inheritors', 'ai'][i]}`}
              className="text-[#f4e4dc]/75 hover:text-[#f4e4dc] text-[11px] md:text-xs tracking-[0.3em] uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* 内容区 —— 文字靠左/右放置，不在中间 */}
      <div className="relative z-10 min-h-[100dvh] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-32 pb-24">
          <div className="max-w-xl">
            {/* 顶部 eyebrow */}
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-10 h-px bg-[#b8392c]/60" />
                <span className="inline-block text-[#b8392c] font-display text-[10px] tracking-[0.4em] uppercase">
                  国家级非物质文化遗产 · 数字图谱
                </span>
              </div>
            </Reveal>

            {/* 大标题 */}
            <Reveal delay={100}>
              <h1 className="font-serif leading-[0.9] font-black text-[#f4e4dc] tracking-tight mb-6">
                <span className="block text-5xl md:text-7xl lg:text-8xl">非·遗</span>
                <span className="block text-3xl md:text-5xl lg:text-6xl text-[#e8b8a8] font-light tracking-[0.15em] mt-3">
                  Atlas
                </span>
              </h1>
            </Reveal>

            {/* 青铜色分隔细线 */}
            <Reveal delay={180}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-16 h-px bg-gradient-to-r from-[#b8392c] to-[#b8392c]/10" />
                <span className="text-[#b8392c] font-serif text-xs tracking-[0.3em]">第一章</span>
              </div>
            </Reveal>

            {/* 副标题 */}
            <Reveal delay={220}>
              <p className="font-serif text-lg md:text-xl text-[#f4e4dc]/70 tracking-wide leading-relaxed max-w-md">
                一张千年技艺的数字图谱。缂丝、青瓷、苗银、昆曲、皮影、紫砂——
                六门非遗，六段人与手的故事。
              </p>
            </Reveal>

            {/* 标签 */}
            <Reveal delay={280}>
              <div className="flex flex-wrap gap-2 mt-8 mb-10">
                {['六大非遗', '千年传承', '数字展览', 'AI解码'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#f4e4dc]/10 border border-[#b8392c]/30 text-[#f4e4dc]/80 text-[10px] tracking-[0.2em] uppercase font-display"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA 按钮 */}
            <Reveal delay={320}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                <a
                  href="#crafts"
                  className="px-10 py-4 bg-[#b8392c] text-[#f4e4dc] font-display text-[11px] tracking-[0.3em] uppercase hover:bg-[#a32e22] transition-colors duration-300 relative group"
                  style={{ boxShadow: '0 4px 20px rgba(184, 57, 44, 0.3)' }}
                >
                  开始探索
                </a>
                <a
                  href="#toc"
                  className="px-10 py-4 bg-[#f4e4dc]/10 border border-[#f4e4dc]/40 text-[#f4e4dc] font-display text-[11px] tracking-[0.3em] uppercase hover:bg-[#f4e4dc]/20 transition-colors duration-300"
                >
                  查看目录
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="font-display text-[10px] tracking-[0.3em] text-[#f4e4dc]/60 uppercase">
          向下滚动
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#b8392c] to-transparent" />
      </div>

      {/* 右下角编号 */}
      <div className="absolute bottom-6 right-6 md:right-10 z-30 text-right">
        <div className="font-display text-[10px] tracking-[0.3em] text-[#b8392c]/80 uppercase">
          Edition 01 · 2026
        </div>
        <div className="font-serif text-3xl md:text-4xl text-[#f4e4dc]/40 font-black mt-1">
          01
        </div>
      </div>
    </section>
  )
}
