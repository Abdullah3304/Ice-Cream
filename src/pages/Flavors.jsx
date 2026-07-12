import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import './Flavors.css';

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
  useEffect(() => {
    document.title = 'Flavors —  Ice Cream';
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
          {productCategories.map((category, catIndex) => (
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
