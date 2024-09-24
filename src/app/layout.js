import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './ui/Footer';

export const metadata = {
  title: 'Roberto Franco | Full Stack Web Developer',
  description: 'Roberto Franco | Full Stack Web Developer',
};

import { Providers } from './providers';

import styles from './styles.module.css';
import { Chakra } from '@/Chakra';
import Navigation from './ui/Navigation';
import { cookies } from 'next/headers';

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('chakra-ui-color-mode')?.value ?? '';
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>
          <div className={styles.ui}>
            <nav className={styles.nav}>
              <Navigation cookie={cookieValue} />
            </nav>
            <main>
              <Chakra>{children}</Chakra>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
