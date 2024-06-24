import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, res) {
                try {
                    const response = await fetch(`${process.env.API_AUTH_URL}/login`, {
                        method: 'POST',
                        headers: {
                            // 'Accept': 'application/json;version=v1_web',
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        })
                    })

                    const data = await response.json()

                    if (data && response.ok) {
                        return data
                    }
                    return null
                } catch (error) {
                    console.error(error)
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
            token: process.env.NEXTAUTH_SECRET
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