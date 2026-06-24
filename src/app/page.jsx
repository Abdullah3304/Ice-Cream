import Link from 'next/link';
import Image from 'next/image';
import ScoopStack from '@/components/ScoopStack';
import FlavorMarquee from '@/components/FlavorMarquee';
import { showcaseFlavors } from '@/data/products';

const highlights = [
  {
    num: '01',
    title: 'Pure dairy only',
    text: 'Fresh cream and milk. No vegetable oils. No fillers. Just honest ingredients.',
    accent: 'var(--flavor-strawberry)',
    image: '/images/products/vanilla.png',
  },
  {
    num: '02',
    title: '13+ wild flavors',
    text: 'From nostalgic kulfa to indulgent fudge — every scoop tells a different story.',
    accent: 'var(--flavor-mango)',
    image: '/images/products/kulfa.png',
  },
  {
    num: '03',
    title: 'Three tub sizes',
    text: 'Joy 700ml · Family 1500ml · Party 9400ml. Built for solo nights and big celebrations.',
    accent: 'var(--flavor-mint)',
    image: '/images/products/praline.png',
  },
  {
    num: '04',
    title: 'Nationwide love',
    text: 'Found in 10,000+ stores. Chilled from factory to freezer, every single time.',
    accent: 'var(--flavor-lavender)',
    image: '/images/products/mango.png',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__backdrop">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            className="hero__backdrop-img"
            sizes="100vw"
          />
          <div className="hero__backdrop-mask" />
        </div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              Est. 1952 · Small batch · Big joy
            </p>
            <h1 className="hero__title">
              Scoop into
              <span className="hero__title-accent"> something</span>
              <br />
              extraordinary.
            </h1>
            <p className="hero__lead">
              XYZ crafts velvety dairy ice cream for people who can taste the difference —
              creamy, clean, and unapologetically delicious.
            </p>
            <div className="hero__actions">
              <Link href="/products" className="btn btn--glow">Explore flavors</Link>
              <Link href="/about" className="btn btn--ghost">Our story</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__product-ring">
              <Image src="/images/products/praline.png" alt="Praline" width={90} height={120} className="hero__ring-item hero__ring-item--1" />
              <Image src="/images/products/mango.png" alt="Mango" width={76} height={100} className="hero__ring-item hero__ring-item--2" />
              <Image src="/images/products/fudge-brownie.png" alt="Fudge Brownie" width={82} height={110} className="hero__ring-item hero__ring-item--3" />
            </div>
            <ScoopStack />
            <div className="hero__badge">
              <span>100%</span>
              <small>Dairy</small>
            </div>
          </div>
        </div>
      </section>

      <FlavorMarquee />

      <section className="bento">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              Why XYZ
            </p>
            <h2>Not your average freezer aisle.</h2>
          </div>
          <div className="bento__grid">
            {highlights.map((item) => (
              <article
                className="bento__card"
                key={item.num}
                style={{ '--card-accent': item.accent }}
              >
                <div className="bento__card-top">
                  <span className="bento__num">{item.num}</span>
                  <div className="bento__thumb">
                    <Image src={item.image} alt="" width={56} height={56} />
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
              Flavor is an
              <em> art form</em>
              .
            </h2>
            <p>
              We slow-churn every batch with real ingredients you can pronounce.
              No shortcuts. No mystery oils. Just ice cream that melts on your tongue
              and stays in your memory.
            </p>
            <Link href="/products" className="btn btn--glow">See the menu</Link>
          </div>
          <div className="showcase__gallery">
            {showcaseFlavors.map((flavor) => (
              <figure className={`float-card ${flavor.className}`} key={flavor.name}>
                <div className="float-card__frame">
                  <Image src={flavor.image} alt={flavor.name} width={200} height={140} />
                </div>
                <figcaption>{flavor.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-panel">
        <div className="container cta-panel__inner">
          <h2>Ready for your next favorite flavor?</h2>
          <p>Find XYZ at a store near you — or drop us a line.</p>
          <div className="cta-panel__actions">
            <Link href="/products" className="btn btn--light">Browse flavors</Link>
            <Link href="/contact" className="btn btn--outline-light">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
