"use client";

import Link from "next/link";
import Image from 'next/image'
import logo from "../../../public/Logo.png"
import { useTheme } from "../theme/themeContext";
import { Search, Sun, Moon } from "lucide-react";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="w-full col-span-12 py-8">
            <div className="max-w-[1218px] flex justify-between items-center mx-auto w-full">
                <div>
                <Image src={logo} alt="Logo do Blog" width={158} height={36} className="dark:invert dark:brightness-200 transition-all" />
                </div>
                <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Post</li>
                    <li>Contato</li>
                </ul>
                </div>
                <div className="bg-zinc-100 items-center flex gap-8 rounded-lg px-2 py-1">
                    <input type="text" className="bg-transparent focus:outline-none" placeholder="Buscar..." />
                    <Search size={20} className="text-zinc-500 dark:text-white" />
                </div>
                <button onClick={toggleTheme} className="p-2 rounded-lg transition-all bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-white"> {theme === "light" ? <Moon size={24} /> : <Sun size={24} />} </button>
            </div>
        </header>
    )
}

export default Header;