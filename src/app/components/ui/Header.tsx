
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full col-span-12 py-8">
            <div className=" max-w-[1218px] flex justify-between items-center nx-auto v-full">
                <div>
                    <Image src={logo} alt="logo da blog" width={158} height={36} />
                </div>
                <div>
                    <ul className="flex gap-4 ">
                        <Link href={"/"} className="text-lg hover:text-violet-500 p-4 ">Home</Link>
                        <Link href={"/post"} className="text-lg hover:text-violet-500 p-4">Post</Link>
                        <Link href={"/contato"} className="text-lg hover:text-violet-500 p-4 ">Contact</Link>
                        <Link href={"/sobre"} className="text-lg hover:text-violet-500 p-4">Sobre Nós</Link>
                    </ul>
                </div>
                <div >
                    <div className="big-zinc-100 flex items-center rounded-lg px-2 py-1">
                        <input type="text" className="bg-transparent focus:outline-none border-2 hover:border-violet-500 p-2 rounded-full" />
                        <Search size={20} className="hover:text-violet-500 " />

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;