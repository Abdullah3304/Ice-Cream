'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/products';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section">
      <div className="container contact-section__grid">
        <div className="contact-card contact-card--info">
          <h2>Drop a line</h2>
          <p>Partnerships, feedback, wholesale — whatever&apos;s on your mind.</p>
          <ul className="contact-list">
            <li>
              <span className="contact-list__label">Address</span>
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <span className="contact-list__label">Phone</span>
              <span>{contactInfo.phone}</span>
            </li>
            <li>
              <span className="contact-list__label">Email</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <span className="contact-list__label">Hours</span>
              <span>{contactInfo.hours}</span>
            </li>
          </ul>
        </div>

        <div className="contact-card contact-card--form">
          {submitted ? (
            <div className="form-success-panel">
              <span className="form-success-panel__icon">✦</span>
              <h3>Message sent!</h3>
              <p>We&apos;ll get back to you faster than ice cream melts on a hot day.</p>
            </div>
          ) : (
            <>
              <h2>Send a message</h2>
              <form className="glass-form" onSubmit={handleSubmit}>
                <div className="glass-form__field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="glass-form__field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" required />
                </div>
                <div className="glass-form__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="What's on your mind?" required />
                </div>
                <button type="submit" className="btn btn--glow btn--full">Send it</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
