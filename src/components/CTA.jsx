import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconPhone } from '../assets/icons'
import { business } from '../data/content'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleCall = () => {
    window.location.href = `tel:${business.phone}`
  }

  return (
    <section className="section cta-section" ref={ref}>
      <div className="cta-bg-pattern" />
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        >
          <motion.span
            className="section-label"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Agenda tu servicio
          </motion.span>
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            ¿Problemas con tu auto?
          </motion.h2>
          <motion.p
            className="cta-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Llámanos ahora y agenda una revisión gratuita. Te atenderemos en tu ubicación en {business.serviceArea}.
          </motion.p>
          <motion.button
            className="btn-cta cta-big"
            onClick={handleCall}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconPhone size={24} />
            {business.phoneDisplay}
          </motion.button>
          <motion.p
            className="cta-small"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Servicio disponible de lunes a sábado · Diagnóstico sin costo
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .cta-section {
          background: var(--color-primary);
          position: relative;
          overflow: hidden;
        }

        .cta-bg-pattern {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(74, 144, 217, 0.08) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.015) 20px,
              rgba(255, 255, 255, 0.015) 21px
            );
        }

        .cta-card {
          text-align: center;
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 16px;
        }

        .cta-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .cta-big {
          font-size: 1.3rem;
          padding: 20px 44px;
          gap: 12px;
        }

        .cta-small {
          margin-top: 20px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  )
}
