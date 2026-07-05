// 苗银头冠拆解图
export default function MiaoYinDiagram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 360" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="360" fill="#EFE7D6" />
      <text x="250" y="30" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#131210" letterSpacing="0.4em">
        苗 银 头 冠 拆 解
      </text>
      <line x1="180" y1="42" x2="320" y2="42" stroke="#8C6A3F" strokeWidth="0.8" />

      {/* 中心：凤鸟冠顶 */}
      <g transform="translate(250,180)">
        <path d="M 0 -80 Q -30 -60 -25 -30 Q -40 -10 -20 10 Q -40 30 -10 30 L 0 40 L 10 30 Q 40 30 20 10 Q 40 -10 25 -30 Q 30 -60 0 -80 Z"
          fill="none" stroke="#131210" strokeWidth="1.5" />
        {/* 凤眼 */}
        <circle r="4" fill="#B8392C" />
        {/* 凤冠纹 */}
        <path d="M -20 -50 Q 0 -45 20 -50" stroke="#B8392C" strokeWidth="1" fill="none" />
        <path d="M -15 -35 Q 0 -30 15 -35" stroke="#B8392C" strokeWidth="1" fill="none" />
      </g>

      {/* 标注 1：凤鸟冠顶 */}
      <g>
        <circle cx="80" cy="100" r="3" fill="#B8392C" />
        <line x1="80" y1="100" x2="200" y2="140" stroke="#B8392C" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="40" y="95" fontFamily="serif" fontSize="11" fill="#131210">① 凤鸟冠顶</text>
        <text x="40" y="110" fontFamily="serif" fontSize="8" fill="#8C6A3F">凤凰 · 蝴蝶妈妈</text>
      </g>

      {/* 标注 2：银片簪花 */}
      <g>
        <circle cx="420" cy="120" r="3" fill="#B8392C" />
        <line x1="420" y1="120" x2="290" y2="170" stroke="#B8392C" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="430" y="115" fontFamily="serif" fontSize="11" fill="#131210">② 银片錾花</text>
        <text x="430" y="130" fontFamily="serif" fontSize="8" fill="#8C6A3F">锤錾 32 种纹样</text>
      </g>

      {/* 标注 3：编丝坠 */}
      <g>
        <circle cx="80" cy="250" r="3" fill="#B8392C" />
        <line x1="80" y1="250" x2="200" y2="220" stroke="#B8392C" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="20" y="270" fontFamily="serif" fontSize="11" fill="#131210">③ 编丝坠饰</text>
        <text x="20" y="285" fontFamily="serif" fontSize="8" fill="#8C6A3F">细如发丝的银链</text>
      </g>

      {/* 标注 4：银铃 */}
      <g>
        <circle cx="420" cy="260" r="3" fill="#B8392C" />
        <line x1="420" y1="260" x2="290" y2="220" stroke="#B8392C" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="430" y="270" fontFamily="serif" fontSize="11" fill="#131210">④ 银 铃</text>
        <text x="430" y="285" fontFamily="serif" fontSize="8" fill="#8C6A3F">步摇作响，祝福传声</text>
      </g>

      {/* 底部装饰条 */}
      <g transform="translate(0,330)">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <g key={i} transform={`translate(${50 + i * 50}, 0)`}>
            <circle r="4" fill="none" stroke="#8C6A3F" strokeWidth="0.8" />
            <circle r="1.5" fill="#8C6A3F" />
          </g>
        ))}
      </g>
    </svg>
  )
}
