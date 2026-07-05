// 紫砂壶 SVG - 三种器型
const shapes = [
  { type: '光器', name: '西施', path: 'M 80 80 Q 60 100 60 140 L 60 200 Q 60 230 100 230 L 200 230 Q 240 230 240 200 L 240 140 Q 240 100 220 80 Z' },
  { type: '筋囊', name: '合菊', path: 'M 80 80 L 70 110 L 60 140 L 60 200 Q 60 230 100 230 L 200 230 Q 240 230 240 200 L 240 140 L 230 110 L 220 80 Z' },
  { type: '花器', name: '松桩', path: 'M 80 80 Q 50 100 55 160 Q 40 200 70 230 L 230 230 Q 260 200 245 160 Q 250 100 220 80 Z' },
]

export default function ZishaTiles({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {shapes.map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-3 p-4 paper-texture">
          <svg viewBox="0 0 300 280" className="w-full h-32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`g${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A88A5E" />
                <stop offset="50%" stopColor="#8C6A3F" />
                <stop offset="100%" stopColor="#5A4530" />
              </linearGradient>
            </defs>
            {/* 壶盖 */}
            <ellipse cx="150" cy="78" rx="60" ry="6" fill="#5A4530" />
            <ellipse cx="150" cy="74" rx="55" ry="8" fill={`url(#g${i})`} />
            <circle cx="150" cy="64" r="8" fill={`url(#g${i})`} stroke="#5A4530" strokeWidth="1" />
            <circle cx="150" cy="62" r="3" fill="#5A4530" />
            {/* 壶身 */}
            <path d={s.path} fill={`url(#g${i})`} stroke="#5A4530" strokeWidth="2" />
            {/* 流 */}
            <path d="M 60 130 Q 30 150 20 180" stroke="#5A4530" strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M 60 130 Q 30 150 20 180" stroke={`url(#g${i})`} strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* 把 */}
            <path d="M 240 130 Q 280 160 280 200 Q 280 220 240 220" stroke="#5A4530" strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M 240 130 Q 280 160 280 200 Q 280 220 240 220" stroke={`url(#g${i})`} strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* 底足 */}
            <line x1="105" y1="235" x2="195" y2="235" stroke="#5A4530" strokeWidth="2" />
          </svg>
          <div className="text-center">
            <div className="font-serif text-lg font-bold text-ink">{s.name}</div>
            <div className="font-serif text-xs text-bronze tracking-widest mt-1">{s.type}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
