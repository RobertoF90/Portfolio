import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './ui/Footer';

export const metadata = {
  title: 'Roberto Franco | Full Stack Web Developer',
  description: 'Roberto Franco | Full Stack Web Developer',
};

import { Providers } from './providers';

import styles from './styles.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>
          <div className={styles.ui}>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
