import type { Metadata } from "next";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/authOptions";

export const metadata: Metadata = {
  title: "Stock",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(nextAuthOptions)

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>
      <body className="">
        <NextAuthSessionProvider>
          <div className="flex flex-col h-screen">
            <Header session={session} />
            <div className="flex flex-auto justify-between pt-16">
              <Sidebar />
              <main className="w-full">
                {children}
              </main>
              <Toaster />
            </div>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html >
  );
}
