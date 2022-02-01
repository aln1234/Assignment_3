import Image from "next/image"

import Twitter from "../images/twitter.png"
import Discord from "../images/discord.png"
import Insta from "../images/insta.png"

function Footer() {
    return (
      <>
       <div className="relative flex justify-between  space-x-12 ml-[0px] px-4 md:ml-[150px] pt-4  md:max-w-6xl">
     
         <div className="mt-8">
         <div className=" relative  w-[140px] h-[40px]">
            <Image src="/images/logo.png" layout="fill" className=" cursor-pointer" />
           
          </div>
         <h1  className="font-mono font-bold text-lg mt-4">Naxa Pvt Ltd.</h1>
         <h1  className="font-mono font-light text-sm mt-4 text-[#7f7f7f]">Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</h1>
         <h1  className="font-mono font-light text-sm mt-4 text-[#7f7f7f]">14416543</h1>
         <h1  className="font-mono font-light text-sm mt-4 underline cursor-pointer text-[#7f7f7f]">info@naxa.com.np</h1>
         <div className="flex items-center mt-4 cursor-pointer gap-4"> 
         <Image src="/images/fb.svg" width={20} height={20} className="" />
         <Image src="/images/lk.svg" width={20} height={20} className="" />
         <Image src="/images/tw.svg" width={20} height={20} className="" />
         <Image src="/images/inst.svg" width={20} height={20} className="" />
         </div>
         </div>
         <div className="mt-12 ">
           <h1 className="font-mono text-lg font-bold cursor-pointer hover:text-yellow-500">Services</h1>
           <h1 className="font-mono text-lg font-bold cursor-pointer hover:text-yellow-500 mt-8">Portfolio</h1>
         </div>
         <div className="mt-12 ">
         <h1 className="font-mono text-lg font-bold  cursor-pointer hover:text-yellow-500">Company</h1>
         <h1 className="font-mono text-base font-light text-[#7f7f7f]  cursor-pointer hover:text-yellow-500 mt-2">About Us</h1>
         <h1 className="font-mono text-base font-light text-[#7f7f7f]  cursor-pointer hover:text-yellow-500 mt-2">Work With Us</h1>
         <h1 className="font-mono text-lg font-bold  cursor-pointer hover:text-yellow-500 mt-6">Contact Us</h1>

         <h1 className="font-mono text-sm  cursor-pointer hover:text-yellow-500 mt-8">© Naxa 2020. All Rights Reserved.</h1>
         </div>
         </div>
      </>
         
            
  
 
 
 
 )
}

export default Footer
