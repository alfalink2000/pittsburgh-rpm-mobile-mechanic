import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconStar } from '../assets/icons'
import { socialProof, business } from '../data/content'

export default function SocialProof() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section social-proof" ref={ref}>
      <div className="container">
        <div className={`sp-card ${visible ? 'visible' : ''}`}>
          <div className="sp-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="sp-star">
                <IconStar size={28} />
              </span>
            ))}
          </div>
          <div className="sp-rating-text">
            <span className="sp-rating-number">{socialProof.rating}</span>
            <span className="sp-rating-label">/ 5.0</span>
          </div>
          <p className="sp-review-count">
            {socialProof.reviewCount} reseñas en Google
          </p>
          <blockquote className="sp-testimonial">
            {socialProof.testimonial}
          </blockquote>
          <cite className="sp-author">{socialProof.testimonialAuthor}</cite>

          <div className="sp-rs">
            <a
              href={`https://search.google.com/local/reviews?q=${encodeURIComponent(business.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-rs-btn"
            >
              <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor"><path d="M44 24c0-11-9-20-20-20S4 13 4 24s9 20 20 20 20-9 20-20z"/></svg>
              Deja tu reseña
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .social-proof {
          background: linear-gradient(135deg, var(--color-primary) 0%, #0a1929 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .social-proof::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(74, 144, 217, 0.08) 0%, transparent 50%);
        }

        .sp-card {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .sp-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .sp-stars {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .sp-star {
          color: var(--color-star);
          animation: star-pop 0.4s ease backwards;
        }

        .sp-star:nth-child(1) { animation-delay: 0.2s; }
        .sp-star:nth-child(2) { animation-delay: 0.35s; }
        .sp-star:nth-child(3) { animation-delay: 0.5s; }
        .sp-star:nth-child(4) { animation-delay: 0.65s; }
        .sp-star:nth-child(5) { animation-delay: 0.8s; }

        @keyframes star-pop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }

        .sp-rating-text {
          margin-bottom: 8px;
        }

        .sp-rating-number {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 700;
          color: var(--color-white);
          line-height: 1;
        }

        .sp-rating-label {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .sp-review-count {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 32px;
        }

        .sp-testimonial {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 16px;
        }

        .sp-author {
          display: block;
          font-style: normal;
          font-size: 0.9rem;
          color: var(--color-accent);
          font-weight: 500;
          margin-bottom: 32px;
        }

        .sp-rs-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: var(--color-white);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition);
        }

        .sp-rs-btn:hover {
          border-color: var(--color-accent);
          background: rgba(255, 107, 53, 0.1);
        }
      `}</style>
    </section>
  )
}
