import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './ui/Footer';

export const metadata = {
  title: 'Roberto Franco | Full Stack Web Developer',
  description: 'Roberto Franco | Full Stack Web Developer',
};

import { Providers } from './providers';

import styles from './styles.module.css';
import { ThemeProvider } from 'next-themes';
import Navigation from './ui/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>
          <ThemeProvider defaultTheme="system">
            <div className={styles.ui}>
              <nav className={styles.nav}>
                <Navigation />
              </nav>
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
