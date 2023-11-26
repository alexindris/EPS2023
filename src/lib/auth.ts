import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          //   randomKey: u.randomKey,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          //   randomKey: token.randomKey,
        },
      };
    },
  },
};
