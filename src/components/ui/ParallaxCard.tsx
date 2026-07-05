import './ParallaxCard.css'

interface ParallaxCardProps {
  children: React.ReactNode
  className?: string
  sealText?: string
}

export default function ParallaxCard({ children, className = '', sealText }: ParallaxCardProps) {
  return (
    <div className={`parallax-card-container ${className}`}>
      <div className="parallax-card">
        <div className="parallax-glow" />

        <div className="parallax-rings">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="parallax-ring" style={{ ['--i' as any]: i }}>
              {i === 4 && sealText && (
                <span className="parallax-ring-icon">{sealText}</span>
              )}
            </div>
          ))}
        </div>

        <div className="parallax-glass-top" />

        <div className="parallax-card-content">
          {children}
        </div>
      </div>
    </div>
  )
}
