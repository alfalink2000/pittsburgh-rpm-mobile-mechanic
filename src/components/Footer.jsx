import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { business } from '../data/content'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${business.name}, ${business.address.street}, ${business.address.city}, ${business.address.state}`
  )}`

  return (
    <footer className='footer' ref={ref}>
      <motion.div
        className='container footer-inner'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
      >
        <div className='footer-main'>
          <motion.div
            className='footer-brand'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className='footer-name'>{business.name}</h3>
            <p className='footer-desc'>
              Mecanico movil profesional en {business.serviceArea}. Reparacion y mantenimiento a domicilio con garantia.
            </p>
          </motion.div>

          <div className='footer-links'>
            <motion.div
              className='footer-group'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className='footer-group-title'>Contacto</h4>
              <a href={`tel:${business.phone}`} className='footer-link'>{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`} className='footer-link'>{business.email}</a>
            </motion.div>

            <motion.div
              className='footer-group'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4 className='footer-group-title'>Direccion</h4>
              <p className='footer-text'>
                {business.address.street}<br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <a href={googleMapsUrl} target='_blank' rel='noopener noreferrer' className='footer-link'>
                Ver en Google Maps
              </a>
            </motion.div>

            <motion.div
              className='footer-group'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className='footer-group-title'>Horario</h4>
              <p className='footer-text'>{business.hours.weekdays}</p>
              <p className='footer-text'>{business.hours.saturday}</p>
              <p className='footer-text'>{business.hours.sunday}</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='footer-bottom'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
        </motion.div>
      </motion.div>

      <style>{`
        .footer {
          background: #070d15;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-inner {
          padding-top: 64px;
          padding-bottom: 32px;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .footer-desc {
          font-size: 0.88rem;
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .footer-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ff4d00;
          margin-bottom: 16px;
        }
        .footer-link {
          display: block;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
          transition: color 0.35s ease;
        }
        .footer-link:hover {
          color: #ff4d00;
        }
        .footer-text {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 4px;
        }
        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.35);
        }
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-links {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .footer-desc {
            max-width: none;
          }
        }
        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
