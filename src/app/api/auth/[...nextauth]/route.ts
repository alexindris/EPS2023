/* eslint-disable no-param-reassign */
import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const comparedPassword = await compare(
          credentials.password,
          user?.password ?? '',
        );
        if (user && user.password && comparedPassword) {
          return {
            name: user.name,
            email: user.email,
            image: user.image,
            id: user.id,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const userData = await prisma.user.findUnique({
          where: {
            email: token.email ?? '',
          },
        });

        token.id = userData?.id ?? '';
        token.email = userData?.email ?? '';
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
