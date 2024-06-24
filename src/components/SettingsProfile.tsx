import { MoreVertical, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function SettingProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><MoreVertical size={20} /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="text-center">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-300 flex items-center justify-center border-spacing-1 rounded cursor-pointer transition-all duration-300">
                    <User className="mr-2 h-4 w-4" />
                    <Link href="/profile">
                        <span>
                            Profile
                        </span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}