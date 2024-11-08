import Image from "next/image";
import logo from "@/assets/logo.png"

export default function Orbital() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Central Element */}
      <div className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>

      {/* Orbital Circles */}
      <div className="absolute w-10 h-10 bg-yellow-400 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-10 h-10 bg-green-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-10 h-10 bg-red-400 rounded-full left-0 top-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-10 h-10 bg-blue-400 rounded-full right-0 top-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-10 h-10 bg-yellow-400 rounded-full top-1/4 left-1/4"></div>
      <div className="absolute w-10 h-10 bg-green-500 rounded-full top-1/4 right-1/4"></div>
      <div className="absolute w-10 h-10 bg-blue-400 rounded-full bottom-1/4 left-1/4"></div>
      <div className="absolute w-10 h-10 bg-green-500 rounded-full bottom-1/4 right-1/4"></div>
    </div>
  );
}
