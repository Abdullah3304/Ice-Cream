'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/about', label: 'Story' },
  { href: '/products', label: 'Flavors' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href, exact) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark">✦</span>
          <span className="brand__name">
            XYZ
            <span className="brand__tag">Ice Cream</span>
          </span>
        </Link>

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
                  href={href}
                  className={isActive(href, exact) ? 'active' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/products" className="header-cta" onClick={() => setMenuOpen(false)}>
            Order a tub
          </Link>
        </nav>
      </div>
    </header>
  );
}
