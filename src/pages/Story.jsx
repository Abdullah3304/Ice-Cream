import { useEffect } from 'react';
import './Story.css';

const milestones = [
  { year: '1952', text: 'Malaice begins as a tiny neighborhood scoop shop with a big dream.' },
  { year: '2000s', text: 'Industrial scale meets artisan soul — retail expansion across the nation.' },
  { year: 'Today', text: '100,000+ liters daily. 10,000+ stores. One unwavering standard: pure dairy.' },
];

const gallery = [
  { src: '/images/products/Lids/Malaice Belgian Chocolate Lid.png', alt: 'Malaice Belgian Chocolate Lid' },
  { src: '/images/products/Popsicles/salted caramel.png', alt: 'Salted Caramel Popsicle' },
  { src: '/images/products/Lollies/strawberry.png', alt: 'Malaice Strawberry ICE Lolly' },
  { src: '/images/products/Lids/Malaice Lotus Crumble Lid.png', alt: 'Malaice Lotus Crumble Lid' },
];

export default function About() {
  useEffect(() => {
    document.title = 'Our Story — Malaice Ice Cream';
  }, []);

  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            Our story
          </p>
          <h1>
            Born from cream.
            <br />
            <span className="text-gradient">Built on belief.</span>
          </h1>
          <p className="page-hero__lead">
            For over seven decades, Malaice has chased one obsession: ice cream that feels
            like a celebration in every spoonful.
          </p>
        </div>
      </section>

      <section className="about-gallery">
        <div className="container about-gallery__grid">
          {gallery.map((item, i) => (
            <div className={`about-gallery__item about-gallery__item--${i + 1}`} key={item.alt}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="story-block">
        <div className="container story-block__grid">
          <div className="story-block__content">
            <h2>The Malaice way</h2>
            <p>
              We started with a simple promise — use real cream, real milk, and never
              cut corners. That promise still guides every batch we churn.
            </p>
            <p>
              From a handful of local carts to a nationwide network, we&apos;ve grown without
              losing the craft that made people fall in love with us in the first place.
            </p>
          </div>
          <div className="stats-bento">
            <div className="stat-card stat-card--large">
              <span className="stat-card__value">70+</span>
              <span className="stat-card__label">Years of craft</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">10K+</span>
              <span className="stat-card__label">Stores</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">13+</span>
              <span className="stat-card__label">Flavors</span>
            </div>
            <div className="stat-card stat-card--wide">
              <span className="stat-card__value">100K+</span>
              <span className="stat-card__label">Liters churned daily</span>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <h2 className="timeline__title">Milestones</h2>
          <div className="timeline__track">
            {milestones.map((item) => (
              <article className="timeline__item" key={item.year}>
                <span className="timeline__year">{item.year}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
