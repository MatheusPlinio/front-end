// 'use client'
import { Session } from 'next-auth';
import AuthDialog from './auth/AuthDialog';
import RegisterDialog from './auth/RegisterDialog';
import ProfileMenuDropdown from './ProfileMenuDropdown';
import { Button } from './ui/button';
import { Coins } from 'lucide-react';
import Link from 'next/link';

interface TProps {
    session: Session | null
}

async function Header({ session }: TProps) {
    return (
        <header
            className="fixed top-0 left-0 w-full
                       h-16 flex items-center justify-between
                       px-4 p-8 border-b-2 bg-white z-50"
        >
            <div className="flex items-center">
                <img
                    src="https://img.logoipsum.com/243.svg"
                    className="h-10 w-10"
                    alt="Logo"
                />
                <Link href="/" className="ml-3 text-lg font-semibold">My Application</Link>
            </div>
            <nav style={{ marginRight: '10%' }}>
                <ul className="flex space-x-4 items-center">
                    {!session && (
                        <>
                            <li><AuthDialog /></li>
                            <li><RegisterDialog /></li>
                        </>
                    )}
                    {session && (
                        <>
                            <li><ProfileMenuDropdown /></li>
                            <li><Button variant="outline">
                                <div>
                                    R$ 0,00
                                </div>
                                <div className='p-1'>
                                    <Coins size={30} className='text-yellow-500' />
                                </div>
                            </Button></li>
                            <li>
                                <Button className='bg-indigo-500 hover:bg-indigo-700'>
                                    Depositar
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
