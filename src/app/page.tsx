import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="col-span-12">
      <div className="bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[450px] max-w-[1218px] w-full mx-auto bg-cover bg-center rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10">

      <span className="bg-[#4b6bfb] text-white px-2 py-1 rounded-lg max-w-fit">Technology</span>
      <h1 className="text-white font-semibold text-4xl max-w-[720px]">The Impact of Technology on the Workplace: How Technology is Changing</h1>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/estrmrnd.png"/>
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <span className="text-white">Ester Miranda</span>
        </div>
          <span className="text-white">August 20, 2022</span>
      </div>
      </div>
    </div>
  );
}