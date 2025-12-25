import seriesData from "../api/seriesData.json"
import Mitems from "./Mitems"

export const Movie = () => {
    return(
       <ul>
        {
            seriesData.map((checkData) => {
                return <Mitems movie={checkData}  />
            })
        }
       </ul>
    )
}