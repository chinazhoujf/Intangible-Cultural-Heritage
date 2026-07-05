import type { CSSProperties } from 'react'

type Props = {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  style?: CSSProperties
}

export default function SealStamp({
  text = '印',
  size = 'md',
  className = '',
  style,
}: Props) {
  const dim = size === 'sm' ? 'w-10 h-10 text-xs' : size === 'lg' ? 'w-16 h-16 text-lg' : 'w-12 h-12 text-sm'
  return (
    <div
      className={`relative seal-bg flex items-center justify-center font-serif font-black ${dim} ${className}`}
      style={{ boxShadow: 'inset 0 0 0 1px rgba(253,251,247,0.22), 0 1px 2px rgba(0,0,0,0.2)', ...style }}
    >
      <div className="absolute inset-[12%] border-[1.5px] border-milk/85 pointer-events-none" />
      <span className="relative z-[1] text-shadow-milk text-milk">{text}</span>
    </div>
  )
}
