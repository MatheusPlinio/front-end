import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
    return (
        <div className="m-4">
            <div className="m-4">
                <h2 className="font-bold">Informações da Conta</h2>
            </div>
            <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col mb-5">
                    <Label htmlFor="name">Nome de Exibição</Label>
                    <Input
                        id="name"
                        readOnly
                        placeholder="Nome de Exibição"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        readOnly
                        placeholder="Endereço de Email"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="password">Senha Atual</Label>
                    <Input
                        id="password"
                        readOnly
                        placeholder="Senha atual"
                        type="password"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                        id="telefone"
                        readOnly
                        placeholder="Telefone"
                    />
                </div>
            </form>
        </div>
    )
}
