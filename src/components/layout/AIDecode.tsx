import { useState } from 'react'
import Reveal from '../ui/Reveal'
import SealStamp from '../ui/SealStamp'
import { aiReplies, suggestions } from '../../data/aiMock'

const craftMeta = [
  { id: 'ke_si', name: '缂丝', tag: '织中之圣', subtitle: '通经断纬 / 一寸千金' },
  { id: 'qing_ci', name: '青瓷', tag: '雨过天青', subtitle: '72 道工序 / 1300℃' },
  { id: 'miao_yin', name: '苗银', tag: '无字史书', subtitle: '蝴蝶妈妈 / 盛装嫁妆' },
  { id: 'kun_qu', name: '昆曲', tag: '水磨腔', subtitle: '生旦净丑 / 六百年一脉' },
  { id: 'pi_ying', name: '皮影', tag: '影戏', subtitle: '一张牛皮 / 三根竹签' },
  { id: 'zi_sha', name: '紫砂', tag: '宋式哲思', subtitle: '双气孔 / 包浆茶山' },
]

export default function AIDecode() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeQ, setActiveQ] = useState<number | null>(null)

  const current = craftMeta.find((c) => c.id === activeId) || null
  const replyLines =
    activeId && activeQ !== null && aiReplies[activeId]
      ? [aiReplies[activeId][activeQ % aiReplies[activeId].length]]
      : []

  return (
    <section id="ai" className="relative py-32 md:py-40" style={{ background: 'linear-gradient(180deg, #f4e4dc 0%, #faf0e8 100%)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#b8392c]/60" />
                <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#b8392c]">
                  Section 06 · AI Decode
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-ink leading-none">
                AI · 解码
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-serif text-base md:text-lg text-ink/70 leading-relaxed">
                让 AI 解释非遗术语背后的工艺细节、历史脉络与文化含义。点击任一提问。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div style={{ background: 'rgba(61,31,31,0.04)', border: '1px solid rgba(184,57,44,0.12)', padding: '0.625rem' }}>
              <div className="p-6 md:p-8 bg-cream">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-[10px] tracking-[0.3em] text-ink/50 uppercase">
                    Select · 选择一项
                  </span>
                  <SealStamp text="问" size="sm" />
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-vermilion/20">
                  {craftMeta.map((c) => {
                    const isActive = activeId === c.id
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveId(c.id)
                          setActiveQ(0)
                        }}
                        className={`w-full text-left p-4 transition-all duration-500 flex items-start gap-4 ${
                          isActive
                            ? 'bg-vermilion text-cream'
                            : 'bg-cream text-ink/80 hover:bg-cream-soft/60'
                        }`}
                        style={{ border: isActive ? '1px solid #b8392c' : '1px solid rgba(184,57,44,0.15)' }}
                      >
                        <span
                          className={`font-serif text-lg font-bold leading-tight flex-1 ${
                            isActive ? 'text-cream' : 'text-ink'
                          }`}
                        >
                          {c.name}
                        </span>
                        <span
                          className={`font-display text-[10px] tracking-[0.25em] uppercase mt-1 text-right max-w-[50%] leading-relaxed ${
                            isActive ? 'text-cream/70' : 'text-ink/50'
                          }`}
                        >
                          {c.tag}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {activeId && (
                  <div className="space-y-2">
                    <div className="font-display text-[10px] tracking-[0.3em] text-ink/50 uppercase mb-2">
                      常见问题
                    </div>
                    {(suggestions[activeId] || []).map((q, i) => {
                      const isSelected = activeQ === i
                      return (
                        <button
                          key={i}
                          onClick={() => setActiveQ(i)}
                          className={`w-full text-left p-3 transition-all duration-500 font-serif text-sm ${
                            isSelected
                              ? 'bg-ink text-cream'
                              : 'bg-cream-soft/50 text-ink/80 hover:bg-cream-soft'
                          }`}
                          style={{ border: isSelected ? '1px solid #3d1f1f' : '1px solid rgba(184,57,44,0.15)' }}
                        >
                          {q}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div style={{ background: 'rgba(61,31,31,0.12)', padding: '0.625rem' }}>
              <div className="p-8 md:p-12 min-h-[520px] bg-ink relative">
                <div className="flex items-center justify-between mb-10 pb-5 border-b border-cream/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-vermilion animate-breath" />
                    <span className="font-display text-[10px] tracking-[0.3em] text-cream/60 uppercase">
                      {current ? `${current.name} · ${current.tag}` : '等待选择 · awaiting input'}
                    </span>
                  </div>
                  <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase">
                    live decoding
                  </div>
                </div>

                {!current ? (
                  <div className="flex flex-col items-center justify-center h-80 text-center">
                    <SealStamp text="录" size="lg" className="mb-8 opacity-80" />
                    <div className="font-serif text-2xl md:text-3xl text-cream/85 mb-3 leading-tight">
                      千年技艺，
                      <br />
                      让 AI 慢慢讲。
                    </div>
                    <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase mt-2">
                      · 从左侧选择一项非遗开始 ·
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <div className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-2">
                        {current.tag}
                      </div>
                      <h3 className="font-serif text-4xl md:text-5xl text-cream font-black leading-tight">
                        {current.name}
                      </h3>
                      <p className="font-serif text-sm md:text-base text-cream/70 mt-3">
                        {current.subtitle}
                      </p>
                    </div>

                    {activeQ !== null && replyLines.length > 0 ? (
                      <div className="space-y-5 border-t border-cream/10 pt-8">
                        {replyLines.map((line, i) => (
                          <p
                            key={i}
                            className="font-serif text-base md:text-lg text-cream/90 leading-loose"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <div className="border-t border-cream/10 pt-8 font-serif text-base text-cream/50 italic">
                        选择左侧任一问题，查看 AI 解读。
                      </div>
                    )}

                    <div className="mt-16 pt-6 border-t border-cream/10 flex items-center justify-between">
                      <span className="font-display text-[10px] tracking-[0.3em] text-cream/40 uppercase">
                        AI Response · 仅作参考
                      </span>
                      <span className="font-display text-[10px] tracking-[0.3em] text-cream/60 uppercase">
                        ← 继续提问
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
