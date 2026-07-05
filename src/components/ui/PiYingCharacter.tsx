// 皮影人物 SVG
type Props = { className?: string; costume?: 'warrior' | 'female' | 'monk' | 'scholar' }
export default function PiYingCharacter({ className = '', costume = 'warrior' }: Props) {
  const palette = {
    warrior: { main: '#B8392C', sub: '#1F1B17', trim: '#8C6A3F' },
    female: { main: '#1F1B17', sub: '#B8392C', trim: '#8C6A3F' },
    monk: { main: '#1F1B17', sub: '#8C6A3F', trim: '#B8392C' },
    scholar: { main: '#3F5A7A', sub: '#1F1B17', trim: '#8C6A3F' },
  }[costume]

  return (
    <svg viewBox="0 0 220 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#131210" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#paperShadow)">
        {/* 头部 */}
        <g>
          <ellipse cx="110" cy="60" rx="34" ry="42" fill="#EFE7D6" stroke="#131210" strokeWidth="2" />
          {/* 头饰 */}
          <path d="M 76 50 Q 110 20 144 50 L 144 30 L 76 30 Z" fill={palette.main} stroke="#131210" strokeWidth="1.5" />
          <circle cx="90" cy="32" r="3" fill={palette.trim} />
          <circle cx="110" cy="28" r="4" fill={palette.trim} />
          <circle cx="130" cy="32" r="3" fill={palette.trim} />
          {/* 眉毛 */}
          <path d="M 90 55 Q 96 50 102 55" stroke="#131210" strokeWidth="1.5" fill="none" />
          <path d="M 118 55 Q 124 50 130 55" stroke="#131210" strokeWidth="1.5" fill="none" />
          {/* 眼睛 */}
          <ellipse cx="96" cy="62" rx="2.5" ry="1.5" fill="#131210" />
          <ellipse cx="124" cy="62" rx="2.5" ry="1.5" fill="#131210" />
          {/* 鼻 */}
          <path d="M 110 65 L 107 72 L 110 75 L 113 72 Z" fill="none" stroke="#131210" strokeWidth="1" />
          {/* 嘴 */}
          <path d="M 100 85 Q 110 90 120 85" stroke="#B8392C" strokeWidth="1.5" fill="none" />
          {/* 胡须 - 仅 warrior/scholar */}
          {costume === 'warrior' && (
            <g>
              <path d="M 100 88 Q 95 105 90 115" stroke="#131210" strokeWidth="1" fill="none" />
              <path d="M 120 88 Q 125 105 130 115" stroke="#131210" strokeWidth="1" fill="none" />
              <path d="M 110 90 Q 110 110 110 120" stroke="#131210" strokeWidth="1" fill="none" />
            </g>
          )}
        </g>

        {/* 身体 */}
        <g>
          {/* 颈 */}
          <rect x="104" y="100" width="12" height="10" fill="#EFE7D6" stroke="#131210" strokeWidth="1" />
          {/* 衣领 */}
          <path d="M 88 110 L 110 125 L 132 110 L 132 130 L 88 130 Z" fill={palette.main} stroke="#131210" strokeWidth="1.5" />
          {/* 衣身 */}
          <path d="M 70 130 L 150 130 L 160 230 L 60 230 Z" fill={palette.main} stroke="#131210" strokeWidth="2" />
          {/* 衣纹装饰 */}
          <g stroke={palette.trim} strokeWidth="0.8" fill="none">
            <path d="M 80 150 Q 110 160 140 150" />
            <path d="M 75 180 Q 110 195 145 180" />
            <path d="M 70 210 Q 110 225 150 210" />
          </g>
          {/* 中心圆饰 */}
          <circle cx="110" cy="170" r="8" fill={palette.trim} stroke="#131210" strokeWidth="1" />
          <circle cx="110" cy="170" r="3" fill={palette.sub} />
          {/* 袖子 */}
          <path d="M 70 130 L 50 220 L 70 230 L 85 145 Z" fill={palette.sub} stroke="#131210" strokeWidth="1.5" />
          <path d="M 150 130 L 170 220 L 150 230 L 135 145 Z" fill={palette.sub} stroke="#131210" strokeWidth="1.5" />
        </g>

        {/* 双手 */}
        <g>
          <ellipse cx="55" cy="230" rx="10" ry="14" fill="#EFE7D6" stroke="#131210" strokeWidth="1.5" />
          <ellipse cx="165" cy="230" rx="10" ry="14" fill="#EFE7D6" stroke="#131210" strokeWidth="1.5" />
        </g>

        {/* 腰以下 */}
        <path d="M 60 230 L 160 230 L 170 320 L 50 320 Z" fill={palette.main} stroke="#131210" strokeWidth="2" />
        {/* 纹饰 */}
        <g stroke={palette.trim} strokeWidth="0.6" fill="none">
          <path d="M 70 260 L 150 260" />
          <path d="M 65 290 L 155 290" />
        </g>

        {/* 腿部 */}
        <g>
          <rect x="80" y="320" width="22" height="60" fill={palette.sub} stroke="#131210" strokeWidth="1.5" />
          <rect x="118" y="320" width="22" height="60" fill={palette.sub} stroke="#131210" strokeWidth="1.5" />
          {/* 鞋 */}
          <path d="M 76 380 L 106 380 L 106 395 L 80 400 L 70 395 Z" fill="#131210" stroke="#131210" strokeWidth="1" />
          <path d="M 114 380 L 144 380 L 150 395 L 140 400 L 114 395 Z" fill="#131210" stroke="#131210" strokeWidth="1" />
        </g>

        {/* 武器/道具 - warrior 拿剑 */}
        {costume === 'warrior' && (
          <g>
            <line x1="55" y1="130" x2="40" y2="240" stroke="#1F1B17" strokeWidth="3" />
            <rect x="36" y="230" width="10" height="6" fill="#8C6A3F" />
            <line x1="40" y1="120" x2="40" y2="240" stroke="#EFE7D6" strokeWidth="1" />
          </g>
        )}
        {costume === 'female' && (
          <g>
            <path d="M 60 240 Q 30 280 50 320" stroke="#B8392C" strokeWidth="2" fill="none" />
            <circle cx="48" cy="318" r="6" fill="#B8392C" />
          </g>
        )}
        {costume === 'monk' && (
          <g>
            <line x1="55" y1="180" x2="20" y2="320" stroke="#8C6A3F" strokeWidth="2" />
            <line x1="20" y1="320" x2="14" y2="335" stroke="#8C6A3F" strokeWidth="2" />
          </g>
        )}
        {costume === 'scholar' && (
          <g>
            <rect x="155" y="180" width="4" height="50" fill="#1F1B17" />
            <rect x="145" y="160" width="24" height="30" fill="#EFE7D6" stroke="#1F1B17" strokeWidth="1" />
            <line x1="148" y1="170" x2="166" y2="170" stroke="#131210" strokeWidth="0.5" />
            <line x1="148" y1="178" x2="166" y2="178" stroke="#131210" strokeWidth="0.5" />
          </g>
        )}
      </g>
    </svg>
  )
}
