// 苗族图腾词云
const words: { t: string; s: number; c?: string }[] = [
  { t: '蝴蝶妈妈', s: 56, c: '#B8392C' },
  { t: '枫叶', s: 40 },
  { t: '锦鸡', s: 36 },
  { t: '鱼', s: 28 },
  { t: '龙', s: 44, c: '#B8392C' },
  { t: '牛角', s: 32 },
  { t: '鹊桥', s: 24 },
  { t: '瓜', s: 20 },
  { t: '花', s: 38, c: '#B8392C' },
  { t: '石榴', s: 22 },
  { t: '八卦', s: 26 },
  { t: '云雷', s: 24 },
  { t: '山川', s: 30 },
  { t: '宗族', s: 28 },
  { t: '迁徙路', s: 32 },
  { t: '稻穗', s: 22 },
  { t: '蚕', s: 20 },
  { t: '蛙', s: 22 },
  { t: '鹰', s: 26 },
  { t: '太阳', s: 30, c: '#B8392C' },
  { t: '月', s: 22 },
  { t: '星', s: 18 },
]

export default function MiaoWordCloud({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: 360 }}>
      {words.map((w, i) => {
        // 简单的伪随机分布
        const seed = (i * 13 + 7) % 100
        const x = (seed * 37 + w.s * 1.5) % 90
        const y = ((seed * 19 + w.s) % 90) + 5
        return (
          <span
            key={i}
            className="absolute font-serif font-bold select-none transition-all duration-500 hover:scale-110"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              fontSize: `${w.s * 0.4}px`,
              color: w.c || '#131210',
              opacity: 0.85,
              writingMode: i % 3 === 0 ? 'vertical-rl' : 'horizontal-tb',
              transform: `rotate(${(seed % 7) - 3}deg)`,
            }}
          >
            {w.t}
          </span>
        )
      })}
    </div>
  )
}
