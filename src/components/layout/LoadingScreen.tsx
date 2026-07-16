import { useEffect, useState } from 'react'
import './LoadingScreen.css'

type Props = {
  minDuration?: number
}

export default function LoadingScreen({ minDuration = 1800 }: Props) {
  const [progress, setProgress] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const startTime = Date.now()
    let animationFrame: number

    const animate = () => {
      const elapsed = Date.now() - startTime
      const targetProgress = Math.min((elapsed / minDuration) * 100, 100)
      const easedProgress = easeOutCubic(targetProgress / 100) * 100
      setProgress(easedProgress)

      if (elapsed < minDuration) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setProgress(100)
        setTimeout(() => {
          setIsLeaving(true)
          setTimeout(() => setIsHidden(true), 800)
        }, 300)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [minDuration])

  if (isHidden) return null

  return (
    <div className={`loading-screen ${isLeaving ? 'loading-leave' : ''}`}>
      <div className="loading-bg">
        <div className="loading-pattern" />
        <div className="loading-glow" />
      </div>

      <div className="loading-content">
        <div className="seal-container">
          <svg
            className="seal-svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="sealGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d45a4e" />
                <stop offset="60%" stopColor="#b8392c" />
                <stop offset="100%" stopColor="#9a2e22" />
              </radialGradient>
              <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#9a2e22" floodOpacity="0.4" />
              </filter>
            </defs>

            <g className="seal-outer-ring">
              <circle cx="100" cy="100" r="92" fill="none" stroke="#b8392c" strokeWidth="2" opacity="0.6" />
              <circle cx="100" cy="100" r="86" fill="none" stroke="#b8392c" strokeWidth="1" opacity="0.4" />
            </g>

            <g className="seal-inner" filter="url(#sealShadow)">
              <circle cx="100" cy="100" r="78" fill="url(#sealGradient)" />
              <circle cx="100" cy="100" r="72" fill="none" stroke="#f4e4dc" strokeWidth="2" opacity="0.85" />
              <circle cx="100" cy="100" r="66" fill="none" stroke="#f4e4dc" strokeWidth="1" opacity="0.5" />

              <g className="seal-decorations">
                <path
                  d="M100 32 L104 42 L100 38 L96 42 Z"
                  fill="#f4e4dc"
                  opacity="0.9"
                />
                <path
                  d="M100 168 L104 158 L100 162 L96 158 Z"
                  fill="#f4e4dc"
                  opacity="0.9"
                />
                <path
                  d="M32 100 L42 96 L38 100 L42 104 Z"
                  fill="#f4e4dc"
                  opacity="0.9"
                />
                <path
                  d="M168 100 L158 96 L162 100 L158 104 Z"
                  fill="#f4e4dc"
                  opacity="0.9"
                />
              </g>

              <g className="seal-pattern-corners">
                <path d="M50 50 L56 50 L50 56 Z" fill="#f4e4dc" opacity="0.7" />
                <path d="M150 50 L144 50 L150 56 Z" fill="#f4e4dc" opacity="0.7" />
                <path d="M50 150 L56 150 L50 144 Z" fill="#f4e4dc" opacity="0.7" />
                <path d="M150 150 L144 150 L150 144 Z" fill="#f4e4dc" opacity="0.7" />
              </g>

              <text
                x="100"
                y="88"
                textAnchor="middle"
                fill="#f4e4dc"
                fontSize="36"
                fontFamily="'Noto Serif SC', STZhongsong, serif"
                fontWeight="900"
                letterSpacing="4"
              >
                非
              </text>
              <text
                x="100"
                y="128"
                textAnchor="middle"
                fill="#f4e4dc"
                fontSize="36"
                fontFamily="'Noto Serif SC', STZhongsong, serif"
                fontWeight="900"
                letterSpacing="4"
              >
                遗
              </text>

              <path
                d="M70 100 Q100 92 130 100"
                fill="none"
                stroke="#f4e4dc"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </g>

            <g className="seal-rotate-ring">
              <circle
                cx="100"
                cy="100"
                r="96"
                fill="none"
                stroke="#b8392c"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.5"
              />
            </g>
          </svg>

          <div className="seal-orbits">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
          </div>
        </div>

        <div className="loading-text">
          <h1 className="loading-title">
            <span>非</span>
            <span>物</span>
            <span>质</span>
            <span>文</span>
            <span>化</span>
            <span>遗</span>
            <span>产</span>
          </h1>
          <p className="loading-subtitle">Intangible Cultural Heritage</p>
        </div>

        <div className="loading-progress">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            <span className="progress-percent">{Math.round(progress)}%</span>
            <span className="progress-label">载入中</span>
          </div>
        </div>
      </div>

      <div className="loading-decoration">
        <div className="deco-corner deco-tl" />
        <div className="deco-corner deco-tr" />
        <div className="deco-corner deco-bl" />
        <div className="deco-corner deco-br" />
      </div>
    </div>
  )
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
