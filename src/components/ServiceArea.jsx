import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconLocation } from '../assets/icons'
import { business } from '../data/content'

export default function ServiceArea() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section service-area" ref={ref}>
      <div className="container">
        <div className={`sa-content ${visible ? 'visible' : ''}`}>
          <div className="sa-info">
            <span className="section-label">Zona de servicio</span>
            <h2 className="section-title">Servicio en toda {business.serviceArea}</h2>
            <p className="section-subtitle">
              Llegamos a tu ubicación en cualquier punto de {business.serviceArea}. Solo contáctanos y estaremos ahí.
            </p>
            <div className="sa-detail">
              <IconLocation size={36} />
              <div>
                <strong>Cobertura completa</strong>
                <span>{business.serviceArea} y zonas metropolitanas</span>
              </div>
            </div>
          </div>

          <div className="sa-map">
            <div className="sa-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120490.43127665806!2d-99.19186058448168!3d19.42918945500027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0016c3c985a9%3A0xf7f2d8b8b8b8b8b8!2sMexico%20City!5e0!3m2!1sen!2smx!4v1690000000000"
                title="Mapa de Mexico City"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sa-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .sa-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sa-detail {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          padding: 20px 24px;
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          color: var(--color-accent);
        }

        .sa-detail div {
          display: flex;
          flex-direction: column;
        }

        .sa-detail strong {
          font-size: 0.95rem;
          color: var(--color-primary);
        }

        .sa-detail span {
          font-size: 0.85rem;
          color: var(--color-text-light);
        }

        .sa-map-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .sa-map-container::before {
          content: '';
          display: block;
          padding-bottom: 75%;
        }

        .sa-map-container iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 768px) {
          .sa-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .sa-map {
            order: -1;
          }

          .sa-map-container::before {
            padding-bottom: 60%;
          }
        }
      `}</style>
    </section>
  )
}
