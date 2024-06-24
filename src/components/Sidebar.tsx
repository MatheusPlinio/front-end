'use client'
import { ChevronLast, ChevronFirst, User, DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useContext, createContext, useState, ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const SidebarContext = createContext({ expanded: true });

const Sidebar: React.FC = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="flex">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {expanded && (
                        <Button className={`bg-indigo-500 overflow-hidden transition-all w-48`}>
                            Ganhe bônus
                        </Button>
                    )}
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 transition-all duration-700">
                        {expanded && (
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="w-28 no-underline hover:no-underline flex justify-center">IGaming</AccordionTrigger>
                                    <AccordionContent>
                                        <SidebarItem
                                            icon={<User size={20} />}
                                            text="Loremlapsu"
                                            href="#"
                                        />
                                        <SidebarItem
                                            icon={<User size={20} />}
                                            text="Loremlapsu"
                                            href="#"
                                        />
                                        <SidebarItem
                                            icon={<User size={20} />}
                                            text="Loremlapsu"
                                            href="#"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )}
                        {!expanded && (
                            <>
                                <SidebarItem
                                    icon={<User size={20} />}
                                    text="Dashboard"
                                    href="/dashboard"
                                />
                                <SidebarItem
                                    icon={<User size={20} />}
                                    text="Dashboard"
                                    href="/dashboard"
                                />
                                <SidebarItem
                                    icon={<User size={20} />}
                                    text="Dashboard"
                                    href="/dashboard"
                                />
                            </>
                        )}
                    </ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
};

interface TSidebarItem {
    icon: ReactNode;
    text: string;
    href?: string;
    active?: boolean;
    alert?: boolean;
}

const SidebarItem: React.FC<TSidebarItem> = ({ icon, text, href = "#", active, alert }) => {
    const { expanded } = useContext(SidebarContext);

    return (
        <Link href={href}>
            <li
                className={`
                relative flex items-center py-2 px-3 my-1
                bg-transparent
                font-medium rounded-md cursor-pointer
                hover:text-gray-600
                transition-colors group
                ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-400"}
            `}
            >
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-28 ml-3" : "w-0"}`}>
                    {text}
                </span>
                {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
                )}
                {!expanded && (
                    <div
                        className={`
                            absolute left-full rounded-md px-2 py-1 ml-6
                            bg-indigo-100 text-indigo-800 text-sm
                            invisible opacity-20 -translate-x-3 transition-all
                            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                        `}
                    >
                        {text}
                    </div>
                )}
            </li>
        </Link>
    );
};

export default Sidebar;
export { SidebarItem };
