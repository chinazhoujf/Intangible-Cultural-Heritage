import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './GridMotion.css'

type GridMotionItem = string | React.ReactNode

interface GridMotionProps {
  items?: GridMotionItem[]
  gradientColor?: string
  className?: string
}

export default function GridMotion({
  items = [],
  gradientColor = '#b8392c',
  className = '',
}: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `非遗 ${index + 1}`)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 200
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) *
            direction

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className={`grid-motion-wrapper ${className}`} ref={gridRef}>
      <section
        className="grid-motion-intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor}22 0%, transparent 70%)`,
        }}
      >
        <div className="grid-motion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid-motion-row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                const isImage =
                  typeof content === 'string' &&
                  (content.startsWith('http') || content.startsWith('data:'))
                return (
                  <div key={itemIndex} className="grid-motion-row-item">
                    <div className="grid-motion-row-item-inner">
                      {isImage ? (
                        <div
                          className="grid-motion-row-item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="grid-motion-row-item-content">{content}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="grid-motion-mask" />
      </section>
    </div>
  )
}
