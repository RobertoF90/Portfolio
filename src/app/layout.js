import './globals.css';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

export const metadata = {
  title: 'Roberto Franco | Full Stack Web Developer',
  description: 'Roberto Franco | Full Stack Web Developer',
};

// app/layout.tsx
import { Providers } from './providers';

import AuthProvider from '@/context/AuthProvider';

import styles from './styles.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root"></div>
        <Providers>
          <div className={styles.ui}>
            <AuthProvider>
              <Navigation />
            </AuthProvider>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
