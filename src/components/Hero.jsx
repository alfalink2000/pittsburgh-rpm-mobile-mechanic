import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AuroraBackground from './AuroraBackground'
import { business } from '../data/content'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id='hero' ref={ref} className='hero'>
      <AuroraBackground />

      <motion.div className='hero-inner' style={{ y, opacity }}>
        <div className='hero-content'>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='hero-badge-wrap'>
            <span className='hero-badge'>
              Servicio Premium a Domicilio
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }} className='hero-title'>
            Tu mecanico de <span className='hero-accent'>confianza</span> llega a tu puerta.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className='hero-subtitle'>
            Diagnostico, mantenimiento y reparacion de tu auto en la comodidad de tu hogar. Profesionales, rapidos y con garantia.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className='hero-actions'>
            <a href={`tel:${business.phone}`} className='btn-cta hero-cta'>
              Agenda tu cita
            </a>
            <a href='#services' className='btn-outline'>
              Ver servicios
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className='scroll-indicator'>
        <span className='scroll-text'>Scroll</span>
        <div className='scroll-line' />
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: flex-end;
          padding-bottom: 80px;
          padding-top: 160px;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          z-index: 10;
          width: 100%;
        }
        .hero-badge-wrap {
          margin-bottom: 24px;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          max-width: 800px;
        }
        .hero-accent {
          color: #ff4d00;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .hero-cta {
          font-size: 1.1rem;
          padding: 18px 40px;
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 18px 40px;
          font-size: 1.05rem;
          font-weight: 500;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          transition: all var(--transition);
        }
        .btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .scroll-text {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent);
        }
        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
            padding-bottom: 60px;
            min-height: auto;
          }
          .hero-actions {
            flex-direction: column;
          }
          .hero-cta, .btn-outline {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
