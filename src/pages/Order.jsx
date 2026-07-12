import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { contactInfo } from '../data/products';
import './Order.css';

const tubs = [
  {
    id: 'party',
    size: '9.5 L',
    label: 'The Big Bang',
    vibe: 'Party-size for the whole block',
    image: '/images/products/9.4 liter.webp',
    accent: '#ff6b9d',
  },
  {
    id: 'family',
    size: '4.5 L',
    label: 'The Bang',
    vibe: 'Family nights, freezer-ready',
    image: '/images/products/4.5 liter.webp',
    accent: '#ffb347',
  },
  {
    id: 'bar',
    size: '750 ml',
    label: 'Bar Pack',
    vibe: 'Scoop-ready bars for every craving',
    image: '/images/products/750ML Bar/Mango.webp',
    accent: '#67e8f9',
  },
];

const spotlightFlavors = [
  { name: 'Praline', image: '/images/products/750ML Bar/Praline.webp' },
  { name: 'Chocolate', image: '/images/products/750ML Bar/Chocolate.webp' },
  { name: 'Vanilla', image: '/images/products/750ML Bar/Vanilla.webp' },
  { name: 'Pistachio', image: '/images/products/750ML Bar/Pistachio.webp' },
];

export default function Order() {
  const [activeTub, setActiveTub] = useState(tubs[0]);
  const [flavor, setFlavor] = useState(spotlightFlavors[0].name);

  useEffect(() => {
    document.title = `Order a Tub — ${brand.name} ${brand.tagline}`;
  }, []);

  return (
    <div className="order-page">
      <section className="order-scene">
        <div className="order-scene__bg" aria-hidden="true">
          <img src="/images/hero.webp" alt="" loading="eager" decoding="async" />
          <div className="order-scene__veil" />
          <div className="order-scene__frost" />
        </div>

        <div className="container order-scene__stage">
          <div className="order-scene__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              {brand.name} · Order desk
            </p>
            <h1>
              Your freezer
              <span className="text-gradient"> just called</span>
            </h1>
            <p className="order-scene__lead">
              Pick a tub size, name a flavor, and we&apos;ll get it chilled your way.
            </p>
            <div className="order-scene__actions">
              <Link to="/coming-soon?from=WhatsApp%20ordering" className="btn btn--glow">
                Order on WhatsApp
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Send a request
              </Link>
            </div>
          </div>

          <div className="order-scene__visual" aria-hidden="true">
            <div
              className="order-scene__glow"
              style={{ '--tub-accent': activeTub.accent }}
            />
            <img
              key={activeTub.id}
              src={activeTub.image}
              alt=""
              className="order-scene__tub"
              loading="eager"
              decoding="async"
            />
            <div className="order-scene__orbit">
              {spotlightFlavors.map((item, i) => (
                <img
                  key={item.name}
                  src={item.image}
                  alt=""
                  className={`order-scene__orbit-item order-scene__orbit-item--${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="order-picker">
        <div className="container">
          <div className="order-picker__head">
            <h2>Choose your tub</h2>
            <p>One tap switches the scene — find the size that fits the moment.</p>
          </div>

          <div className="order-picker__sizes" role="list">
            {tubs.map((tub) => {
              const selected = tub.id === activeTub.id;
              return (
                <button
                  key={tub.id}
                  type="button"
                  role="listitem"
                  className={`order-size${selected ? ' is-selected' : ''}`}
                  style={{ '--tub-accent': tub.accent }}
                  aria-pressed={selected}
                  onClick={() => setActiveTub(tub)}
                >
                  <span className="order-size__size">{tub.size}</span>
                  <span className="order-size__label">{tub.label}</span>
                  <span className="order-size__vibe">{tub.vibe}</span>
                </button>
              );
            })}
          </div>

          <div className="order-picker__flavors">
            <p className="order-picker__flavors-label">Flavor mood</p>
            <div className="order-flavor-row">
              {spotlightFlavors.map((item) => {
                const selected = item.name === flavor;
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`order-flavor${selected ? ' is-selected' : ''}`}
                    aria-pressed={selected}
                    onClick={() => setFlavor(item.name)}
                  >
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <Link to="/products" className="order-flavor order-flavor--more">
                <span>See all</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="order-confirm">
        <div className="container order-confirm__inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__line" />
              Ready when you are
            </p>
            <h2>
              {activeTub.size} · {flavor}
            </h2>
            <p>
              Call {contactInfo.phone} or message us on WhatsApp — we&apos;ll confirm
              availability and delivery for your area.
            </p>
          </div>
          <div className="order-confirm__actions">
            <Link to="/coming-soon?from=WhatsApp%20ordering" className="btn btn--glow">
              Confirm on WhatsApp
            </Link>
            <a className="btn btn--ghost" href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}>
              Call the desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
