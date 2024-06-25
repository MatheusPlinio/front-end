import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from "jsonwebtoken"
import { JWT } from "next-auth/jwt"

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.API_AUTH_URL}/refresh_tokens`, {
        method: "POST",
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`
        }
    })

    const response = await res.json()

    return {
        ...token,
        backendTokens: response
    }
}

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
                        const decodedToken = jwt.verify(data.backendTokens.accessToken, process.env.JWT_SECRET as string) as User & { token: string };
                        return { ...decodedToken, backendTokens: data.backendTokens.accessToken }
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
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.backendTokens.expiresIn)

                return token;

            return await refreshToken(token)
        },
        async session({ session, token }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;

            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
}
