import {

    MenuIcon,
    ChevronDownIcon,
    ArrowRightIcon


} from "@heroicons/react/outline"

import Image from "next/image"



function Header() {
    return (
      <nav className=" ">
        <div className="bg-[#ffdc1c] w-full p-2 text-center ">
          <a className="font-mono underline text-base cursor-pointer">
            We Have Been Working On Several Voluntary Initiatives During The
            COVID-19 Pandemic. Chech Them Out
          </a>
        </div>
        <div className="flex  md:space-x-12 ml-auto md:ml-[150px] pt-4  md:max-w-7xl">
          <div className=" relative  flex-none  w-[120px] h-[35.09px]">
            <Image src="/images/logo.png" layout="fill" className="absolute cursor-pointer" />
          </div>
          <div className=" relative md:flex-grow mt-1  w-[40px] h-auto md:w-[120px] md:h-[35.09px] ">
            <div className="hidden md:inline-flex flex items-center space-x-[40px] md:ml-[100px]">
             
              <h1 className="navbar">Services</h1>
          
              <div className="flex items-center space-x-2">
              <h1 className="navbar">Portfolio</h1>
              <ChevronDownIcon className="h-2 w-2 cursor-pointer"/>

              </div>
              <div className="flex items-center space-x-2">
              <h1 className="navbar">Company</h1>
              <ChevronDownIcon className="h-2 w-2 cursor-pointer"/>

              </div>
              <div className="flex items-center space-x-2">
              <h1 className="navbar">Events & Media</h1>
              <ChevronDownIcon className="h-2 w-2 cursor-pointer"/>

              </div>
             
              <h1 className="navbar">Blogs</h1>
             

           
          
            </div>
          </div>
         <div className="flex gap-2 group items-center bg-[#ffdc1c] px-[20px] py-[20px]    cursor-pointer hover:bg-yellow-500">
           <h1 className="font-mono text-[16px] font-semibold text-[#05f] ml-4  ">   Let's Talk</h1>
           <ArrowRightIcon className="h-4 w-4 text-[#05f] opacity-0 group-hover:opacity-100"/>
        
         </div>
          </div>
       
      </nav>
    );
}

export default Header
