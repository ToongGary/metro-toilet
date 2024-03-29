import { ChangeEvent, useContext, useState, MouseEvent } from 'react';
import { StationToiletContext } from '../../contexts/station-toilet.context';
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
        <StationToiletContext.Consumer>
          {({ openModal, updateStationId }) => {
            return (
              (filteredStations.length &&
                filteredStations.map((station, index) => {
                  return (
                    <div
                      key={index}
                      data-id={station.id}
                      onClick={(e: MouseEvent<HTMLDivElement>) => {
                        if (!station.toiletCount) return;
                        const element = e.target as HTMLDivElement;
                        openModal();
                        updateStationId(Number(element.dataset.id));
                      }}
                      className={
                        !station.toiletCount ? styles['toilet-not-found'] : ''
                      }
                    >
                      {station.lineName} - {station.stationName}
                      {!station.toiletCount ? (
                        <span className={styles['toilet-not-found-desc']}>
                          {' '}
                          화장실 정보 없음
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })) ||
              undefined
            );
          }}
        </StationToiletContext.Consumer>
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
