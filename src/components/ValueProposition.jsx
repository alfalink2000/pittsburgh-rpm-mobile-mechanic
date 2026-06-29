import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconLocation, IconDiagnostic, IconGuarantee } from '../assets/icons'
import { valueProps } from '../data/content'

const iconMap = {
  location: IconLocation,
  diagnostic: IconDiagnostic,
  guarantee: IconGuarantee,
}

function ValueCard({ prop, idx }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = iconMap[prop.icon]

  return (
    <motion.article
      ref={ref}
      className="value-card glass"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.1, 0, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="value-icon-wrap"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Icon size={44} />
      </motion.div>
      <h3 className="value-card-title">{prop.title}</h3>
      <p className="value-card-desc">{prop.description}</p>
    </motion.article>
  )
}

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section value-prop" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="value-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
        >
          <span className="section-label">Por qué elegirnos</span>
          <h2 className="section-title">Mecánico de confianza a tu puerta</h2>
          <p className="section-subtitle">
            No somos un taller más. Llevamos el taller a tu casa u oficina con estándares profesionales y precios justos.
          </p>
        </motion.div>

        <div className="value-grid">
          {valueProps.map((prop, idx) => (
            <ValueCard key={idx} prop={prop} idx={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .value-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .value-header .section-subtitle {
          margin: 0 auto;
        }

        .value-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .value-card {
          padding: 40px 32px;
          text-align: center;
          cursor: default;
          transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .value-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(13, 33, 55, 0.05));
          color: var(--color-accent);
          margin-bottom: 24px;
        }

        .value-card-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--color-primary);
        }

        .value-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-light);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .value-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .value-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  )
}
