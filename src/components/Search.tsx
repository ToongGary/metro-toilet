import React, { ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import { serialize } from "v8";
import { render } from "@testing-library/react";
import SearchBox from "./SearchBox";
import stations from "../Data/StationsData";
import Metro from "../Model/Metro";
import "./ToongBarStyle.css";

function Search() {
  const dummy_stations = [
    { name: "삼전", code: "123", line: [2], inner: true },
    { name: "삼성", code: "124", line: [1], inner: false },
    { name: "시청", code: "125", line: [1, 2], inner: true },
  ];

  const [stationsa, setStations] = React.useState(dummy_stations);
  const [search, setSearch] = React.useState("");
  const [selected, select] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);
  const navigate = useNavigate();

  const filterdStations = Object.values(stations).filter((station: Metro) => {
    return station.stinNm.includes(search);
  });

  function handleTextInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const handleStationSelected = (e: MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    const code = element.dataset.code;
    if (code) {
      setSearch(stations[code].stinNm);
    }
  };

  function handleSearchClicked(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setVisibility(true);
  }

  function handleSearchBoxClose() {
    setVisibility(false);
  }

  function handleSelected(stationCode: string) {
    navigate("/toilet/" + stationCode);
  }

  return (
    <div className="search">
      <div className="hero">
        <div className="left-h"></div>
      </div>

      <a href="#" className="search_button" onClick={handleSearchClicked}>
        역 검색
      </a>
      <SearchBox onClose={handleSearchBoxClose} visibility={visibility} onSelected={handleSelected} />
    </div>
  );
}

export default Search;
