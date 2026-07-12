import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { contactInfo, productCategories, socialLinks } from '../data/products';
import './Order.css';

function buildOrderCategories() {
  const categories = [];

  for (const category of productCategories) {
    if (category.type === 'packs' && category.packs) {
      category.packs.forEach((pack, index) => {
        categories.push({
          id: `pack-${index}`,
          size: index === 0 ? '9.5 L' : '4.5 L',
          label: pack.title.replace(/:$/, ''),
          vibe: 'Party-size tub for every celebration',
          accent: category.color,
          image: pack.image,
          flavors: [{ name: pack.title.replace(/:$/, ''), image: pack.image }],
        });
      });
      continue;
    }

    if (!category.products?.length) continue;

    categories.push({
      id: category.name.toLowerCase().replace(/\s+/g, '-'),
      size: category.tag,
      label: category.name,
      vibe: `${category.products.length} flavors ready to order`,
      accent: category.color,
      image: category.products[0].image,
      flavors: category.products,
    });
  }

  return categories;
}

const orderCategories = buildOrderCategories();

function whatsappOrderUrl(category, flavorName) {
  const text = encodeURIComponent(
    `Hi ${brand.name}! I'd like to order ${category.label}` +
      (flavorName ? ` — ${flavorName}` : '') +
      '.',
  );
  return `${socialLinks.whatsapp}&text=${text}`;
}

export default function Order() {
  const [activeCategory, setActiveCategory] = useState(orderCategories[0]);
  const [flavorName, setFlavorName] = useState(orderCategories[0].flavors[0].name);

  const activeFlavor = useMemo(
    () =>
      activeCategory.flavors.find((item) => item.name === flavorName) ??
      activeCategory.flavors[0],
    [activeCategory, flavorName],
  );

  const orbitFlavors = activeCategory.flavors.slice(0, 4);

  useEffect(() => {
    document.title = `Order a Tub — ${brand.name} ${brand.tagline}`;
  }, []);

  function selectCategory(category) {
    setActiveCategory(category);
    setFlavorName(category.flavors[0].name);
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
              {brand.name} · Order desk
            </p>
            <h1>
              Your freezer
              <span className="text-gradient"> just called</span>
            </h1>
            <p className="order-scene__lead">
              {activeCategory.label} — {activeCategory.vibe}. Pick a flavor below and we&apos;ll get it chilled your way.
            </p>
            <div className="order-scene__actions">
              <a
                className="btn btn--glow"
                href={whatsappOrderUrl(activeCategory, activeFlavor.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Send a request
              </Link>
            </div>
          </div>

          <div className="order-scene__visual" aria-hidden="true">
            <div
              className="order-scene__glow"
              style={{ '--tub-accent': activeCategory.accent }}
            />
            <img
              key={activeFlavor.image}
              src={activeFlavor.image}
              alt=""
              className="order-scene__tub"
              loading="eager"
              decoding="async"
            />
            <div className="order-scene__orbit">
              {orbitFlavors.map((item, i) => (
                <img
                  key={`${activeCategory.id}-${item.name}`}
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
            <h2>Choose your line</h2>
            <p>Select a category — flavors below update to match.</p>
          </div>

          <div className="order-picker__sizes" role="list">
            {orderCategories.map((category) => {
              const selected = category.id === activeCategory.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="listitem"
                  className={`order-size${selected ? ' is-selected' : ''}`}
                  style={{ '--tub-accent': category.accent }}
                  aria-pressed={selected}
                  onClick={() => selectCategory(category)}
                >
                  <span className="order-size__size">{category.size}</span>
                  <span className="order-size__label">{category.label}</span>
                  <span className="order-size__vibe">{category.vibe}</span>
                </button>
              );
            })}
          </div>

          <div className="order-picker__flavors">
            <p className="order-picker__flavors-label">
              {activeCategory.label} flavors
            </p>
            <div className="order-flavor-row">
              {activeCategory.flavors.map((item) => {
                const selected = item.name === activeFlavor.name;
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
              {activeCategory.label} · {activeFlavor.name.replace(/^Malaice\s+/i, '')}
            </h2>
            <p>
              Call {contactInfo.phone} or message us on WhatsApp — we&apos;ll confirm
              availability and delivery for your area.
            </p>
          </div>
          <div className="order-confirm__actions">
            <a
              className="btn btn--glow"
              href={whatsappOrderUrl(activeCategory, activeFlavor.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Confirm on WhatsApp
            </a>
            <a className="btn btn--ghost" href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}>
              Call the desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
