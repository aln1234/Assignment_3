import Card from "../components/Card"



function Latest({results}) {
  
    

    
  
    return (
        <div className="grid grid-cols-2 gap-6">
            {
            results?.slice(0,16).map((result) => 
            (  <Card data={result} key={result.id}/>)
            )}
          
             
        </div>
    
    )
}

export default Latest
