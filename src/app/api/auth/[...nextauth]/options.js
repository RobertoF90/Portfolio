import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NEXT_URL } from '@/lib/utils/nextUrl';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-awesome-password',
        },
      },
      async authorize(credentials) {
        // https://next-auth.js.org/configuration/providers/credentials

        const response = await fetch(`${NEXT_URL}/api/user`, {
          method: 'POST',
          body: JSON.stringify({ credentials }),
        });

        const data = await response.json();

        if (
          credentials?.username === data.username &&
          credentials?.password === data.password
        ) {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
};
