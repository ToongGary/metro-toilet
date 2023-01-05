import Metro from "../Model/Metro";
import axios from "axios";

const stations: Metro[] = [];

axios
  .get("http://localhost:8080/metro/station")
  .then((response) => {
    for (const station of response.data.body) {
      stations.push(station);
    }
  })
  .catch((error) => console.log(error));

export default stations;
