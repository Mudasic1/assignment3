import Image from "next/image"
import apple from '@/assets/apple.png'
import microsoft from '@/assets/microsoft.png'
import google from '@/assets/google.png'
import slack from '@/assets/slack.png'

const Pg6 = () => {
  return (
    <div className= "absolute flex items-center pt-[140px] pb-[140px] pl-[220px] pr-[220px] top-[4654px] bg-white h-[538px] w-[1921px] flex-col">
      <div className="text-center">
        <h1 className="text-6xl font-bold ">Our sponsors</h1>
        <div className="mt-[30px] flex items-center space-x-6">
          <Image src={apple} alt="apple logo" width={100} height={100} />
          <Image src={microsoft} alt="apple logo" width={200} height={200} />
          <Image src={slack} alt="apple logo" width={200} height={200} />
          <Image src={google} alt="apple logo" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Pg6
