import Card from "../components/Card"



function Latest({results}) {
  
    

    
  
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 max-w-7xl">
            {
            results?.slice(0,16).map((result) => 
            (  <Card data={result} key={result.id}/>)
            )}
          
             
        </div>
    
    )
}

export default Latest
