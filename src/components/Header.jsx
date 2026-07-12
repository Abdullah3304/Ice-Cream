import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/story', label: 'Story' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href, exact) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="header-inner header-inner--nav-only">
        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
          <ul>
            {navItems.map(({ href, label, exact }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={isActive(href, exact) ? 'active' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/order"
            className={`header-cta${pathname.startsWith('/order') ? ' is-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Order a tub
          </Link>
        </nav>
      </div>
    </header>
  );
}
