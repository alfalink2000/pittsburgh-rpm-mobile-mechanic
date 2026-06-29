import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconOil, IconBrakes, IconBattery, IconDiagnostic, IconExhaust, IconSuspension } from '../assets/icons'
import { services } from '../data/content'

const iconMap = {
  oil: IconOil,
  brakes: IconBrakes,
  battery: IconBattery,
  diagnostic: IconDiagnostic,
  exhaust: IconExhaust,
  suspension: IconSuspension,
}

export default function Services() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className={`services-header ${visible ? 'visible' : ''}`}>
          <span className="section-label">Servicios</span>
          <h2 className="section-title">Reparaciones con precios claros</h2>
          <p className="section-subtitle">
            Presupuesto sin compromiso. Solo pagas cuando el trabajo esté terminado y aprobado.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            const [cardRef, cardVisible] = useScrollReveal()
            const Icon = iconMap[service.icon]
            return (
              <article
                key={idx}
                className={`service-card glass ${cardVisible ? 'visible' : ''}`}
                ref={cardRef}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="service-icon">
                  <Icon size={36} />
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
                <div className="service-price">{service.price}</div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        .services {
          background: var(--color-surface-alt);
        }

        .services-header {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .services-header.visible {
          opacity: 1;
          transform: translateY(0);
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
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow var(--transition);
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card:hover {
          box-shadow: var(--shadow-md);
        }

        .service-icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 107, 53, 0.02));
          color: var(--color-accent);
        }

        .service-info {
          flex: 1;
        }

        .service-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .service-desc {
          font-size: 0.82rem;
          color: var(--color-text-light);
          line-height: 1.5;
        }

        .service-price {
          flex-shrink: 0;
          padding: 8px 16px;
          background: var(--color-primary);
          color: var(--color-white);
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
