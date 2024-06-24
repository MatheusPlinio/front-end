import { Card } from "./ui/card"
import { PiggyBank } from "lucide-react"
import { Label } from "./ui/label"

const CardBonus = () => {
    return (
        <div>
            <Card className="w-52 h-24 p-2 m-2 flex items-center">
                <div>
                    <PiggyBank size={50} />
                </div>
                <div className="m-2 flex flex-col flex-grow">
                    <Label>Dinheiro de Bônus</Label>
                    <span>R$ 0,00</span>
                </div>
            </Card>
        </div>
    )
}

export { CardBonus }