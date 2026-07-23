import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { contactInfo, productCategories } from '../data/products';
import './Order.css';

const barFlavors =
  productCategories.find((category) => category.name === '750ML Bar Pack')?.products ?? [];

const familyPacks =
  productCategories.find((category) => category.name === 'Pro Family Pack')?.packs ?? [];

const tubs = [
  {
    id: 'party',
    size: '9.5 L',
    label: 'The Big Bang',
    vibe: 'Party-size for the whole block',
    image: familyPacks[0]?.image ?? '/images/products/9.4-liter.webp',
    accent: '#E8B4C8',
    flavors: barFlavors,
  },
  {
    id: 'family',
    size: '4.5 L',
    label: 'The Bang',
    vibe: 'Family nights, freezer-ready',
    image: familyPacks[1]?.image ?? '/images/products/4.5-liter.webp',
    accent: '#C9B8E8',
    flavors: barFlavors,
  },
  {
    id: 'bar',
    size: '750 ml',
    label: 'Bar Pack',
    vibe: `${barFlavors.length} flavors ready to order`,
    image: barFlavors[0]?.image ?? '/images/products/750ml-bar/mango.webp',
    accent: '#A8D4F0',
    flavors: barFlavors,
  },
];

export default function Order() {
  const [activeTub, setActiveTub] = useState(tubs[0]);
  const [flavorName, setFlavorName] = useState(tubs[0].flavors[0]?.name ?? '');

  const activeFlavor = useMemo(
    () =>
      activeTub.flavors.find((item) => item.name === flavorName) ??
      activeTub.flavors[0],
    [activeTub, flavorName],
  );

  const orbitFlavors = activeTub.flavors.slice(0, 4);

  useEffect(() => {
    document.title = `Order a Tub — ${brand.name} ${brand.tagline}`;
  }, []);

  function selectTub(tub) {
    setActiveTub(tub);
    setFlavorName(tub.flavors[0]?.name ?? '');
  }

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
              {brand.name} · Order
            </p>
            <h1>
              Extraordinary
              <span className="text-gradient"> ice cream</span>
              <br />
              delivered.
            </h1>
            <p className="order-scene__lead">
              {activeTub.size} {activeTub.label} — choose your flavour and we will get it chilled your way.
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
              key={activeFlavor?.image ?? activeTub.id}
              src={activeFlavor?.image ?? activeTub.image}
              alt=""
              className="order-scene__tub"
              loading="eager"
              decoding="async"
            />
            <div className="order-scene__orbit">
              {orbitFlavors.map((item, i) => (
                <img
                  key={`${activeTub.id}-${item.name}`}
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
            <p>Select 9.5 L, 4.5 L, or 750 ml — flavors below update to match.</p>
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
                  onClick={() => selectTub(tub)}
                >
                  <span className="order-size__size">{tub.size}</span>
                  <span className="order-size__label">{tub.label}</span>
                  <span className="order-size__vibe">{tub.vibe}</span>
                </button>
              );
            })}
          </div>

          <div className="order-picker__flavors">
            <p className="order-picker__flavors-label">
              {activeTub.size} flavors
            </p>
            <div className="order-flavor-row">
              {activeTub.flavors.map((item) => {
                const selected = item.name === activeFlavor?.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`order-flavor${selected ? ' is-selected' : ''}`}
                    aria-pressed={selected}
                    onClick={() => setFlavorName(item.name)}
                  >
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                    <span>{item.name.replace(/^Malaice\s+/i, '')}</span>
                  </button>
                );
              })}
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
              {activeTub.size} · {activeFlavor?.name.replace(/^Malaice\s+/i, '') ?? 'Flavor'}
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
