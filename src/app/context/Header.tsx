"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import { useTheme } from "../theme/themeContext";
import { Search, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="w-full col-span-12 py-8">
            <div className="max-w-[1218px] flex justify-between items-center mx-auto w-full">
                <div>
                    <Image
                        src={logo} alt="Logo do Blog" width={158} height={36} className="dark:invert dark:brightness-200 transition-all" />
                </div>
                <div>
                    <ul className="flex gap-4 group">
                        <li>
                            <Link href={"/"} className={`${pathName === "/" ? "text-purple-600" : "text-inherit"} dark:text-white hover:text-purple-600 font-semibold`}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/post"} className={`${pathName.startsWith("/post") ? "text-purple-600" : "text-inherit"} dark:text-white hover:text-purple-600 font-semibold`}>Post</Link>
                        </li>
                        <li>
                            <Link href={"/contato"} className={`${pathName === "/contato" ? "text-purple-600" : "text-inherit"} dark:text-white hover:text-purple-600 font-semibold`}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-zinc-100 items-center flex gap-8 rounded-lg px-2 py-1">
                    <input type="text" className="bg-transparent focus:outline-none" placeholder="Buscar..." />
                    <Search size={20} className="text-zinc-500 dark:text-white" />
                </div>
                <button onClick={toggleTheme} className="p-2 rounded-lg transition-all bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-white">{" "}
                    {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}{" "}
                </button>
            </div>
        </header>
    );
};

export default Header;
