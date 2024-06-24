import Link from "next/link"

const AccountHeader = () => {
    return (
        <div>
            <header
                className="px-4 p-8 border-b-2 bg-white z-50"
            >
                <nav style={{ marginRight: '10%' }}>
                    <ul className="flex justify-center space-x-14 items-center">
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/documents/info">
                                Perfil
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/history-game">
                                Histórico de jogo
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/transactions">
                                Transações
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/restrictions">
                                Restrições
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/chat-blocks">
                                Bloqueios do Chat
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/preferences">
                                Preferências
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500 transition-colors duration-700">
                            <Link href="/account/api">
                                API
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export { AccountHeader }