import styles from "components/Filter/style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPersons } from "store/actions";

export const Filter = () => {
  const dispatch = useDispatch();

  const [filteredValues, setFilteredValues] = useState({});

  const changeName = (event) => {
    const name = event.target.value;
    event.preventDefault();
    setFilteredValues({
      ...filteredValues,
      name,
    });
  };

  const selectExist = (event) => {
    const checked = event.target.checked;
    const value = event.target.value;
    if (checked) {
      setFilteredValues({
        ...filteredValues,
        exist: value,
      });
    }
  };

  const selectGender = (event) => {
    const checked = event.target.checked;
    const gender = event.target.value;
    if (checked) {
      setFilteredValues({
        ...filteredValues,
        gender,
      });
    }
  };

  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h2 className={styles.title}>FILTERS</h2>
      <form className={styles.form}>
        <div className={styles.filtersWrapper}>
          <div className={styles.filterName}>
            <label
              className={styles.filterCategoryTitle}
              htmlFor={styles.nameInput}
            >
              Person name:
            </label>
            <input
              className={styles.nameInput}
              type="text"
              placeholder="Enter name"
              value={filteredValues.name}
              onChange={(event) => changeName(event)}
            />
          </div>
          <div>
            <p className={styles.filterCategoryTitle}>Exist:</p>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="exist"
                value="alive"
                onClick={(event) => selectExist(event)}
              />
              <span className={styles.fake}></span>
              <span>Alive</span>
            </label>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="exist"
                value="dead"
                onClick={(event) => selectExist(event)}
              />
              <span className={styles.fake}></span>
              <span>Dead</span>
            </label>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="exist"
                value="unknown"
                onClick={(event) => selectExist(event)}
              />
              <span className={styles.fake}></span>
              <span>Unknow</span>
            </label>
          </div>
          <div>
            <p className={styles.filterCategoryTitle}>Gender:</p>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="gender"
                value="male"
                onClick={(event) => selectGender(event)}
              />
              <span className={styles.fake}></span>
              <span>Male</span>
            </label>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="gender"
                value="female"
                onClick={(event) => selectGender(event)}
              />
              <span className={styles.fake}></span>
              <span>Female</span>
            </label>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="gender"
                value="genderless"
                onClick={(event) => selectGender(event)}
              />
              <span className={styles.fake}></span>
              <span>Genderless</span>
            </label>
            <label className={styles.existLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="gender"
                value="unknown"
                onClick={(event) => selectGender(event)}
              />
              <span className={styles.fake}></span>
              <span>Unknow</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            dispatch(getPersons(filteredValues));
          }}
        >
          Serch
        </button>
      </form>
    </header>
  );
};
