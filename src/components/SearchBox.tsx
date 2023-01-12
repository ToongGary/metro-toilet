import React, { ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { serialize } from "v8";
import { render } from "@testing-library/react";
import stations from "../Data/StationsData";
import Metro from "../Model/Metro";
import "./ToongBarStyle.css";

function SearchBox(props: any) {
  const [search, setSearch] = React.useState("");

  // console.log(stations);
  const filterdStations = Object.values(stations).filter((station: Metro) => {
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
    <div className={"search_box" + (props.visibility ? "" : " hidden")}>
      <input className="SearchBar" type="text" value={search} onChange={handleTextInput} />
      <a href="#" onClick={props.onClose} className="close_button">
        X
      </a>

      {search && (
        <ul className="stations_list">
          {filterdStations.map((station: Metro) => (
            <li className="stations_list_item" key={station.id} data-code={station.id} onClick={handleStationSelected}>
              {station.stationName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
