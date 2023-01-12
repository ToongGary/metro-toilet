import React, { MouseEvent } from 'react';
import SearchBox from './SearchBox';
import './ToongBarStyle.css';
import stations from '../Data/StationsData';

function Search(props: any) {
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
      <SearchBox
        onClose={handleSearchBoxClose}
        visibility={visibility}
        onSelected={handleSelected}
      />
    </div>
  );
}

export default Search;
