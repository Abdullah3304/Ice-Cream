import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import './BrandMark.css';

export default function BrandMark() {
  const size = brand.logoSize;

  return (
    <Link
      to="/"
      className="brand-mark"
      style={{ '--brand-logo': `${size}px` }}
      aria-label={`${brand.name} ${brand.tagline} — Home`}
    >
      {brand.useLogoImage ? (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <>
          <span className="brand-mark__fallback">{brand.logoMark}</span>
          <div>
            <strong>{brand.name}</strong>
            <small>{brand.tagline}</small>
          </div>
        </>
      )}
    </Link>
  );
}
