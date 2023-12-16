import './globals.css';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

export const metadata = {
  title: 'Roberto Franco | Full Stack Web Developer',
  description: 'Roberto Franco | Full Stack Web Developer',
};

// app/layout.tsx
import { Providers } from './providers';

import AuthProvider from './context/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div id="root"></div>
          <Providers>
            <Navigation />
            {children}
            <Footer />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
