import '@fontsource-variable/montserrat';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  InputAdornment,
  OutlinedInput,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Search } from 'lucide-react';
import { ReactElement } from 'react';
import styles from './App.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d3d3d',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat Variable, sans-serif',
  },
});

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
        Search for books
      </Typography>
      <OutlinedInput
        id="search-field"
        color="primary"
        type="search"
        sx={{ bgcolor: '#fff' }}
        endAdornment={
          <InputAdornment position="end">
            <SearchOutlinedIcon color="primary" />
          </InputAdornment>
        }
      />
      <div className={styles.main}>
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
      </div>
    </ThemeProvider>
  );
};
