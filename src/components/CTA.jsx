import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconPhone } from '../assets/icons'
import { business } from '../data/content'

export default function CTA() {
  const [ref, visible] = useScrollReveal()

  const handleCall = () => {
    window.location.href = `tel:${business.phone}`
  }

  return (
    <section className="section cta-section" ref={ref}>
      <div className="cta-bg-pattern" />
      <div className="container">
        <div className={`cta-card ${visible ? 'visible' : ''}`}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Agenda tu servicio
          </span>
          <h2 className="cta-title">¿Problemas con tu auto?</h2>
          <p className="cta-text">
            Llámanos ahora y agenda una revisión gratuita. Te atenderemos en tu ubicación en {business.serviceArea}.
          </p>
          <button className="btn-cta cta-big" onClick={handleCall}>
            <IconPhone size={24} />
            {business.phoneDisplay}
          </button>
          <p className="cta-small">
            Servicio disponible de lunes a sábado · Diagnóstico sin costo
          </p>
        </div>
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
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .cta-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
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
