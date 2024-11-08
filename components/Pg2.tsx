import Pg2s2 from "./Pg2s2"

const Pg2 = () => {
  return (
    
    <div className="w-[1921px] bg-white absolute top-[921px] bottom-[140px] flex gap-[100px] text-black pt-[140] pr-[220px] pb-[140px] pl-[220px] ">
      {/* sec1 p1 */}
      <div className="relative gap-[100px]">
      <h1 className="text-4xl font-bold font leading-[44px]">Project<br/>Management</h1>
      <p className="mt-[24px] leading-[24px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
      <button className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] bg-[#4F9CF9] rounded-lg mt-[44px] text-white">Get Started</button>
    </div>

    {/*sec1 p2 */}
    <div className="h-[547px] w-[748px] relative bg-[#C4DEFD]">

    </div>
    <Pg2s2 />
    </div>
    

  )
}

export default Pg2
