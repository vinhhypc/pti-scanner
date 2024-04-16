import Image from "next/image";
import logo from "../../public/logo.svg";
import HomeBody from "@/src/components/Intro/HomeBody";
import ButtonStart from "@/src/components/Intro/ButtonStart";

export default function Info() {
  return (
    <div
      className="flex flex-col items-center "
      style={{ lineBreak: "anywhere" }}
    >
      <div className="max-w-[450px] h-full bg-[rgb(0,55,123)] w-full flex-1">
        <div className="flex justify-center py-6">
        <Image src={logo}  alt="logo"/>
        </div>
        <HomeBody/>
        <ButtonStart/>
      </div>
    </div>
  );
}