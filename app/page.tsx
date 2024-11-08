'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pg2 from "@/components/Pg2";
import Pg3 from "@/components/Pg3";
import Pg5 from "@/components/Pg5";
import Pg4 from "@/components/Pg4";
import Pg6 from "@/components/Pg6";
import Footer from "@/components/footer";


export default function Home() {
  return (
   
    
    <div className="w-[1921px] bg-[#043873] overflow-hidden">
      <Navbar />
      <Hero />
     <Pg2 />
     <Pg3 />
     <Pg4 />
     <Pg5 />
     <Pg6 />
     <Footer/>
    </div>
   
    
  );
}
