import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { IconStar } from '../assets/icons'
import { socialProof, business } from '../data/content'

function AnimatedRating() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = socialProof.rating
    const duration = 1500
    const step = 50
    const totalSteps = duration / step
    const increment = end / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, step)

    return () => clearInterval(timer)
  }, [isInView])

  return (
    <span ref={ref} className="sp-rating-number">
      {count.toFixed(1)}
    </span>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section social-proof" ref={ref}>
      <div className="container">
        <motion.div
          className="sp-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        >
          <motion.div
            className="sp-stars"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.3 },
              },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="sp-star"
                variants={{
                  hidden: { scale: 0, rotate: -180 },
                  visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200 } },
                }}
              >
                <IconStar size={28} />
              </motion.span>
            ))}
          </motion.div>

          <div className="sp-rating-text">
            <AnimatedRating />
            <span className="sp-rating-label">/ 5.0</span>
          </div>

          <motion.p
            className="sp-review-count"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {socialProof.reviewCount} reseñas en Google
          </motion.p>

          <motion.blockquote
            className="sp-testimonial"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          >
            {socialProof.testimonial}
          </motion.blockquote>

          <motion.cite
            className="sp-author"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {socialProof.testimonialAuthor}
          </motion.cite>

          <motion.div
            className="sp-rs"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <a
              href={`https://search.google.com/local/reviews?q=${encodeURIComponent(business.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-rs-btn"
            >
              <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor"><path d="M44 24c0-11-9-20-20-20S4 13 4 24s9 20 20 20 20-9 20-20z"/></svg>
              Deja tu reseña
            </a>
          </motion.div>
        </motion.div>
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
        }

        .sp-stars {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .sp-star {
          color: var(--color-star);
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
