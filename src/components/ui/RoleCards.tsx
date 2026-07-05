// 昆曲行当角色卡
const roles = [
  { name: '生', en: 'SHENG', desc: '男性角色', detail: '老生苍劲 / 小生俊逸 / 武生英武' },
  { name: '旦', en: 'DAN', desc: '女性角色', detail: '闺门旦端庄 / 花旦活泼 / 刀马旦英姿' },
  { name: '净', en: 'JING', desc: '性格角色', detail: '脸谱重彩，性格鲜明' },
  { name: '末', en: 'MO', desc: '中年男子', detail: '多演忠臣长者' },
  { name: '丑', en: 'CHOU', desc: '滑稽角色', detail: '鼻梁一抹白，戏里见人生' },
  { name: '小生', en: 'XIAO SHENG', desc: '青年男子', detail: '手持折扇，文质彬彬' },
]

export default function RoleCards({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 ${className}`}>
      {roles.map((r, i) => (
        <div
          key={i}
          className="group relative paper-texture border border-bronze/30 p-4 transition-all duration-500 hover:border-vermilion hover:shadow-lg cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl md:text-4xl font-serif font-black text-ink group-hover:text-vermilion transition-colors">
              {r.name}
            </div>
            <div className="flex-1">
              <div className="font-display text-[10px] tracking-[0.3em] text-bronze">{r.en}</div>
              <div className="font-serif text-xs text-ink mt-1">{r.desc}</div>
              <div className="font-serif text-[10px] text-ink/60 mt-2 leading-relaxed">{r.detail}</div>
            </div>
          </div>
          <div className="absolute top-2 right-2 w-2 h-2 seal-bg opacity-30 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  )
}
