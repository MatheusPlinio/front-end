import { ArrowRightLeft, Clock, Cog, DoorOpen, Gift, Medal, Shield, SquareMinusIcon, SquarePlusIcon, User, UserRoundPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";

export default function ProfileMenuDropdown() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center"><User size={20} /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="/account/documents/info" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <User size={20} />
                            </div>
                            <span>
                                Conta
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="/balance" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <Gift size={20} />
                            </div>
                            <span>
                                Meu Saldo
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <SquarePlusIcon size={20} />
                            </div>
                            <span>
                                Depositar
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <SquareMinusIcon size={20} />
                            </div>
                            <span>
                                Sacar
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <UserRoundPlus size={20} />
                            </div>
                            <span>
                                Indique um Amigo
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <ArrowRightLeft size={20} />
                            </div>
                            <span>
                                Transações
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <Clock size={20} />
                            </div>
                            <span>
                                Histórico
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <Cog size={20} />
                            </div>
                            <span>
                                Preferências
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <Shield size={20} />
                            </div>
                            <span>
                                Justiça
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 m-0">
                        <Link href="#" className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                            <div className="mr-2">
                                <Medal size={20} />
                            </div>
                            <span>
                                Recompensas
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator color="#6b7280" />
                    <DropdownMenuItem className="p-0 m-0">
                        <div className="flex items-center justify-start w-full p-2 text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                            <div>
                                <DoorOpen />
                            </div>
                            <span>
                                Sair
                            </span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
