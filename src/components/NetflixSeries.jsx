import seriesData from "../api/seriesData.json";
import { ListData } from "./List";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-col">
        {seriesData.map((curElem) => {
      return <ListData key={curElem.id} data={curElem} />;
    })}
    </ul>
  );
};

export default NetflixSeries;