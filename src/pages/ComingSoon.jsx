import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { brand } from '../data/brand';
import './ComingSoon.css';

export default function ComingSoon() {
  const [params] = useSearchParams();
  const feature = params.get('from') || 'This feature';

  useEffect(() => {
    document.title = `Coming Soon — ${brand.name} ${brand.tagline}`;
  }, []);

  return (
    <section className="coming-soon">
      <div className="container coming-soon__inner">
        <p className="eyebrow">
          <span className="eyebrow__line" />
          Almost there
        </p>
        <h1>
          Coming
          <span className="text-gradient"> soon</span>
        </h1>
        <p className="coming-soon__lead">
          {feature} is not live yet — we are refining every detail. Check back soon.
        </p>
        <div className="coming-soon__actions">
          <Link to="/" className="btn btn--glow">Back to home</Link>
          <Link to="/contact" className="btn btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
