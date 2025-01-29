import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CardPost from "./context/CardPost";


export default function Home() {
  return (
    <div className="col-span-12">
      <div className="bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[450px] max-w-[1218px] w-full mx-auto bg-cover bg-center rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10">
      <span className="bg-[#4b6bfb] text-white font-medium px-2 py-1 rounded-lg max-w-fit">Technology</span>
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
      <div className="max-w-[1218px] w-full mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
        <CardPost 
          image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          flag="Techology"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          author="Ester Miranda"
          avatar="https://github.com/estrmrnd.png"
          date="August 20, 2022" 
        />

        <CardPost 
          image="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          flag="Techology"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          author="Ester Miranda"
          avatar="https://github.com/estrmrnd.png"
          date="August 20, 2022" 
        />

        <CardPost 
          image="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          flag="Techology"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          author="Ester Miranda"
          avatar="https://github.com/estrmrnd.png"
          date="August 20, 2022" 
        />
      </div>
    </div>
  );
}

