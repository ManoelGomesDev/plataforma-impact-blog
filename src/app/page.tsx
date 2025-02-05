import Image from "next/image";
import Header from "./components/ui/Header";
import Banner from "./components/ui/Banner";
import H1 from "./components/ui/H1";

export default function Home() {
  return (
    <>
    <Header />
   <H1 text={"Home"}/>
    <Banner/>
    </>
  );
}
