import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { API_URL } from '@/app/utils';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
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
        const response = await fetch(`${API_URL}/api/v1/user`, {
          method: 'POST',
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/JSON ',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();
        console.log(
          credentials?.username === data.user.username &&
            credentials?.password === data.user.password
        );
        if (
          credentials?.username === data.user.username &&
          credentials?.password === data.user.password
        ) {
          return data.user;
        } else {
          return null;
        }
      },
    }),
  ],
};
