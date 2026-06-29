import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconLocation, IconDiagnostic, IconGuarantee } from '../assets/icons'
import { valueProps } from '../data/content'

const iconMap = {
  location: IconLocation,
  diagnostic: IconDiagnostic,
  guarantee: IconGuarantee,
}

export default function ValueProposition() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section value-prop" id="about" ref={ref}>
      <div className="container">
        <div className={`value-header ${visible ? 'visible' : ''}`}>
          <span className="section-label">Por qué elegirnos</span>
          <h2 className="section-title">Mecánico de confianza a tu puerta</h2>
          <p className="section-subtitle">
            No somos un taller más. Llevamos el taller a tu casa u oficina con estándares profesionales y precios justos.
          </p>
        </div>

        <div className="value-grid">
          {valueProps.map((prop, idx) => {
            const [cardRef, cardVisible] = useScrollReveal()
            const Icon = iconMap[prop.icon]
            return (
              <article
                key={idx}
                className={`value-card glass ${cardVisible ? 'visible' : ''}`}
                ref={cardRef}
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                <div className="value-icon-wrap">
                  <Icon size={44} />
                </div>
                <h3 className="value-card-title">{prop.title}</h3>
                <p className="value-card-desc">{prop.description}</p>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        .value-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .value-header.visible {
          opacity: 1;
          transform: translateY(0);
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
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease, box-shadow var(--transition), transform var(--transition);
          cursor: default;
        }

        .value-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .value-card:hover {
          transform: translateY(-6px) !important;
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
          transition: transform var(--transition);
        }

        .value-card:hover .value-icon-wrap {
          transform: scale(1.1);
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
