// 青瓷窑口地图 - 简化的龙泉地区示意
type Kiln = { x: number; y: number; name: string; temp: number }
const kilns: Kiln[] = [
  { x: 130, y: 80, name: '大窑', temp: 1320 },
  { x: 180, y: 130, name: '哥窑', temp: 1290 },
  { x: 240, y: 110, name: '弟窑', temp: 1280 },
  { x: 280, y: 180, name: '小梅', temp: 1300 },
  { x: 200, y: 220, name: '宝溪', temp: 1310 },
  { x: 320, y: 240, name: '查田', temp: 1295 },
]

export default function CeladonMap({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contour" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 0 20 Q 10 10 20 20 T 40 20" stroke="#8C6A3F" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M 0 30 Q 10 20 20 30 T 40 30" stroke="#8C6A3F" strokeWidth="0.5" fill="none" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="#EFE7D6" />
      <rect width="480" height="360" fill="url(#contour)" />
      {/* 河流 */}
      <path
        d="M 0 180 Q 120 140 200 170 T 480 160"
        stroke="#3F5A7A"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <text x="380" y="155" fontFamily="serif" fontSize="10" fill="#3F5A7A" letterSpacing="0.3em" opacity="0.7">
        瓯 江
      </text>
      {/* 山 */}
      <path d="M 60 280 L 130 180 L 180 240 L 240 200 L 320 260 L 380 220 L 460 280 Z"
        fill="#7A8E6A" opacity="0.15" />
      <path d="M 60 280 L 130 180 L 180 240 L 240 200 L 320 260 L 380 220 L 460 280"
        stroke="#7A8E6A" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* 窑口 */}
      {kilns.map((k, i) => (
        <g key={i} className="cursor-pointer group">
          <circle cx={k.x} cy={k.y} r="22" fill="#EFE7D6" stroke="#B8392C" strokeWidth="1.5" className="transition-all duration-300 group-hover:r-[28px]" />
          <circle cx={k.x} cy={k.y} r="4" fill="#B8392C" />
          <text x={k.x} y={k.y - 32} textAnchor="middle" fontFamily="serif" fontSize="14" fill="#131210" className="font-bold">
            {k.name}
          </text>
          <text x={k.x} y={k.y + 38} textAnchor="middle" fontFamily="serif" fontSize="9" fill="#8C6A3F" letterSpacing="0.2em">
            {k.temp}℃
          </text>
        </g>
      ))}
      {/* 标题 */}
      <text x="240" y="30" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#131210" letterSpacing="0.4em">
        龙 泉 窑 口
      </text>
      <line x1="180" y1="42" x2="300" y2="42" stroke="#8C6A3F" strokeWidth="0.8" />
      <text x="240" y="340" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#8C6A3F" letterSpacing="0.3em">
        LONGQUAN KILN SITES · 浙 江
      </text>
    </svg>
  )
}
