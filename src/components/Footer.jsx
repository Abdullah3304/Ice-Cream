import Link from 'next/link';
import { contactInfo, socialLinks } from '@/data/products';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand brand--footer">
            <span className="brand__mark">✦</span>
            <span className="brand__name">
              XYZ
              <span className="brand__tag">Ice Cream</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Small-batch dairy ice cream. Bold flavors. Zero shortcuts.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/products">Flavors</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
          <span>&copy; {new Date().getFullYear()} XYZ Ice Cream</span>
          <span className="footer-bottom__note">Crafted with cream, not compromise.</span>
        </div>
      </div>
    </footer>
  );
}
