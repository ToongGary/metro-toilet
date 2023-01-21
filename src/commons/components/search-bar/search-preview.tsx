import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import { StationsContext } from '../../contexts/stations.context';
import { Station } from '../../interfaces/station.interface';
import './style.css';

export function SearchPreview(props: any) {
  const stations = useContext(StationsContext);
  const [search, setSearch] = useState('');

  const filterdStations = Object.values(stations).filter((station: Station) => {
    return station.stationName.includes(search);
  });

  function handleTextInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const handleStationSelected = (e: MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    const code = element.dataset.code;
    if (code) {
      props.onSelected(code);
    }
  };

  return (
    <div className={'search_box' + (props.visibility ? '' : ' hidden')}>
      <input
        className="search-input-box"
        type="text"
        value={search}
        onChange={handleTextInput}
      />
      <a href="#" onClick={props.onClose} className="close_button">
        X
      </a>

      {search && (
        <ul className="stations_list">
          {filterdStations.map((station: Station) => (
            <li
              className="stations_list_item"
              key={station.id}
              data-code={station.id}
              onClick={handleStationSelected}
            >
              {station.stationName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
