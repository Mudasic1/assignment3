'use client'

import Image from "next/image";
import  logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <div className="relative flex items-center h-[92px] justify-between gap-[220px] pt-[16px] pb-[16px] pr-[220px] pl-[220px]">
      {/* Logo */}
      <div className="relative flex ">
        <Image src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold relative  pt-[16px] pb-[16px] pr-[220px] text-white">whitespace</h1>
      </div>

      {/* Navigation */}
    <div className="relative flex">
      <ul className="relative flex text-white mx-5 gap-[32px] items-center justify-center cursor-pointer">
      <li>Products</li>
      <li>Solutions</li>
      <li>Resources</li>
      <li>Pricing</li>
      <button className="bg-[#FFE492] pt-[16px] pb-[16px] pr-[40px] pl-[40px] rounded-lg text-[#043873]">Login</button>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
