import { CardProfile } from "@/components/CardProfile";
import { Card } from "@/components/ui/card";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex flex-1 gap-20 justify-center items-center m-10">
            <CardProfile />
            <Card className="w-[40%]">
                {children}
            </Card>
        </div>
    );
}
