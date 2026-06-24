import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '@/data/products';

export const metadata = {
  title: 'Flavors — XYZ Ice Cream',
  description: 'Browse XYZ Ice Cream flavors — tubs, bars, cones, and sticks.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <div className="page-hero__bg">
          <Image src="/images/products/indulge-02.png" alt="" fill sizes="100vw" />
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
            <div className="flavor-section" key={category.name}>
              <div className="flavor-section__head">
                <span
                  className="flavor-section__swatch"
                  style={{ background: category.color }}
                />
                <div>
                  <h2>{category.name}</h2>
                  <p>{category.products.length} flavors</p>
                </div>
              </div>
              <div className="flavor-grid">
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
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="flavor-card__img"
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
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel cta-panel--compact">
        <div className="container cta-panel__inner">
          <h2>Can&apos;t decide? Try them all.</h2>
          <Link href="/contact" className="btn btn--light">Ask us for recommendations</Link>
        </div>
      </section>
    </>
  );
}
