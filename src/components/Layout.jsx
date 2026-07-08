import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BrandMark from './BrandMark';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--1" />
      <div className="ambient__orb ambient__orb--2" />
      <div className="ambient__orb ambient__orb--3" />
      <div className="ambient__grain" />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      &#8593;
    </button>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AmbientBackground />
      <div className="site-top">
        <BrandMark />
      </div>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
