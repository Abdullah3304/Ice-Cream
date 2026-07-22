import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { contactInfo } from '../data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-container footer-inner">
        <div className="footer-brand">
          {brand.useLogoImage ? (
            <img
              src={brand.logo}
              alt={`${brand.name} ${brand.tagline}`}
              style={{ '--brand-logo': `${brand.logoSize}px` }}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span>{brand.logoMark} {brand.name}</span>
          )}
          <p className="footer-tagline">
            Extraordinary dairy ice cream. Pure ingredients. Made properly.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div>
            <h4>Social</h4>
            <div className="social-row">
              <Link to="/coming-soon?from=Instagram">Instagram</Link>
              <Link to="/coming-soon?from=Facebook">Facebook</Link>
              <Link to="/coming-soon?from=TikTok">TikTok</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {brand.name} {brand.tagline}</span>
          <span className="footer-bottom__note">The best that best can be.</span>
        </div>
      </div>
    </footer>
  );
}
