'use client'
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TRegisterSchema, registerSchema } from "@/types/register/type"


export default function RegisterDialog() {
    const [open, setOpen] = useState(false)
    const [showCodeInput, setShowCodeInput] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    async function onSubmit(data: TRegisterSchema) {
        console.log(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">Cadastre-se</Button>
            </DialogTrigger>
            <DialogContent className="flex sm:max-w-[800px] p-0 bg-white rounded-lg shadow-lg">
                <div className="hidden md:block w-1/2 bg-gray-100 p-8">
                    {/* Left side for advertisement */}
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Our Platform</h2>
                    <p className="text-gray-700">Join us and enjoy our services.</p>
                </div>
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-col items-center mb-6">
                        <img src="https://img.logoipsum.com/243.svg" className="h-16 w-16 mb-4" alt="Logo" />
                        <h2 className="text-xl font-semibold mb-6">Cadastre-se na Plataforma</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="mb-4">
                            <Label htmlFor="email" className="sr-only">Email</Label>
                            <Input
                                {...register("email")}
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                autoFocus
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password" className="sr-only">Password</Label>
                            <Input
                                {...register("password")}
                                id="password"
                                type="password"
                                placeholder="Senha"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="cpf" className="sr-only">CPF</Label>
                            <Input
                                {...register("cpf")}
                                id="cpf"
                                type="text"
                                placeholder="CPF"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {errors.cpf && (
                                <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>
                            )}
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="code_optional"
                                className="mr-2"
                                checked={showCodeInput}
                                onChange={() => setShowCodeInput(!showCodeInput)}
                            />
                            <Label htmlFor="code_optional" className="text-md text-indigo-500">Código (Opcional)</Label>
                        </div>
                        {showCodeInput && (
                            <div className="mb-4">
                                <Label htmlFor="code" className="sr-only">Código (Opcional)</Label>
                                <Input
                                    {...register("code")}
                                    id="code"
                                    type="text"
                                    placeholder="Código (Opcional)"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                        )}
                        <div className="mb-4 text-sm text-gray-700">
                            Ao se inscrever você concorda com os <a href="/terms" className="text-indigo-500 hover:underline">Termos de Serviço</a>.
                        </div>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                        >
                            Comece já
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
