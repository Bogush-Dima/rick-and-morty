import styles from "components/Header/style.module.css";

export const Header = () => {
  return (
    <header>
      <h2 className={styles.title}>FILTERS</h2>
      <form className={styles.form}>
        <div className={styles.filtersWrapper}>
          <div className={styles.filterName}>
            <label className={styles.filterCategoryTitle} htmlFor="nameInput">
              Person name:
            </label>
            <input
              className={styles.nameInput}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div>
            <p className={styles.filterCategoryTitle}>Exist:</p>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="exist" />
              <span className={styles.fake}></span>
              <span>Alive</span>
            </label>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="exist" />
              <span className={styles.fake}></span>
              <span>Dead</span>
            </label>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="exist" />
              <span className={styles.fake}></span>
              <span>Unknow</span>
            </label>
          </div>
          <div>
            <p className={styles.filterCategoryTitle}>Gender:</p>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="gender" />
              <span className={styles.fake}></span>
              <span>Male</span>
            </label>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="gender" />
              <span className={styles.fake}></span>
              <span>Female</span>
            </label>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="gender" />
              <span className={styles.fake}></span>
              <span>Genderless</span>
            </label>
            <label className={styles.existLabel}>
              <input className={styles.radio} type="radio" name="gender" />
              <span className={styles.fake}></span>
              <span>Unknow</span>
            </label>
          </div>
        </div>
        <button type="submit">Serch</button>
      </form>
    </header>
  );
};
