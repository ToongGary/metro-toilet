
import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { serialize } from "v8";
import { render } from "@testing-library/react";
import "./ToongBarStyle.css";


function Search() {

  const dummy_stations = [

    { name: "삼전", code: "123", line: [2], inner: true },
    { name: "삼성", code: "124", line: [1], inner: false },
    { name: "시청", code: "125", line: [1, 2], inner: true },
  ];

  const [stations, setStations] = React.useState(dummy_stations);
  const [search, setSearch] = React.useState("");

  const filterdStations = stations.filter((station) => {
    return station.name.includes(search);
  });



  function handleTextInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  console.log(search);
  return (
    <div>
      <div className="hero">
        <div className="left-h">

        </div>

      </div>
      <input className="SearchBar" type="text" value={search} onChange={handleTextInput} />
      {search && (
        <ul>
          {filterdStations.map((station) => (
            <li key={station.code}>
              <Link to={"/toilet/" + station.code}>{station.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
