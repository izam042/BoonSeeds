'use client';

import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const slides = [
  {
    badge: 'Premium Seeds & Raw Material Manufacturing',
    title: 'Where Quality Seeds Meet',
    titleGold: 'Excellence',
    subtitle: 'India’s trusted seeds & raw material manufacturer. High-yield, certified varieties for sustainable farming.',
    cta1: { label: 'Explore Products', target: '#products' },
    cta2: { label: 'Contact Us', target: '#contact' },
  },
  {
    badge: 'High Yield • Certified Quality',
    title: 'Seeds of',
    titleGold: 'Success',
    subtitle: 'Optimized varieties and raw material supply for better harvests nationwide.',
    cta1: { label: 'View Seed Range', target: '#products' },
    cta2: { label: 'Why Boon Seeds', target: '#about' },
  },
  {
    badge: 'Tested & Certified',
    title: 'Quality You Can',
    titleGold: 'Trust',
    subtitle: 'Field-tested seeds & raw material for sustainable, profitable farming.',
    cta1: { label: 'Explore Varieties', target: '#products' },
    cta2: { label: 'Talk to Our Team', target: '#contact' },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  // Touch swipe support
  useEffect(() => {
    let startX = 0;
    const slider = document.querySelector('.hero__slider');
    if (!slider) return;

    const onStart = (e) => { startX = e.touches[0].clientX; };
    const onEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    };

    slider.addEventListener('touchstart', onStart, { passive: true });
    slider.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      slider.removeEventListener('touchstart', onStart);
      slider.removeEventListener('touchend', onEnd);
    };
  }, [next, prev]);

  const scrollTo = (target) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__glow hero__glow--3" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="hero__particle" style={{ '--i': i }} />
        ))}
      </div>
      <div
        className="hero__slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero__slide hero__slide--${i + 1} ${i === current ? 'hero__slide--active' : ''}`}
          >
            <div className="hero__overlay" />
            <div className="hero__pattern" />
            <div className="container hero__content-wrapper">
              <div className="hero__content">
                <span className="hero__badge">{slide.badge}</span>
                <h1>
                  {slide.title} {slide.titleGold && <span className="text-gold">{slide.titleGold}</span>}
                </h1>
                <p>{slide.subtitle}</p>
                <div className="hero__buttons">
                  <button
                    className="btn-primary"
                    onClick={() => scrollTo(slide.cta1.target)}
                  >
                    {slide.cta1.label}
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => scrollTo(slide.cta2.target)}
                  >
                    {slide.cta2.label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="hero__controls hide-mobile">
          <button className="hero__arrow" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className="hero__arrow" onClick={next} aria-label="Next slide">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('#about')}>
        <span>Discover More</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
