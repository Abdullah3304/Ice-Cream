import { brand } from '../data/brand';
import './BrandMark.css';

export default function BrandMark() {
  const size = brand.logoSize;

  return (
    <div
      className="brand-mark"
      style={{ '--brand-logo': `${size}px` }}
      aria-label={`${brand.name} ${brand.tagline}`}
    >
      {brand.useLogoImage ? (
        <img
          src={brand.logo}
          alt=""
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <span className="brand-mark__fallback">{brand.logoMark}</span>
      )}
      <div>
        <strong>{brand.name}</strong>
        <small>{brand.tagline}</small>
      </div>
    </div>
  );
}
