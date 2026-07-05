type Props = {
  cn: string
  en: string
  subtitle?: string
  className?: string
  align?: 'left' | 'right'
}

export default function VerticalTitle({ cn, en, subtitle, className = '', align = 'left' }: Props) {
  return (
    <div className={`flex items-start gap-5 ${align === 'right' ? 'flex-row-reverse text-right' : ''} ${className}`}>
      <div className="vertical-rl font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[0.05em] text-ink">
        {cn.split('').map((ch, i) => (
          <span key={i} className="block">{ch}</span>
        ))}
      </div>
      <div className={`flex flex-col gap-3 pt-2 ${align === 'right' ? 'items-end' : ''}`}>
        <div className="bronze-line w-12" />
        <div className="font-display text-sm tracking-[0.4em] text-bronze uppercase">{en}</div>
        {subtitle && (
          <div className="font-serif text-xs text-ink/60 tracking-widest">{subtitle}</div>
        )}
      </div>
    </div>
  )
}
