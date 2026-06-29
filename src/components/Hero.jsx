import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconTruck, IconPhone } from '../assets/icons'
import { hero, business } from '../data/content'

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1)

  const handleCall = () => {
    window.location.href = `tel:${business.phone}`
  }

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container hero-inner">
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <span className="hero-badge">Profesional certificado</span>
          <h1 className="hero-title">
            <span className="hero-name">{business.name}</span>
            <span className="hero-tagline">{hero.tagline}</span>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <button className="btn-cta" onClick={handleCall}>
              <IconPhone size={20} />
              {hero.cta}
            </button>
            <a href="#services" className="btn-outline">
              Ver servicios
            </a>
          </div>
          <div className="hero-rating">
            <div className="hero-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#f4b400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.9 6.9L19 7.8L14.5 12.1L15.8 18.3L10 15.2L4.2 18.3L5.5 12.1L1 7.8L7.1 6.9L10 1Z"/>
                </svg>
              ))}
            </div>
            <span className="hero-rating-text">
              <strong>5.0</strong> · {business.reviewCount} reseñas en Google
            </span>
          </div>
        </div>

        <div className={`hero-visual ${visible ? 'visible' : ''}`}>
          <div className="hero-illustration">
            <IconTruck size={300} />
            <div className="hero-orb" />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: linear-gradient(135deg, var(--color-primary) 0%, #0a1929 50%, var(--color-primary-light) 100%);
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: blob-float 12s ease-in-out infinite;
        }

        .hero-blob-1 {
          width: 500px;
          height: 500px;
          background: var(--color-accent);
          top: -150px;
          right: -100px;
        }

        .hero-blob-2 {
          width: 400px;
          height: 400px;
          background: #4a90d9;
          bottom: -100px;
          left: -100px;
          animation-delay: -6s;
        }

        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(255, 107, 53, 0.15);
          color: var(--color-accent);
          border: 1px solid rgba(255, 107, 53, 0.25);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.1;
        }

        .hero-tagline {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-subtitle {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          max-width: 520px;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 36px;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-white);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          transition: all var(--transition);
        }

        .btn-outline:hover {
          border-color: var(--color-white);
          background: rgba(255, 255, 255, 0.08);
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-stars {
          display: flex;
          gap: 3px;
        }

        .hero-rating-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-rating-text strong {
          color: var(--color-white);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }

        .hero-visual.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-illustration {
          position: relative;
          color: rgba(255, 255, 255, 0.2);
        }

        .hero-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: orb-pulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes orb-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
            min-height: auto;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-visual {
            display: none;
          }

          .hero-badge {
            font-size: 0.65rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn-cta, .btn-outline {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
