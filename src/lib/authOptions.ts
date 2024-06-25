import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from "jsonwebtoken"

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, req) {
                try {
                    const response = await fetch(`${process.env.API_AUTH_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        })
                    })

                    const data = await response.json()

                    if (data && response.ok) {
                        const decodedToken = jwt.verify(data.token, process.env.JWT_SECRET as string) as User & { token: string };
                        return { ...decodedToken, token: data.token }
                    }
                    return null
                } catch (error) {
                    console.error(error)
                    return null
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
}
