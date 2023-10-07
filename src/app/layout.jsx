import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// app/layout.tsx
import { Providers } from './providers';
import Header from './Components/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="root"></div>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}