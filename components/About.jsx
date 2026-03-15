'use client';

import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about animate-in" ref={sectionRef}>
      <div className="about__bg-shape about__bg-shape--1" aria-hidden="true" />
      <div className="about__bg-shape about__bg-shape--2" aria-hidden="true" />
      <div className="container">
        <div className="about__card">
          <div className="about__header">
            <span className="section-label about__label">Who We Are</span>
            <h2>About <span className="text-gold">Boon Seeds</span></h2>
          </div>

          <p className="about__text about__text--1">
            At Boon Seeds, we are dedicated to empowering Indian agriculture with
            high-quality, reliable, and high-yield seed raw materials. With a
            passion for innovation and a deep respect for our seed manufacturing
            partners, we strive to provide foundation seeds and raw materials that
            deliver consistent performance across diverse Indian climates and soils.
          </p>
          <p className="about__text about__text--2">
            Founded with a vision to transform the seed manufacturing supply chain,
            from research and development to rigorous quality control — every raw
            material we produce reflects our commitment to excellence, purity, and
            traceability.
          </p>
        </div>
      </div>
    </section>
  );
}
