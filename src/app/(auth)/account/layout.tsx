import { AccountHeader } from "@/components/AccountHeader";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <AccountHeader />
            {children}
        </div>
    );
}
