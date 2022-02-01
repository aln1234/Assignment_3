



function Card(data) {
    const {data:result} = data
  
    return (
        <div className=" ">
             <div className="" >
                 <div className="py-12 px-8 bg-red-400">
                 <h1 className="text-white font-mono text-4xl font-semibold">{result.title}</h1>
                 <p className="pt-8 text-white font-mono text-lg">{result.subtitle}</p>
                 <div className="flex items-center justify-between mr-[100px]">
                 <div className="pt-12">
                     <h1 className="text-yellow-500 font-mono">Client</h1>
                     <h1 className="text-white font-mono">{result.clients}</h1>
                 </div>
                 <div className="ml-6 pt-12">
                     <h1 className="text-yellow-500 font-mono">Client</h1>
                     <h1 className="text-white font-mono text-base ">{result.start_date}-{result.end_date}</h1>
                 </div>
                 </div>
                 </div>
                 <div className="bg-red-500">
                 <img src={result.photo} loading="lazy" className="object-cover"/>
                 </div>
              
                     
               
              
               
               
             </div>
            
        </div>
    
    )
}

export default Card
