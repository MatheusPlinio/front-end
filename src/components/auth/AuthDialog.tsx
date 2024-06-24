'use client'
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { TSigninSchema, signinSchema } from "@/types/nextauth/type"

export default function AuthDialog() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm<TSigninSchema>({
        resolver: zodResolver(signinSchema)
    })

    const router = useRouter()
    const [open, setOpen] = useState(false)

    const onSubmit = async (data: TSigninSchema) => {
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        })

        if (res?.ok) {
            setOpen(false)
            router.refresh()
        } else {
            setOpen(false)
            alert("Submitting form failed")
            if (res?.error) {
                setError("email", { type: "manual", message: res.error })
                setError("password", { type: "manual",  message: res.error })
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span className="cursor-pointer font-semibold">Entrar</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                    <img src="https://img.logoipsum.com/243.svg" className="h-16 w-16 mb-4" alt="Logo" />
                    <h2 className="text-xl font-semibold mb-6">Faça login com sua Conta</h2>
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
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="mb-4 text-right">
                            <a href="/forgot-password" className="text-sm text-indigo-500 hover:underline">Esqueci minha senha</a>
                        </div>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                        >
                            Entrar
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
