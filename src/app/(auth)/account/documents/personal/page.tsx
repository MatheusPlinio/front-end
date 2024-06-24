import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
    return (
        <div className="m-4">
            <div className="m-4">
                <h2>Informações Pessoais</h2>
            </div>
            <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col mb-5">
                    <Label htmlFor="firstName">Primeiro Nome</Label>
                    <Input
                        id="firstName"
                        readOnly
                        placeholder="Primeiro Nome"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="lastName">Último Nome</Label>
                    <Input
                        id="lastName"
                        readOnly
                        placeholder="Último Nome"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="nationalIdentity">Identidade Nacional</Label>
                    <Input
                        id="nationalIdentity"
                        readOnly
                        placeholder="Identidade Nacional"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="birthday">Data De Nascimento</Label>
                    <Input
                        id="birthday"
                        readOnly
                        placeholder="Data de Nascimento"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="birthday"
                        readOnly
                        placeholder="Data de Nascimento"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="country">País</Label>
                    <Input
                        id="country"
                        readOnly
                        placeholder="País"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                        id="state"
                        readOnly
                        placeholder="Estado"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                        id="city"
                        readOnly
                        placeholder="Cidade"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                        id="cep"
                        readOnly
                        placeholder="CEP"
                    />
                </div>
            </form>
        </div>
    )
}