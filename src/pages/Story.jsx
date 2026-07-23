import { useEffect } from 'react';
import './Story.css';

const milestones = [
  { year: '1952', text: 'Malaice begins as a tiny neighborhood scoop shop with one obsession: extraordinary dairy ice cream.' },
  { year: '2000s', text: 'Industrial scale meets artisan soul — retail expands nationwide without diluting the craft.' },
  { year: 'Today', text: '100,000+ liters daily. 10,000+ stores. One unwavering standard: pure dairy, made properly.' },
];

const gallery = [
  { src: '/images/products/lids/malaice-belgian-chocolate-lid.webp', alt: 'Malaice Belgian Chocolate Lid', variant: 'lid' },
  { src: '/images/products/popsicles/salted-caramel.webp', alt: 'Salted Caramel Popsicle', variant: 'label' },
  { src: '/images/products/lollies/strawberry.webp', alt: 'Malaice Strawberry ICE Lolly', variant: 'label' },
  { src: '/images/products/lids/malaice-lotus-crumble-lid.webp', alt: 'Malaice Lotus Crumble Lid', variant: 'lid' },
];

const craftPillars = [
  {
    title: 'Pure dairy',
    text: 'Fresh cream and milk only. No vegetable oils. No fillers. The silky texture adults deserve starts with honest dairy.',
    image: '/images/products/750ml-bar/vanilla.webp',
  },
  {
    title: 'Real flavours',
    text: 'From nostalgic kulfa to Belgian chocolate — every recipe is built for depth, not shortcuts. Extraordinary takes time.',
    image: '/images/products/750ml-bar/chocolate.webp',
  },
  {
    title: 'Crafted daily',
    text: 'Batch by batch, we chase the same goal: ice cream that melts cleanly, tastes true, and feels like a small luxury.',
    image: '/images/products/750ml-bar/mango.webp',
  },
  {
    title: 'Made properly',
    text: 'If it is not made with care, it is not the real deal. Pastes, bases, and finishes are treated with the same respect as the scoop.',
    image: '/images/products/kulfi/badamii.webp',
  },
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
            The Malaice Way
          </h1>
          <p className="page-hero__lead">
            We have been making ice cream like no other since 1952. Our vision is simple:
            a spoonful of luxury to elevate the everyday — crafted from the highest quality,
            carefully selected ingredients. If you are like everyone else, you are lost.
            So we make ice cream like no other.
          </p>
        </div>
      </section>

      <section className="about-gallery">
        <div className="container about-gallery__grid">
          {gallery.map((item, i) => (
            <div
              className={`about-gallery__item about-gallery__item--${i + 1} about-gallery__item--${item.variant}`}
              key={item.alt}
            >
              <div className="about-gallery__frame">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="story-block">
        <div className="container story-block__grid">
          <div className="story-block__content">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              Dedicated to great ice cream
            </p>
            <h2>Not just any scoop shop</h2>
            <p>
              We spent a long time working out how to make the best ice cream we could.
              We think we are pretty close. Here is how we got here.
            </p>
            <p>
              From a handful of local carts to a nationwide network, Malaice grew without
              losing the craft that made people fall in love with us. Real cream. Real milk.
              Flavours deserving of an adult&apos;s palate — and a child&apos;s delight.
            </p>
            <p>
              Today that promise still guides every batch we churn: the best that best can be.
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
              <span className="stat-card__label">Flavours</span>
            </div>
            <div className="stat-card stat-card--wide">
              <span className="stat-card__value">100K+</span>
              <span className="stat-card__label">Liters churned daily</span>
            </div>
          </div>
        </div>
      </section>

      <section className="craft-pillars">
        <div className="container">
          <div className="section-head section-head--story">
            <p className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              Our very own standards
            </p>
            <h2>Devoted to the highest quality</h2>
            <p className="section-head__lead">
              Extraordinary ice cream starts with what we put in — and what we leave out.
              We champion real ingredients and recipes made with care.
            </p>
          </div>
          <div className="craft-pillars__grid">
            {craftPillars.map((pillar) => (
              <article className="craft-card" key={pillar.title}>
                <div className="craft-card__media">
                  <img src={pillar.image} alt="" loading="lazy" decoding="async" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container philosophy__inner">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            Made from scratch
          </p>
          <h2>If it is not made properly, it is not the real deal</h2>
          <p>
            Everything that goes into Malaice — bases, flavours, finishes — is treated with
            the same respect. We set our own standards. The best ingredients, for the ultimate
            flavour. Because everyone deserves a spoonful of pleasure.
          </p>
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
