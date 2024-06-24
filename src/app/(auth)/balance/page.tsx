import { CardBalance } from "@/components/CardBalance";
import { CardBonus } from "@/components/CardBonus";
import { CardTotal } from "@/components/CardTotal";

export default function page() {
    return (
        <div>
            <div className="m-4">
                <h1 className="font-bold text-xl">Meu Saldo</h1>
            </div>
            <div className="flex flex-1 gap-16 justify-center">
                <CardBalance />
                <CardBonus />
                <CardTotal />
            </div>
        </div>
    )
}