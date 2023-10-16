import '@fontsource-variable/montserrat';
import { Search } from 'lucide-react';
import { ReactElement } from 'react';
import styles from './App.module.css';

export const App = (): ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles['header-text']}>Search for books</h1>
        <div className={styles['search-field-wrapper']}>
          <input type="search" className={styles['search-field']} />
          <Search size={24} color="#000" />
        </div>
        <div className={styles['filter-container']}>
          <div className={styles['filter-select-wrapper']}>
            <span className={styles['filter-select-name']}>Categories</span>
            <select className={styles['filter-select-field']}>
              <option className={styles['filter-select-value']}>all</option>
            </select>
          </div>
          <div className={styles['filter-select-wrapper']}>
            <span className={styles['filter-select-name']}>Sorting by</span>
            <select className={styles['filter-select-field']}>
              <option className={styles['filter-select-value']}>
                relevance
              </option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};
