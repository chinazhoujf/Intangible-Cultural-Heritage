import { useState, useRef, useEffect } from 'react'
import './FlipCard.css'

interface FlipCardProps {
  frontTitle: string
  frontSubtitle?: string
  frontNumber?: string
  backTitle: string
  backDescription: string
  accentColor?: string
  className?: string
  index?: number
  sealText?: string
}

export default function FlipCard({
  frontTitle,
  frontSubtitle,
  frontNumber,
  backTitle,
  backDescription,
  accentColor = '#b8392c',
  className = '',
  index = 0,
  sealText,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
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

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      ref={cardRef}
      className={`flip-card-container ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(-15deg)',
        transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s`,
      }}
      onClick={handleClick}
    >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div
          className="flip-card-front"
          style={{
            background: `linear-gradient(135deg, ${accentColor}08 0%, #f4e4dc 100%)`,
            borderColor: `${accentColor}30`,
          }}
        >
          {frontNumber && (
            <div
              className="flip-card-number"
              style={{
                color: `${accentColor}15`,
                WebkitTextStroke: `2px ${accentColor}`,
              }}
            >
              {frontNumber}
            </div>
          )}
          <div className="flip-card-front-content">
            <h3 className="flip-card-front-title" style={{ color: '#3d1f1f' }}>
              {frontTitle}
            </h3>
            {frontSubtitle && (
              <p className="flip-card-front-subtitle">{frontSubtitle}</p>
            )}
          </div>
          {sealText && (
            <div className="flip-card-seal">
              <div
                className="flip-card-seal-inner"
                style={{
                  background: accentColor,
                  boxShadow: `inset 0 0 0 1px rgba(244, 228, 220, 0.3)`,
                }}
              >
                <span>{sealText}</span>
              </div>
            </div>
          )}
          <div className="flip-card-hint" style={{ color: `${accentColor}60` }}>
            点击翻转 ↻
          </div>
          <div
            className="flip-card-corner tl"
            style={{ borderColor: accentColor }}
          />
          <div
            className="flip-card-corner tr"
            style={{ borderColor: accentColor }}
          />
          <div
            className="flip-card-corner bl"
            style={{ borderColor: accentColor }}
          />
          <div
            className="flip-card-corner br"
            style={{ borderColor: accentColor }}
          />
        </div>

        <div
          className="flip-card-back"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
          }}
        >
          <div className="flip-card-back-content">
            <h3 className="flip-card-back-title">{backTitle}</h3>
            <div className="flip-card-back-line" />
            <p className="flip-card-back-desc">{backDescription}</p>
          </div>
          <div
            className="flip-card-corner tl"
            style={{ borderColor: '#f4e4dc' }}
          />
          <div
            className="flip-card-corner tr"
            style={{ borderColor: '#f4e4dc' }}
          />
          <div
            className="flip-card-corner bl"
            style={{ borderColor: '#f4e4dc' }}
          />
          <div
            className="flip-card-corner br"
            style={{ borderColor: '#f4e4dc' }}
          />
          <div
            className="flip-card-back-pattern"
            style={{ opacity: 0.05 }}
          />
        </div>
      </div>
    </div>
  )
}
