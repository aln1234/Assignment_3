



function Banner() {
    

    
  
    return (
        <div className=" overflow-hidden relative md:max-w-6xl h-[400px] w-[300px] ml-[60px] md:h-[300px] md:w-[1200px] bg-blue-600 shadow-md rounded-lg md:ml-[200px] -mt-12">
            
           <div className="text-center mt-16">
               <h1 className="text-white font-mono md:text-4xl text-xl font-semibold">
               Seeking Collaboration?
                   </h1>
                   <h1 className="text-white font-mono text-sm md:text-base mt-6 px-[20px] md:px-[300px] ">
                   We constantly look forward to exploring ideas, collaborations, and technical innovations. If you want to partner with us, we are just an email away.


                   </h1>
                   
                 <div className="mt-8  font-mono text-[#05f] w-32 h-14 items-center ml-[80px] md:ml-[500px] bg-[#ffdc1c] cursor-pointer hover:bg-yellow-500" >
                     <h1 className="pt-4">Let's Talk</h1>
                     <img src="/images/tri.svg" className="absolute object-cover -ml-[501px] -mt-[100px]"/>
                     <img src="/images/sqr.svg" className="absolute object-cover ml-[400px] -mt-[200px]"/>
                  
               
                 </div>
            
                 
                   </div>
        </div>
    
    )
}

export default Banner
