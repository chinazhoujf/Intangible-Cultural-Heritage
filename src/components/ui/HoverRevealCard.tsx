import { useState, useRef, useEffect } from 'react'
import './HoverRevealCard.css'

interface HoverRevealCardProps {
  image: string
  title: string
  description: string
  accentColor?: string
  className?: string
  index?: number
}

export default function HoverRevealCard({
  image,
  title,
  description,
  accentColor = '#b8392c',
  className = '',
  index = 0,
}: HoverRevealCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`hover-reveal-card ${className}`}
      style={{
        perspective: '1000px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hover-reveal-inner"
        style={{
          transform: `rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="hover-reveal-image-wrapper">
          <img src={image} alt={title} className="hover-reveal-image" />
          <div
            className="hover-reveal-overlay"
            style={{
              background: `linear-gradient(180deg, transparent 30%, ${accentColor}dd 100%)`,
            }}
          />
          <div className="hover-reveal-glow" style={{ background: accentColor }} />
        </div>

        <div className="hover-reveal-title" style={{ transform: 'translateZ(30px)' }}>
          <span className="hover-reveal-label">{title}</span>
        </div>

        <div className="hover-reveal-content">
          <div className="hover-reveal-content-inner" style={{ transform: 'translateZ(40px)' }}>
            <h3 className="hover-reveal-h3" style={{ color: accentColor }}>
              {title}
            </h3>
            <p className="hover-reveal-desc">{description}</p>
            <div
              className="hover-reveal-line"
              style={{ background: accentColor }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
