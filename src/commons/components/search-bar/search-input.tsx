import React, { MouseEvent, useContext } from 'react';
import { SearchPreview } from './search-preview';
import './style.css';
import { StationsContext } from '../../contexts/stations.context';

export function SearchInput(props: any) {
  const stations = useContext(StationsContext);
  const [visibility, setVisibility] = React.useState(false);
  const [stationName, setStationName] = React.useState(props.defaultText);

  function handleSearchClicked(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setVisibility(true);
  }

  function handleSearchBoxClose() {
    setVisibility(false);
  }

  function handleSelected(stationId: string) {
    setStationName(stations[stationId].stationName);
    props.onSelected(stationId);
    setVisibility(false);
  }

  return (
    <div className="search">
      <a href="#" className="search_button" onClick={handleSearchClicked}>
        {stationName}
      </a>
      <SearchPreview
        onClose={handleSearchBoxClose}
        visibility={visibility}
        onSelected={handleSelected}
      />
    </div>
  );
}
