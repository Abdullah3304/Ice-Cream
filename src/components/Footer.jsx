import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { contactInfo, socialLinks } from '../data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-container footer-inner">
        <div className="footer-brand">
          {brand.useLogoImage ? (
            <img src={brand.logo} alt={`${brand.name} ${brand.tagline}`} style={{ '--brand-logo': `${brand.logoSize}px` }} />
          ) : (
            <span>{brand.logoMark} {brand.name}</span>
          )}
          <p className="footer-tagline">
            Small-batch dairy ice cream. Bold flavors. Zero shortcuts.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/products">Flavors</Link></li>
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
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {brand.name} {brand.tagline}</span>
          <span className="footer-bottom__note">Crafted with cream, not compromise.</span>
        </div>
      </div>
    </footer>
  );
}
