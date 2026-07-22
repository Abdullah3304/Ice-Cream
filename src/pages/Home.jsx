import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { showcaseFlavors } from '../data/products';
import './Home.css';

function ScoopStack() {
  return (
    <div className="scoop-stack" aria-hidden="true">
      <div className="scoop scoop--3">
        <div className="scoop__shine" />
        <div className="scoop__drip scoop__drip--left" />
        <div className="scoop__drip scoop__drip--right" />
      </div>
      <div className="scoop scoop--2">
        <div className="scoop__shine" />
      </div>
      <div className="scoop scoop--1">
        <div className="scoop__shine" />
      </div>
      <div className="cone">
        <div className="cone__grid" />
      </div>
    </div>
  );
}

const heroRingProducts = [
  {
    name: 'Praline',
    image: '/images/products/750ML Bar/Praline.webp',
    className: 'hero__ring-item--1',
  },
  {
    name: 'Mango',
    image: '/images/products/750ML Bar/Mango.webp',
    className: 'hero__ring-item--2',
  },
  {
    name: 'Chocolate',
    image: '/images/products/750ML Bar/Chocolate.webp',
    className: 'hero__ring-item--3',
  },
];

function HeroVisual() {
  return (
    <div className="hero__visual">
      <div className="hero__product-ring" aria-hidden="true">
        {heroRingProducts.map((product) => (
          <img
            key={product.name}
            src={product.image}
            alt={` ${product.name}`}
            className={`hero__ring-item ${product.className}`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ))}
      </div>
      <ScoopStack />
      <div className="hero__badge">
        <span>100%</span>
        <small>Dairy</small>
      </div>
    </div>
  );
}

const highlights = [
  {
    num: '01',
    title: 'Highest standards',
    text: 'Fresh cream and milk. No vegetable oils. No fillers. Just ingredients worthy of extraordinary ice cream.',
    accent: 'var(--pink-deep)',
    image: '/images/products/750ML Bar/Vanilla.webp',
  },
  {
    num: '02',
    title: '13+ extraordinary flavours',
    text: 'From nostalgic kulfa to Belgian chocolate — every scoop is crafted for depth, not shortcuts.',
    accent: 'var(--purple-deep)',
    image: '/images/products/Kulfi/badamii.webp',
  },
  {
    num: '03',
    title: 'Made properly',
    text: 'Family 4.5 L · Party 9.4 L · 750 ml bars. Built for quiet nights and big celebrations alike.',
    accent: 'var(--blue-deep)',
    image: '/images/products/9.4 liter.webp',
  },
  {
    num: '04',
    title: 'Nationwide craft',
    text: 'Found in 10,000+ stores. Chilled from factory to freezer — consistency is part of the luxury.',
    accent: 'var(--pink-deep)',
    image: '/images/products/750ML Bar/Mango.webp',
  },
];

const marqueeFlavors = [
  'Vanilla', 'Strawberry', 'Kulfa', 'Mango ',
  'Salted Caramel', 'Pistachio', 'Chocolate', 'Tutti Frutti',
  'Lotus Crumble', 'Coconut', 'Diet Vanilla', 'Coffee',
  'Belgian Chocolate', 'Badami Kulfi', 'Khoya Kulfi', 'Pistachio Kulfi',
];

function FlavorMarquee() {
  const track = [...marqueeFlavors, ...marqueeFlavors];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((flavor, i) => (
          <span className="marquee__item" key={`${flavor}-${i}`}>
            {flavor}
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = `${brand.name} Ice Cream — Extraordinary Dairy Ice Cream`;
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__backdrop" aria-hidden="true">
          <div className="hero__backdrop-gradient" />
          <div className="hero__backdrop-mask" />
        </div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              {brand.name} · Since 1952
            </p>
            <h1 className="hero__title">
              A spoonful of
              <span className="hero__title-accent"> luxury</span>
              <br />
              for every day.
            </h1>
            <p className="hero__lead">
              {brand.name} makes extraordinary dairy ice cream — silky, honest, and crafted
              like no other. Pure cream. Real flavour. Zero shortcuts.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--glow">Explore flavours</Link>
              <Link to="/story" className="btn btn--ghost">Our story</Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <FlavorMarquee />

      <section className="bento">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              Why Malaice
            </p>
            <h2>Ice cream like no other.</h2>
          </div>
          <div className="bento__grid">
            {highlights.map((item) => (
              <article className="bento__card" key={item.num} style={{ '--card-accent': item.accent }}>
                <div className="bento__card-top">
                  <span className="bento__num">{item.num}</span>
                  <div className="bento__thumb">
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="bento__card-glow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container showcase__inner">
          <div className="showcase__text">
            <h2>
              Made from
              <em> scratch</em>
              .
            </h2>
            <p>
              We slow-churn every batch with real ingredients you can pronounce.
              No mystery oils. Just ice cream that melts on your tongue and stays
              in your memory — the best that best can be.
            </p>
            <Link to="/products" className="btn btn--glow">See the menu</Link>
          </div>
          <div className="showcase__gallery">
            {showcaseFlavors.map((flavor) => (
              <figure className={`float-card ${flavor.className}`} key={flavor.name}>
                <div className="float-card__frame">
                  <img src={flavor.image} alt={flavor.name} loading="lazy" decoding="async" />
                </div>
                <figcaption>{flavor.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-panel">
        <div className="container cta-panel__inner">
          <h2>Ready for something extraordinary?</h2>
          <p>Find Malaice at a store near you — or drop us a line.</p>
          <div className="cta-panel__actions">
            <Link to="/products" className="btn btn--light">Browse flavours</Link>
            <Link to="/contact" className="btn btn--outline-light">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
