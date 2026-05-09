import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const adminEmail = process.env.AUTH_EMAIL;
                const adminPassword = process.env.AUTH_PASSWORD;

                if (credentials.email === adminEmail && credentials.password === adminPassword) {
                    return { id: '1', name: 'Buy 2 Fun Admin', email: adminEmail };
                }

                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin'
    },
    secret: process.env.NEXTAUTH_SECRET
};
