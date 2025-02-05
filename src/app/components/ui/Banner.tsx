import banner from "../../../../public/banner.jpg";
import Image from "next/image";

const Banner = () => {
    return ( 
    <div className=" flex grid place-items-center p-4 ">
        <Image src={banner} alt="banner da pagina"   className=" rounded-md  w-54 h-80 object-cover" ></Image>
    </div> );
}
 
export default Banner;