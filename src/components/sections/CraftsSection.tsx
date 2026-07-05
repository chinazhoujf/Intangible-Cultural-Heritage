import { crafts } from '../../data/crafts'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import ParallaxCard from '../ui/ParallaxCard'
import KeSiSection from './KeSiSection'
import QingCiSection from './QingCiSection'
import MiaoYinSection from './MiaoYinSection'
import KunQuSection from './KunQuSection'
import PiYingSection from './PiYingSection'
import ZiShaSection from './ZiShaSection'

const craftMap = {
  'ke-si': KeSiSection,
  'qing-ci': QingCiSection,
  'miao-yin': MiaoYinSection,
  'kun-qu': KunQuSection,
  'pi-ying': PiYingSection,
  'zi-sha': ZiShaSection,
} as const

export default function CraftsSection() {
  return (
    <section
      id="crafts"
      className="relative"
      style={{
        background:
          'linear-gradient(180deg, #faf0e8 0%, #f4e4dc 25%, #f4e4dc 75%, #faf0e8 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-20 md:pb-28">
        {/* === 标题区 === */}
        <Reveal>
          {/* 顶部朱砂细线 */}
          <div
            className="h-px w-full mb-10"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(184,57,44,0.55) 50%, transparent 100%)',
            }}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-3">
            <div>
              {/* eyebrow 标签 */}
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-display tracking-[0.3em] uppercase font-medium"
                style={{
                  background: 'rgba(184, 57, 44, 0.1)',
                  color: '#b8392c',
                }}
              >
                CRAFTS · 非遗六艺
              </div>
              {/* 大号衬线字标题 */}
              <h1
                className="font-serif font-black text-ink leading-[0.95] mt-4"
                style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)' }}
              >
                匠 · 心
              </h1>
              <div
                className="font-display text-[11px] tracking-[0.3em] uppercase mt-3"
                style={{ color: 'rgba(61, 31, 31, 0.5)' }}
              >
                SIX ANCIENT CRAFTS · FROM HANDS THAT REMEMBER
              </div>
            </div>
            <div className="hidden md:flex items-start gap-3">
              <SealStamp text="非遗" size="md" />
              <div
                className="font-serif text-sm leading-relaxed max-w-[260px]"
                style={{ color: 'rgba(61, 31, 31, 0.7)' }}
              >
                一寸缂丝一寸金，一窑青瓷一千年。
                <br />
                六门技艺，自指尖传承。
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div
            className="h-px w-32 mt-8 mb-12 md:mb-16"
            style={{
              background:
                'linear-gradient(90deg, rgba(184,57,44,0.4), transparent)',
            }}
          />
        </Reveal>

        {/* === 6 个 craft 卡片网格 === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {crafts.map((craft, i) => (
            <Reveal key={craft.id} delay={i * 70}>
              <a
                href={`#craft-${craft.id}`}
                className="group block h-full"
              >
                <ParallaxCard sealText={craft.seal}>
                  {/* 外层 bz-shell： rgba(61, 31, 31, 0.04) 背景 + rgba(184, 57, 44, 0.12) 边框 */}
                  <div
                    className="h-full p-[0.5rem] rounded-[1.5rem] transition-all duration-500 group-hover:shadow-soft-card"
                    style={{
                      background: 'rgba(61, 31, 31, 0.04)',
                      border: '1px solid rgba(184, 57, 44, 0.12)',
                    }}
                  >
                  {/* 内层 bz-core：cream 背景 */}
                  <div
                    className="h-full rounded-[1.25rem] overflow-hidden relative flex flex-col"
                    style={{ background: '#f4e4dc' }}
                  >
                    {/* 图片卡区域 */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={craft.hero}
                        alt={craft.name}
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      {/* 红色遮罩 */}
                      <div
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(184,57,44,0.0) 0%, rgba(184,57,44,0.0) 40%, rgba(184,57,44,0.25) 80%, rgba(61,31,31,0.55) 100%)',
                          opacity: 0.85,
                        }}
                      />

                      {/* L 形边角装饰 — 左上 */}
                      <div
                        className="absolute top-3 left-3 w-4 h-4 pointer-events-none"
                        style={{
                          borderTop: '1px solid rgba(184,57,44,0.75)',
                          borderLeft: '1px solid rgba(184,57,44,0.75)',
                        }}
                      />
                      {/* L 形边角装饰 — 右下 */}
                      <div
                        className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none"
                        style={{
                          borderBottom: '1px solid rgba(184,57,44,0.75)',
                          borderRight: '1px solid rgba(184,57,44,0.75)',
                        }}
                      />

                      {/* 图片左上 eyebrow 标签 */}
                      <div
                        className="absolute top-4 left-4 font-display text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(244, 228, 220, 0.9)',
                          color: '#b8392c',
                        }}
                      >
                        {craft.category}
                      </div>

                      {/* 图片右下 · 编号朱砂色大写字母间距 */}
                      <div
                        className="absolute bottom-4 right-4 font-display text-[10px] tracking-[0.32em] uppercase font-bold"
                        style={{ color: '#f4e4dc' }}
                      >
                        {craft.index} · {craft.enName}
                      </div>

                      {/* 图片左下 · 标题 + 箭头按钮 */}
                      <div className="absolute bottom-4 left-4 right-20 flex items-end gap-3">
                        <div>
                          <div
                            className="font-serif font-black leading-none text-cream"
                            style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)' }}
                          >
                            {craft.name}
                          </div>
                          <div
                            className="font-serif text-xs text-cream/80 mt-1.5"
                          >
                            {craft.era}
                          </div>
                        </div>
                      </div>

                      {/* 箭头按钮：bg-vermilion/10 → group-hover bg-vermilion text-cream */}
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{
                          background: 'rgba(184, 57, 44, 0.1)',
                          color: '#b8392c',
                          border: '1px solid rgba(184, 57, 44, 0.25)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#b8392c'
                          e.currentTarget.style.color = '#f4e4dc'
                          e.currentTarget.style.borderColor = '#b8392c'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            'rgba(184, 57, 44, 0.1)'
                          e.currentTarget.style.color = '#b8392c'
                          e.currentTarget.style.borderColor =
                            'rgba(184, 57, 44, 0.25)'
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>

                    {/* 卡片底部文字区 */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="font-display text-[10px] tracking-[0.3em] uppercase font-semibold"
                          style={{ color: '#b8392c' }}
                        >
                          № {String(i + 1).padStart(2, '0')} · {craft.origin}
                        </div>
                        <SealStamp text={craft.seal} size="sm" />
                      </div>
                      <p
                        className="font-serif text-sm leading-relaxed flex-1"
                        style={{ color: 'rgba(61, 31, 31, 0.78)' }}
                      >
                        {craft.abstract}
                      </p>
                      <div
                        className="flex items-center justify-between mt-4 pt-4"
                        style={{
                          borderTop: '1px solid rgba(184, 57, 44, 0.1)',
                        }}
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {craft.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="font-serif text-[11px] px-2 py-0.5 rounded-full"
                              style={{
                                color: 'rgba(61, 31, 31, 0.6)',
                                background: 'rgba(138, 122, 92, 0.1)',
                                border: '1px solid rgba(138, 122, 92, 0.18)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          className="font-display text-[10px] tracking-[0.25em] uppercase transition-colors duration-500"
                          style={{
                            color: 'rgba(61, 31, 31, 0.4)',
                          }}
                        >
                          <span className="group-hover:hidden">阅读</span>
                          <span className="hidden group-hover:inline" style={{ color: '#b8392c' }}>
                            → 进入
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </ParallaxCard>
              </a>
            </Reveal>
          ))}
        </div>

        {/* 底部装饰线：vermilion/30 渐变 */}
        <Reveal delay={200}>
          <div
            className="h-px w-full mt-20 md:mt-24"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(184,57,44,0.3) 50%, transparent 100%)',
            }}
          />
        </Reveal>
      </div>

      {/* === 原有 6 个 craft 的详情 section === */}
      {crafts.map((craft) => {
        const Comp = craftMap[craft.id as keyof typeof craftMap]
        return <Comp key={craft.id} craft={craft} />
      })}
    </section>
  )
}
