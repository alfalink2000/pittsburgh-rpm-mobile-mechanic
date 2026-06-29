import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '../data/content'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Resenas', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container nav-inner'>
        <a href='#hero' className='nav-logo'>
          <span className='nav-dot' />
          <span className='nav-logo-text'>{business.shortName}</span>
        </a>

        <div className='nav-desktop'>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className='nav-link'>
              {link.label}
              <span className='nav-underline' />
            </a>
          ))}
          <a href={`tel:${business.phone}`} className='nav-cta-btn'>
            {business.phoneDisplay}
          </a>
        </div>

        <button className='nav-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            {menuOpen ? (
              <>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </>
            ) : (
              <>
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='nav-mobile'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className='container nav-mobile-inner'>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className='nav-mobile-link'>
                  {link.label}
                </a>
              ))}
              <a href={`tel:${business.phone}`} className='nav-mobile-cta'>
                {business.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 24px 0;
          transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
        }
        .navbar-scrolled {
          background: rgba(11, 17, 32, 0.9);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          padding: 12px 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #fff;
        }
        .nav-dot {
          width: 8px;
          height: 8px;
          background: #ff4d00;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff4d00;
        }
        .nav-logo-text {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          position: relative;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff4d00;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-underline {
          width: 100%;
        }
        .nav-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background: #ff4d00;
          color: #fff;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .nav-cta-btn:hover {
          background: #e04500;
        }
        .nav-toggle {
          display: none;
          background: none;
          color: #fff;
        }
        .nav-mobile {
          background: rgba(11, 17, 32, 0.95);
          backdrop-filter: blur(16px);
          overflow: hidden;
        }
        .nav-mobile-inner {
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nav-mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 8px 0;
        }
        .nav-mobile-link:hover {
          color: #fff;
        }
        .nav-mobile-cta {
          margin-top: 16px;
          padding: 12px 24px;
          background: #ff4d00;
          color: #fff;
          border-radius: 50px;
          text-align: center;
          font-weight: 600;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </motion.nav>
  )
}
