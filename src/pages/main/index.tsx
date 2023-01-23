import { Header } from '../../commons/components/header';
import { StationToiletModal } from '../../commons/components/station-toilet-modal';
import { ReactComponent as SubwaySeoul } from '../../commons/resources/subway-seoul.svg';
import styles from './styles.module.css';

export function Main() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <SubwaySeoul width="2800px" height="100%" />
      <StationToiletModal></StationToiletModal>
    </div>
  );
}
