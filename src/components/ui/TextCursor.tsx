import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextCursor.css';

interface TextCursorProps {
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

const TextCursor = ({
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}: TextCursorProps) => {
  const [trail, setTrail] = useState<Array<{
    id: number;
    x: number;
    y: number;
    angle: number;
    randomX?: number;
    randomY?: number;
    randomRotate?: number;
    scale: number;
  }>>([]);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const createRandomData = () =>
        randomFloat
          ? {
              randomX: Math.random() * 15 - 7.5,
              randomY: Math.random() * 15 - 7.5,
              randomRotate: Math.random() * 15 - 7.5,
              scale: 0.7 + Math.random() * 0.4
            }
          : { scale: 1 };

      setTrail(prev => {
        const newTrail = [...prev];

        if (newTrail.length === 0) {
          newTrail.push({
            id: idCounter.current++,
            x: mouseX,
            y: mouseY,
            angle: 0,
            ...createRandomData()
          });
        } else {
          const last = newTrail[newTrail.length - 1];
          const dx = mouseX - last.x;
          const dy = mouseY - last.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance >= spacing) {
            const computedAngle = followMouseDirection ? (Math.atan2(dy, dx) * 180) / Math.PI : 0;
            const steps = Math.floor(distance / spacing);

            for (let i = 1; i <= steps; i++) {
              const t = (spacing * i) / distance;
              const newX = last.x + dx * t;
              const newY = last.y + dy * t;

              newTrail.push({
                id: idCounter.current++,
                x: newX,
                y: newY,
                angle: computedAngle,
                ...createRandomData()
              });
            }
          }
        }

        return newTrail.length > maxPoints ? newTrail.slice(newTrail.length - maxPoints) : newTrail;
      });

      lastMoveTimeRef.current = Date.now();
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [spacing, followMouseDirection, randomFloat, maxPoints]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div className="text-cursor-wrapper">
      <div className="text-cursor-inner">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: 0.92,
                scale: item.scale,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },
                scale: { duration: exitDuration, ease: 'easeOut' },
                ...(randomFloat && {
                  x: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  y: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  rotate: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                })
              }}
              className="text-cursor-item"
              style={{ left: item.x, top: item.y }}
            >
              <div className="text-cursor-circle">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20Chinese%20shadow%20puppet%20handcrafted%20leather%20figure%20traditional%20opera%20character%20warrior%20silhouette%20realistic%20detail%20warm%20golden%20light%20against%20dark%20background&image_size=square_hd"
                  alt="皮影小人"
                  className="text-cursor-img"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
