'use client';

import { useEffect, useRef } from 'react';
import './CTA.css';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (target) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section animate-in" ref={sectionRef}>
      <div className="container">
        <div className="cta__banner">
          <div className="cta__shine" aria-hidden="true" />
          <div className="cta__text">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Ready for the next season?
            </span>
            <h2>Let&apos;s Plan Your <span className="text-gold">Seed Requirement</span> Together</h2>
            <p>
              Share your production volume, seed variety needs and quality specs —
              we&apos;ll recommend the right Boon Seeds raw material portfolio along with
              a quality assurance playbook.
            </p>
          </div>
          <div className="cta__actions">
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Book a Consultation
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#products')}>
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
