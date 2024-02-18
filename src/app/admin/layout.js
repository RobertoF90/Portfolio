import AuthProvider from '@/context/AuthProvider';

export default async function CreateLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
