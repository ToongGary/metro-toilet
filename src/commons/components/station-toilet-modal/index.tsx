import { useContext } from 'react';
import { StationToiletContext } from '../../contexts/station-toilet.context';
import styles from './styles.module.css';

export function StationToiletModal() {
  const { modal, stationToilet, closeModal } = useContext(StationToiletContext);

  return (
    <div
      className={`${styles['station-toilet-modal']} ${
        modal ? styles.show : ''
      }`}
    >
      <div className={styles['modal-header']}>
        <i className={styles['close-icon']} onClick={closeModal}></i>
      </div>

      {stationToilet.map((toilet, index) => {
        return (
          <div key={index}>
            <div>
              <span>상세위치</span>
              <span>{toilet.toiletDetailLocation}</span>
            </div>
            <div>
              <span>게이트내외구분</span>
              <span>{toilet.toiletGateType}</span>
            </div>
            <div>
              <span>가까운 출구번호</span>
              <span>{toilet.toiletNearExitNumber}</span>
            </div>
            <div>
              <span>지상구분</span>
              <span>{toilet.toiletFloorType}</span>
            </div>
            <div>
              <span>역층</span>
              <span>{toilet.toiletFloor}</span>
            </div>
            <div>
              <span>남녀구분</span>
              <span>{toilet.toiletSexType}</span>
            </div>
            <div>
              <span>화장실개수</span>
              <span>{toilet.toiletCount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
