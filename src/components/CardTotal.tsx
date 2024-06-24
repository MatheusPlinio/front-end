import { Card } from "./ui/card"
import { Banknote, PiggyBank } from "lucide-react"
import { Label } from "./ui/label"

const CardTotal = () => {
    return (
        <div>
            <Card className="w-52 h-24 p-2 m-2 flex items-center">
                <div>
                    <Banknote size={50} />
                </div>
                <div className="m-2 flex flex-col flex-grow">
                    <Label>Total</Label>
                    <span>R$ 0,00</span>
                </div>
            </Card>
        </div>
    )
}

export { CardTotal }