import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles['search-form']}>
        <label htmlFor="search-input">
          <i className={styles['search-icon']}></i>
        </label>
        <input id="search-input" type="text" placeholder="지하철 역 검색" />
      </div>
      <div className={styles['region-form']}>
        <select>
          <option selected>수도권</option>
          <option>대구</option>
          <option>부산</option>
        </select>
      </div>
    </div>
  );
}
