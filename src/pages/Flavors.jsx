import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { productCategories } from '../data/products';
import './Flavors.css';

const ALL_CATEGORIES = 'all';

const categoryOptions = [
  { value: ALL_CATEGORIES, label: 'All categories', color: 'var(--gradient-brand)' },
  ...productCategories.map((category) => ({
    value: category.name,
    label: category.name,
    color: category.color,
  })),
];

function CategoryDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const selected = categoryOptions.find((option) => option.value === value) ?? categoryOptions[0];

  useEffect(() => {
    if (!open) return undefined;

    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className={`flavor-filter__control${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        id="product-category"
        className="flavor-filter__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={`flavor-filter__swatch${selected.value === ALL_CATEGORIES ? ' flavor-filter__swatch--all' : ''}`}
          style={selected.value === ALL_CATEGORIES ? undefined : { background: selected.color }}
          aria-hidden="true"
        />
        <span className="flavor-filter__value">{selected.label}</span>
        <span className="flavor-filter__chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul className="flavor-filter__menu" role="listbox" aria-labelledby="product-category">
          {categoryOptions.map((option) => {
            const isActive = option.value === value;
            return (
              <li key={option.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={`flavor-filter__option${isActive ? ' is-active' : ''}`}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span
                    className={`flavor-filter__swatch${option.value === ALL_CATEGORIES ? ' flavor-filter__swatch--all' : ''}`}
                    style={option.value === ALL_CATEGORIES ? undefined : { background: option.color }}
                    aria-hidden="true"
                  />
                  <span>{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function FamilyPackShowcase({ packs, color }) {
  return (
    <div className="pack-showcase">
      {packs.map((pack) => (
        <article key={pack.title} className="pack-showcase__card" style={{ '--pack-color': color }}>
          <h3 className="pack-showcase__title">{pack.title}</h3>
          <div className="pack-showcase__img-wrap">
            <img
              src={pack.image}
              alt={pack.title}
              className="pack-showcase__img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

function sectionClass(name) {
  if (name === 'Popsicles') return ' flavor-section--popsicles';
  if (name === '750ML Bar Pack') return ' flavor-section--bars';
  if (name === 'Lids') return ' flavor-section--lids';
  if (name === 'Lollies') return ' flavor-section--lollies';
  if (name === 'Kulfi') return ' flavor-section--kulfi';
  return '';
}

function gridClass(name) {
  if (name === 'Popsicles') return ' flavor-grid--popsicles';
  if (name === '750ML Bar Pack') return ' flavor-grid--bars';
  if (name === 'Lids') return ' flavor-grid--lids';
  if (name === 'Lollies') return ' flavor-grid--lollies';
  if (name === 'Kulfi') return ' flavor-grid--kulfi';
  return '';
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const visibleCategories = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES) return productCategories;
    return productCategories.filter((category) => category.name === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    document.title = `Products — ${brand.name} ${brand.tagline}`;
  }, []);

  return (
    <>
      <section className="page-hero page-hero--products">
        <div className="page-hero__bg">
          <img src="/images/hero.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            The collection
          </p>
          <h1>
            Pick your
            <span className="text-gradient"> poison</span>
            <br />
            <small className="hero-sub">(the delicious kind)</small>
          </h1>
          <p className="page-hero__lead">
            Tubs, bars, cones, and sticks — every format, every mood, every craving.
          </p>
        </div>
      </section>

      <section className="flavor-catalog">
        <div className="container">
          <div className="flavor-filter">
            <span className="flavor-filter__label" id="product-category-label">
              Category
            </span>
            <CategoryDropdown value={selectedCategory} onChange={setSelectedCategory} />
          </div>

          {visibleCategories.map((category, catIndex) => (
            <div className={`flavor-section${sectionClass(category.name)}`} key={category.name}>
              <div className="flavor-section__head">
                <span className="flavor-section__swatch" style={{ background: category.color }} />
                <div>
                  <h2>{category.name}</h2>
                  <p>
                    {category.type === 'packs'
                      ? 'Party-size tubs for every celebration'
                      : `${category.products.length} flavors`}
                  </p>
                </div>
              </div>
              {category.type === 'packs' ? (
                <FamilyPackShowcase packs={category.packs} color={category.color} />
              ) : (
                <div className={`flavor-grid${gridClass(category.name)}`}>
                  {category.products.map((product, i) => (
                    <article
                      className="flavor-card"
                      key={product.name}
                      style={{
                        '--delay': `${(i + catIndex) * 0.05}s`,
                        '--flavor-color': category.color,
                      }}
                    >
                      <div className="flavor-card__img-wrap">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="flavor-card__img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="flavor-card__body">
                        <span className="flavor-card__tag">{category.tag}</span>
                        <h3>{product.name}</h3>
                        <p>Pure dairy · Small batch</p>
                      </div>
                      <div className="flavor-card__orb" />
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel cta-panel--compact">
        <div className="container cta-panel__inner">
          <h2>Can&apos;t decide? Try them all.</h2>
          <Link to="/contact" className="btn btn--light">Ask us for recommendations</Link>
        </div>
      </section>
    </>
  );
}
