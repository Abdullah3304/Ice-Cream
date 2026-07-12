import { useEffect, useState } from 'react';
import { brand } from '../data/brand';
import { contactInfo } from '../data/products';
import './Contact.css';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const FORM_ACTION = `https://formsubmit.co/${encodeURIComponent(contactInfo.email)}`;

function ContactForm() {
  const [submitted, setSubmitted] = useState(
    () => new URLSearchParams(window.location.search).get('sent') === '1',
  );
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (submitted && window.location.search.includes('sent=1')) {
      window.history.replaceState(null, '', '/contact');
    }
  }, [submitted]);

  async function handleSubmit(e) {
    if (!WEB3FORMS_KEY) return;

    e.preventDefault();
    setError('');
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: `${brand.name} website — message from ${name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        e.currentTarget.reset();
        setSubmitted(true);
      } else {
        setError('Could not send your message. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  }

  const useRedirect = !WEB3FORMS_KEY;
  const nextUrl = `${window.location.origin}/contact?sent=1`;

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
              <form
                className="glass-form"
                action={useRedirect ? FORM_ACTION : undefined}
                method={useRedirect ? 'POST' : undefined}
                onSubmit={handleSubmit}
              >
                {useRedirect && (
                  <>
                    <input type="hidden" name="_next" value={nextUrl} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_subject"
                      value={`${brand.name} website — new contact message`}
                    />
                  </>
                )}
                <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />

                <div className="glass-form__field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required disabled={sending} />
                </div>
                <div className="glass-form__field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" required disabled={sending} />
                </div>
                <div className="glass-form__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="What's on your mind?" required disabled={sending} />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn--glow btn--full" disabled={sending}>
                  {sending ? 'Sending…' : 'Send it'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    document.title = `Contact — ${brand.name} ${brand.tagline}`;
  }, []);

  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            Say hello
          </p>
          <h1>
            We&apos;d love to
            <span className="text-gradient"> hear from you</span>
          </h1>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
