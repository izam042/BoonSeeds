'use client';

import { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
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
    <section id="contact" className="contact animate-in" ref={sectionRef}>
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Connect with us</span>
          <h2>We Are Just a Call Away</h2>
          <p>
            Whether you need bulk raw materials or want to discuss custom seed
            processing — our team is ready to help.
          </p>
        </div>

        <div className="contact__grid">
          {/* Addresses panel */}
          <div className="contact__panel">
            <h3>Visit Our Facilities</h3>

            <div className="contact__addresses">
              <a
                href="https://maps.app.goo.gl/GhREutboJP7CsjEs9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__address"
              >
                <div className="contact__address-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="contact__address-label">Plant Work</span>
                  <span className="contact__address-text">Khasra No-81, Roorkee Road, North Rampuri, 251001, Muzaffarnagar</span>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Khasra+No-458,+Begrajpur,+251203"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__address"
              >
                <div className="contact__address-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <div>
                  <span className="contact__address-label">Corp Office</span>
                  <span className="contact__address-text">Khasra No-458, Begrajpur, 251203</span>
                </div>
              </a>
            </div>

            <div className="contact__map-link">
              <a
                href="https://maps.app.goo.gl/GhREutboJP7CsjEs9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open in Google Maps
              </a>
            </div>

            <div className="contact__chips">
              <span className="contact__chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Mon-Sat, 9am-7pm
              </span>
              <span className="contact__chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 3 20 16 16 16" />
                </svg>
                Nationwide Dispatch
              </span>
              <span className="contact__chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Hindi &amp; English Support
              </span>
            </div>
          </div>

          {/* Contact cards */}
          <div className="contact__cards">
            <a href="tel:+919759110000" className="contact__card">
              <div className="contact__card-icon contact__card-icon--phone">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <span className="contact__card-label">Call</span>
                <span className="contact__card-value">+91 9759110000</span>
                <span className="contact__card-meta">Dedicated agronomy helpline</span>
              </div>
            </a>

            <a href="mailto:support@boonseeds.com" className="contact__card">
              <div className="contact__card-icon contact__card-icon--email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className="contact__card-label">Email</span>
                <span className="contact__card-value">support@boonseeds.com</span>
                <span className="contact__card-meta">Response within 1 business day</span>
              </div>
            </a>

            <a
              href="https://wa.me/919759110000"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon contact__card-icon--whatsapp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <span className="contact__card-label">WhatsApp</span>
                <span className="contact__card-value">+91 9759110000</span>
                <span className="contact__card-meta">Share crop images for instant tips</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
