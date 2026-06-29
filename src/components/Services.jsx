import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/content'
import { IconOil, IconBrakes, IconBattery, IconDiagnostic, IconExhaust, IconSuspension } from '../assets/icons'

const iconMap = {
  oil: IconOil,
  brakes: IconBrakes,
  battery: IconBattery,
  diagnostic: IconDiagnostic,
  exhaust: IconExhaust,
  suspension: IconSuspension,
}

function ServiceCard({ service, idx }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[service.icon]

  return (
    <motion.article
      ref={ref}
      className='service-card'
      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.1, 0, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div
        className='service-icon'
        whileHover={{ rotate: 15 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Icon size={36} />
      </motion.div>
      <div className='service-info'>
        <h3 className='service-title'>{service.title}</h3>
        <p className='service-desc'>{service.description}</p>
      </div>
      <div className='service-price'>{service.price}</div>
    </motion.article>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className='section' id='services' ref={ref}>
      <div className='container'>
        <motion.div
          className='services-header'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
        >
          <span className='section-label'>Servicios</span>
          <h2 className='section-title'>Reparaciones con precios claros</h2>
          <p className='section-subtitle'>
            Presupuesto sin compromiso. Solo pagas cuando el trabajo este terminado y aprobado.
          </p>
        </motion.div>

        <div className='services-grid'>
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .services {
          background: var(--color-surface-alt);
        }
        .services-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .services-header .section-subtitle {
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .service-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          cursor: default;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 77, 0, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .service-icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 77, 0, 0.15), rgba(255, 255, 255, 0.05));
          color: #ff4d00;
        }
        .service-info {
          flex: 1;
        }
        .service-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .service-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }
        .service-price {
          flex-shrink: 0;
          padding: 8px 16px;
          background: rgba(255, 77, 0, 0.15);
          color: #ff4d00;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            flex-wrap: wrap;
          }
          .service-price {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
