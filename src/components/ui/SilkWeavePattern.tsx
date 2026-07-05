// 缂丝纹样 SVG - 经纬交织的几何图案
type Props = { className?: string; color?: string }
export default function SilkWeavePattern({ className = '', color = '#B8392C' }: Props) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="weave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#EFE7D6" />
          <rect x="0" y="0" width="10" height="10" fill={color} opacity="0.18" />
          <rect x="10" y="10" width="10" height="10" fill={color} opacity="0.18" />
        </pattern>
        <pattern id="weave2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="transparent" />
          <rect x="0" y="0" width="10" height="10" fill="#131210" opacity="0.2" />
          <rect x="10" y="10" width="10" height="10" fill="#131210" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#weave)" />
      <g opacity="0.95">
        {/* 中心图案：连续回纹 */}
        <g transform="translate(200,200)">
          {Array.from({ length: 4 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 90})`}>
              <rect x="-80" y="-80" width="160" height="160" fill="none" stroke={color} strokeWidth="3" />
              <rect x="-60" y="-60" width="120" height="120" fill="none" stroke={color} strokeWidth="2" />
              <rect x="-40" y="-40" width="80" height="80" fill="none" stroke={color} strokeWidth="1.5" />
            </g>
          ))}
        </g>
        {/* 四角花朵 */}
        {[0, 1, 2, 3].map((i) => {
          const x = i % 2 === 0 ? 80 : 320
          const y = i < 2 ? 80 : 320
          return (
            <g key={i} transform={`translate(${x},${y})`}>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <ellipse key={deg} cx="0" cy="-20" rx="8" ry="20" fill={color} transform={`rotate(${deg})`} opacity="0.8" />
              ))}
              <circle r="6" fill="#131210" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
