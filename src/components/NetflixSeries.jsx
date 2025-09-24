
import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./seriesCard"

export const NetflixSeries = () =>{
   
    return (    
      <>
      
        <div className="grid grid_two_cols">      
             {
            seriesData.map((Elem)=>{
              return <SeriesCard key={Elem.id} Elem={Elem}/>
              })
            }
        </div>   
      </>          
            )
}



