import clsx from "clsx";
import styles from "components/Filter/style.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { EnterNameField } from "./EnterNameField";
import { RadioFilterItem } from "./RadioFilterItem";
const queryString = require("query-string");

export const Filter = () => {
  const history = useHistory();
  const parsedFilters = queryString.parse(history.location.search);
  const [showFilters, setshowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(parsedFilters);
  const categoriesRadioFilters = {
    statuses: ["alive", "dead", "unknown"],
    genders: ["male", "female", "genderless", "unknown"],
  };

  const selectFilterValue = (event) => {
    const { name, value } = event.target;
    setSelectedFilters({
      ...selectedFilters,
      [name || "name"]: value,
    });
  };

  const filtrationCharacters = (event) => {
      event.preventDefault();
      const stringifiedFilters = queryString.stringify(selectedFilters);
      history.push({
        pathname: "/characters",
        search: `?${stringifiedFilters}`,
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
          onClick={() => setshowFilters(!showFilters)}
        >
          Filters
        </button>
      </div>
      <form
        className={clsx(styles.form, {
          [styles.showFilters]: showFilters,
        })}
      >
        <div className={styles.filtersWrapper}>
          <EnterNameField
            name={selectedFilters.name || ""}
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
