import './style.css';
import { SearchInput } from './search-input';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { SearchOptions } from './search-options';

export function SearchBar() {
  const navigate = useNavigate();

  function handleSearchSelected(stationId: string) {
    navigate('/toilet/' + stationId);
  }

  function handleSourceSelected(stationId: string) {
    setSource(stationId);
  }

  function handleDestinationSelected(stationId: string) {
    setDestination(stationId);
  }

  function handleSearchClicked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (source === '' || destination === '') {
      alert('출발역과 도착역을 선택해주세요.');
      return;
    } else {
      navigate('/toilet_between/' + source + '/' + destination);
    }
  }

  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');

  return (
    <nav className="search-bar">
      <h1 className="search-bar-logo"> 급 퉁 </h1>
      <ul className="search-bar-menu">
        <SearchInput onSelected={handleSearchSelected} defaultText="역 선택" />
        <SearchInput onSelected={handleSourceSelected} defaultText="출발역" />
        <SearchInput
          onSelected={handleDestinationSelected}
          defaultText="도착역"
        />
        <button onClick={handleSearchClicked}>경로상 화장실 검색</button>
        {SearchOptions.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href="/">
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
