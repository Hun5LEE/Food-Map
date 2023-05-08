import MapChart from "./MapChart";
import List from "./List";
import axios from "axios";

export default function MapChartPage() {
  // const { data } = await axios.get(
  //   "http://localhost:3000/api/places/restaurant"
  // );

  return (
    <>
      <MapChart />
      <List />
    </>
  );
}
