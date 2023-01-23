import { ChangeEvent, useContext, useState, MouseEvent } from 'react';
import { StationsContext } from '../../contexts/stations.context';
import { Station } from '../../interfaces/station.interface';
import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles['header']}>
      <SearchForm />
      <RegionForm />
    </div>
  );
}

export function SearchForm() {
  const stations = useContext(StationsContext);

  const [filteredStations, setFilteredStations] = useState<Station[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) {
      return setFilteredStations([]);
    }

    setFilteredStations(
      stations.filter((station) => station.stationName.includes(value))
    );
  };

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const stationId = element.dataset.id;
    console.log(stationId);
  };

  return (
    <div className={styles['search-form']}>
      <label htmlFor="search-input">
        <i className={styles['search-icon']}></i>
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="지하철 역 검색"
        onChange={handleOnChange}
      />
      <div className={styles['search-result']}>
        {(filteredStations.length &&
          filteredStations.map((station, index) => {
            return (
              <div key={index} data-id={station.id} onClick={handleOnClick}>
                {station.lineName} - {station.stationName}
              </div>
            );
          })) ||
          undefined}
      </div>
    </div>
  );
}

export function RegionForm() {
  return (
    <div className={styles['region-form']}>
      <select>
        <option>수도권</option>
      </select>
    </div>
  );
}
