import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardPostProps {
    image: string;
    flag: string;
    title: string;
    avatar: string;
    author: string;
    date: string;
}

export default function CardPost({ image, title, avatar, author, date}: CardPostProps) {
    return (
        <Card className="max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition w-[392px] h-[488px]">
            <img src={image} alt={title} className="w-[360px] h-[240px] rounded-sm pl-4 py-4 flex items-center" />

            <CardContent className="p-4">
                <span className="bg-[#4B6BFB0D] text-[#4B6BFB] text-[14px] flex gap-4 font-medium px-2 py-1 rounded-lg max-w-fit">Technology</span>
                <h2 className="text-xl font-bold max-w-[720px] pt-4">{title}</h2>
            </CardContent>

            <CardFooter className="p-4 flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={avatar} alt={author} />
                    <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-[#97989F] font-medium mt-1">{author}</span>
                <p className="text-xs text-gray-400 mt-1">{date}</p>
            </CardFooter>
        </Card>
    );
};

