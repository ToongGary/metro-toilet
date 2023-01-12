import Metro from '../Model/Metro';
import axios from 'axios';

const stations: { [id: string]: Metro } = {};

axios
  .get('http://localhost:8080/metro/station')
  .then((response) => {
    for (const station of response.data) {
      stations[station.id] = station as Metro;
    }
  })
  .catch((error) => console.log(error));

export default stations;
