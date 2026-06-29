import os

BASE = r"D:\Work\Works ONLINE\1\pittsburgh-rpm-mobile-mechanic\src"

def write(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {full}")

# 1. global.css
write("styles/global.css", """:root {
  --color-primary: #0b1120;
  --color-primary-light: #131b2e;
  --color-accent: #ff4d00;
  --color-accent-hover: #e04500;
  --color-surface: #f4f4f5;
  --color-surface-alt: #e4e4e7;
  --color-text: #18181b;
  --color-text-light: #71717a;
  --color-white: #ffffff;
  --color-star: #fbbf24;

  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  --max-width: 1200px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 2px 8px rgba(11, 17, 32, 0.08);
  --shadow-md: 0 8px 32px rgba(11, 17, 32, 0.12);
  --shadow-lg: 0 16px 48px rgba(11, 17, 32, 0.16);
  --transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background: var(--color-surface);
  color: var(--color-text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 100px 0;
}

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  color: var(--color-primary);
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-light);
  max-width: 600px;
  line-height: 1.7;
}

/* Aurora Background */
.aurora-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #0B1120 0%, #131B2E 50%, #0B1120 100%);
  z-index: 0;
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
}

.aurora-blob-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, hsla(16, 100%, 50%, 0.3), transparent 60%);
  top: -200px;
  right: -100px;
  animation: float-blob-1 12s ease-in-out infinite;
}

.aurora-blob-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, hsla(210, 100%, 50%, 0.2), transparent 60%);
  bottom: -150px;
  left: -150px;
  animation: float-blob-2 15s ease-in-out infinite;
}

.aurora-blob-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, hsla(30, 100%, 50%, 0.2), transparent 60%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse-blob 10s ease-in-out infinite;
}

.aurora-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  pointer-events: none;
}

@keyframes float-blob-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(40px, -40px) rotate(2deg); }
  66% { transform: translate(-30px, 20px) rotate(-1deg); }
}

@keyframes float-blob-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-30px, 30px) rotate(-2deg); }
  66% { transform: translate(20px, -30px) rotate(1deg); }
}

@keyframes pulse-blob {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
}

/* Reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* CTA Button */
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-accent);
  border-radius: 50px;
  transition: transform var(--transition), box-shadow var(--transition);
  box-shadow: 0 4px 24px rgba(255, 77, 0, 0.3);
  animation: pulse-glow 3s ease-in-out infinite;
}

.btn-cta:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 32px rgba(255, 77, 0, 0.45);
}

.btn-cta:active {
  transform: scale(0.97);
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 4px 24px rgba(255, 77, 0, 0.3); }
  50% { box-shadow: 0 4px 40px rgba(255, 77, 0, 0.55); }
}

/* Glass card base */
.glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-md);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-surface);
}
::-webkit-scrollbar-thumb {
  background: var(--color-text-light);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  .container {
    padding: 0 20px;
  }
}
""")

# 2. AuroraBackground.jsx
write("components/AuroraBackground.jsx", """import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-noise" />
    </div>
  );
}
""")

# 3. Navbar.jsx
write("components/Navbar.jsx", """import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { business } from '../data/content';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Reseñas', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#0b1120]/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-3 h-3 rounded-full bg-[#ff4d00] group-hover:shadow-[0_0_10px_#ff4d00] transition-shadow" />
          <span className="text-white font-[family-name:var(--font-display)] font-bold text-xl tracking-tight">
            {business.shortName}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4d00] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href={`tel:${business.phone}`}
            className="px-5 py-2.5 rounded-full bg-[#ff4d00] text-white text-sm font-semibold hover:bg-[#e04500] transition-colors shadow-[0_0_20px_rgba(255,77,0,0.3)]"
          >
            {business.phoneDisplay}
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b1120]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${business.phone}`}
                className="mt-4 px-6 py-3 rounded-full bg-[#ff4d00] text-white text-center font-semibold"
              >
                {business.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
""")

# 4. Hero.jsx
write("components/Hero.jsx", """import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AuroraBackground from './AuroraBackground';
import { business } from '../data/content';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <AuroraBackground />

      <motion.div
        className="container relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/60 text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
              Servicio Premium a Domicilio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y:  REMOVED }}
