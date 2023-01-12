import './ToongBarStyle.css';
import Search from './Search';
import { ToongItem } from './ToongItem';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ToongBar = () => {
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
    <nav className="ToongBar">
      <h1 className="ToongBar-logo"> 급 퉁 </h1>

      <ul className="ToongBar-menu">
        <Search onSelected={handleSearchSelected} defaultText="역 선택" />
        <Search onSelected={handleSourceSelected} defaultText="출발역" />
        <Search onSelected={handleDestinationSelected} defaultText="도착역" />
        <button onClick={handleSearchClicked}>경로상 화장실 검색</button>
        {ToongItem.map((item, index) => {
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
};

export default ToongBar;
