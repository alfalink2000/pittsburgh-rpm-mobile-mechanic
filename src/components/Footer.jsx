import { useScrollReveal } from '../hooks/useScrollReveal'
import { business } from '../data/content'

export default function Footer() {
  const [ref, visible] = useScrollReveal()

  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${business.name}, ${business.address.street}, ${business.address.city}, ${business.address.state}`
  )}`

  return (
    <footer className="footer" ref={ref}>
      <div className={`footer-inner container ${visible ? 'visible' : ''}`}>
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-name">{business.name}</h3>
            <p className="footer-desc">
              Mecánico móvil profesional en {business.serviceArea}. Reparación y mantenimiento a domicilio con garantía.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-group">
              <h4 className="footer-group-title">Contacto</h4>
              <a href={`tel:${business.phone}`} className="footer-link">{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`} className="footer-link">{business.email}</a>
            </div>

            <div className="footer-group">
              <h4 className="footer-group-title">Dirección</h4>
              <p className="footer-text">
                {business.address.street}<br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
                Ver en Google Maps →
              </a>
            </div>

            <div className="footer-group">
              <h4 className="footer-group-title">Horario</h4>
              <p className="footer-text">{business.hours.weekdays}</p>
              <p className="footer-text">{business.hours.saturday}</p>
              <p className="footer-text">{business.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #070d15;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-inner {
          padding-top: 64px;
          padding-bottom: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .footer-inner.visible {
          opacity: 1;
          transform: translateY(0);
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
          color: var(--color-white);
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
          color: var(--color-accent);
          margin-bottom: 16px;
        }

        .footer-link {
          display: block;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
          transition: color var(--transition);
        }

        .footer-link:hover {
          color: var(--color-accent);
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
