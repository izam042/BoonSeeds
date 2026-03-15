'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './Products.css';

const products = [
  {
    name: 'Maize Seeds',
    image: '/images/maize.webp',
    description: 'High-purity foundation maize seed stock for manufacturing premium hybrid and composite seed varieties.',
    tags: ['Foundation Stock', 'High Germination'],
  },
  {
    name: 'Paddy Seeds',
    image: '/images/paddy.jpg',
    description: 'Certified paddy seed raw materials with superior genetic purity for large-scale rice seed production.',
    tags: ['Lab Tested', 'Certified'],
  },
  {
    name: 'Wheat Seeds',
    image: '/images/wheat.jpg',
    description: 'Premium wheat foundation seeds, processed and graded for seed manufacturers seeking consistent quality.',
    tags: ['Graded', 'Traceable'],
  },
  {
    name: 'Millet Seeds',
    image: '/images/millet.jpeg',
    description: 'Nutritious millet seed raw materials supporting the growing demand for sustainable seed manufacturing.',
    tags: ['Sustainable', 'High Yield'],
  },
];

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="products animate-in" ref={sectionRef}>
      <div className="container">
        <div className="section-heading">
          <span className="section-label">What We Supply</span>
          <h2>Our Raw Materials</h2>
          <p>
            Premium foundation seeds and raw materials powering seed manufacturing
            excellence across India.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, i) => (
            <div
              key={i}
              className="products__card"
              data-index={i}
            >
              <div className="products__image-wrap">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="products__image"
                />
                <div className="products__image-overlay" />
              </div>
              <div className="products__info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="products__tags">
                  {product.tags.map((tag, j) => (
                    <span key={j} className="products__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
