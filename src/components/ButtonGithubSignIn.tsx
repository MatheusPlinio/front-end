import { Github } from "lucide-react"
import { signIn } from "next-auth/react"

const ButtonGithubSignIn = () => {

    async function SignInGitHub() {
        const res = await signIn('github')

    }

    return (
        <div>
            <button
                onClick={SignInGitHub}
                type="button"
                className="w-full flex justify-center bg-gray-500 hover:bg-gray-700
                                 text-white font-bold py-2 px-4
                                   rounded focus:outline-none 
                                   focus:shadow-outline"
            >
                <Github />
                <span>
                    Sign In With GitHub
                </span>
            </button>
        </div>
    )
}

export default ButtonGithubSignIn