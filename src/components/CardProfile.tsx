import Link from "next/link";
import { Card } from "./ui/card";
import { Clipboard, Home, ScanFace, User } from "lucide-react";

const CardProfile: React.FC = () => {
    return (
        <div>
            <Card>
                <ul className="flex flex-col w-64 m-5 items-center">
                    <Link
                        href="/account/documents/info"
                        className="flex items-center w-full p-2 text-gray-700 hover:text-indigo-500 transition-colors duration-300"
                    >
                        <div className="mr-2">
                            <User size={20} />
                        </div>
                        <span>
                            Informações da Conta
                        </span>
                    </Link>
                    <Link
                        href="/account/documents/personal"
                        className="flex items-center w-full p-2 text-gray-700 hover:text-indigo-500 transition-colors duration-300"
                    >
                        <div className="mr-2">
                            <Clipboard size={20} />
                        </div>
                        <span>
                            Informações Pessoais
                        </span>
                    </Link>
                    <Link
                        href="/account/documents/proof-of-identification"
                        className="flex items-center w-full p-2 text-gray-700 hover:text-indigo-500 transition-colors duration-300"
                    >
                        <div className="mr-2">
                            <ScanFace size={20} />
                        </div>
                        <span>
                            Comprovante de Identidade
                        </span>
                    </Link>
                    <Link
                        href="/account/documents/proof-of-address"
                        className="flex items-center w-full p-2 text-gray-700 hover:text-indigo-500 transition-colors duration-300"
                    >
                        <div className="mr-2">
                            <Home size={20} />
                        </div>
                        <span>
                            Comprovante de Endereço
                        </span>
                    </Link>
                </ul>
            </Card>
        </div>
    );
}

export { CardProfile };
