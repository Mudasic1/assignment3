import Orbital from "./OrbitalCircles"

const Pg2s2 = () => {
  return (
    <div className="w-[1921px] bg-white absolute top-[921px] bottom-[140px] flex gap-[200px] text-black ">
      <Orbital />
      {/* content */}
    <div className="relative left-[500px]">
      <h1 className="text-4xl font-bold font leading-[44px]">Work<br/>together</h1>
      <p className="mt-[24px] leading-[24px]">With whitepace, share your notes with your colleagues and collaborate on them.<br/>
You can also publish a note to the internet and share the URL with others.
</p>
      <button className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] bg-[#4F9CF9] rounded-lg mt-[44px] text-white">Get Started</button>
</div>
      </div>
  
  )
}

export default Pg2s2
