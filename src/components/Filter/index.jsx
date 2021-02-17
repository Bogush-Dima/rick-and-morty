import clsx from 'clsx';
import styles from 'components/Filter/style.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { characterPath } from 'store/paths';
import { EnterNameField } from './EnterNameField';
import { RadioFilterItem } from './RadioFilterItem';
const queryString = require('query-string');

export const Filter = () => {
  const history = useHistory();
  const {title, value} = useSelector(state => state.filterValuesFromCharacterCard)
  const parsedFilters = queryString.parse(history.location.search);
  const [toggleFilters, setToggleFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(parsedFilters);
  const categoriesRadioFilters = {
    statuses: ['alive', 'dead', 'unknown'],
    genders: ['male', 'female', 'genderless', 'unknown'],
  };

  useEffect(() => {
    setSelectedFilters({...selectedFilters, [title]: value})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, value])

  const selectFilterValue = (event) => {
    const { name, value } = event.target;
    setSelectedFilters({
      ...selectedFilters,
      [name || 'name']: value,
    });
  };

  const filtrationCharacters = (event) => {
    event.preventDefault();
    const stringifiedFilters = `?${queryString.stringify(selectedFilters)}`;
    history.push({
      pathname: characterPath,
      search: stringifiedFilters,
    });
  };

  const resetFilters = (event) => {
    event.preventDefault();
    setSelectedFilters({});
  };

  return (
    <header>
      <div className={styles.btnsWrapper}>
        <button
          className={styles.filtersBtn}
          onClick={() => setToggleFilters(!toggleFilters)}
        >
          Filters
        </button>
      </div>
      <form
        className={clsx(styles.form, {
          [styles.toggleFilters]: toggleFilters,
        })}
      >
        <div className={styles.filtersWrapper}>
          <EnterNameField
            name={selectedFilters.name || ''}
            selectFilterValue={selectFilterValue}
          />

          <div className={styles.radiosWrapper}>
            <p className={styles.categoryTitle}>Status:</p>
            {categoriesRadioFilters.statuses.map((value) => {
              return (
                <RadioFilterItem
                  name="status"
                  value={value}
                  selectedFilters={selectedFilters}
                  selectFilterValue={selectFilterValue}
                  key={Math.random().toString()}
                />
              );
            })}
          </div>

          <div className={styles.radiosWrapper}>
            <p className={styles.categoryTitle}>Gender:</p>
            {categoriesRadioFilters.genders.map((value) => {
              return (
                <RadioFilterItem
                  name="gender"
                  value={value}
                  selectedFilters={selectedFilters}
                  selectFilterValue={selectFilterValue}
                  key={Math.random().toString()}
                />
              );
            })}
          </div>
        </div>

        <button onClick={(event) => filtrationCharacters(event)}>Search</button>
        <button
          className={styles.resetBtn}
          onClick={(event) => resetFilters(event)}
        >
          Reset Filters
        </button>
      </form>
    </header>
  );
};
