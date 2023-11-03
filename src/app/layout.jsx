import './globals.css';

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
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <div id="root"></div>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
