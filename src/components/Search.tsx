import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import "./ToongBarStyle.css";

function Search() {
  const [visibility, setVisibility] = React.useState(false);
  const navigate = useNavigate();

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
      <a href="#" className="search_button" onClick={handleSearchClicked}>
        역 검색
      </a>
      <SearchBox onClose={handleSearchBoxClose} visibility={visibility} onSelected={handleSelected} />
    </div>
  );
}

export default Search;
