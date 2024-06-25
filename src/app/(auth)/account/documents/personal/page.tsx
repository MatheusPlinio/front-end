import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { nextAuthOptions } from "@/lib/authOptions";
import { ToIsoForToPtBR } from "@/utils/formatDates";
import { getFirstName, getLastName } from "@/utils/splits";
import { getServerSession, User } from "next-auth";

export default async function page() {
    const session = await getServerSession(nextAuthOptions)

    const user = session?.user as User

    const firstName = getFirstName(user.username)

    const lastName = getLastName(user.username)

    const birtday = ToIsoForToPtBR(user.birthday)

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
                        defaultValue={firstName}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="lastName">Último Nome</Label>
                    <Input
                        id="lastName"
                        readOnly
                        placeholder="Último Nome"
                        defaultValue={lastName}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="nationalIdentity">Identidade Nacional</Label>
                    <Input
                        id="nationalIdentity"
                        readOnly
                        placeholder="Identidade Nacional"
                        defaultValue={user.cpf}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="birthday">Data De Nascimento</Label>
                    <Input
                        id="birthday"
                        readOnly
                        placeholder="Data de Nascimento"
                        defaultValue={birtday}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="birthday"
                        readOnly
                        placeholder="Data de Nascimento"
                        defaultValue={user.address}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="country">País</Label>
                    <Input
                        id="country"
                        readOnly
                        placeholder="País"
                        defaultValue={user.country}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                        id="state"
                        readOnly
                        placeholder="Estado"
                        defaultValue={user.state}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                        id="city"
                        readOnly
                        placeholder="Cidade"
                        defaultValue={user.locality_city}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                        id="cep"
                        readOnly
                        placeholder="CEP"
                        defaultValue={user.cep}
                    />
                </div>
            </form>
        </div>
    )
}