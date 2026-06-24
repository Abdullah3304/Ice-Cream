import { Syne, DM_Sans } from 'next/font/google';
import AmbientBackground from '@/components/AmbientBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm',
});

export const metadata = {
  title: 'XYZ Ice Cream — Scoop Into Something Extraordinary',
  description: 'XYZ Ice Cream — Bold flavors. Pure dairy. Crafted since 1952.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <AmbientBackground />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
