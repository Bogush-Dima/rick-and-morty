import styles from "components/Characters/Person/Person.module.css";

export const Person = () => {
  return (
    <div className={styles.person}>
      <a className={styles.imgLink} href="personCard">
        <img
          className={styles.img}
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="img"
        />
      </a>
      <div className={styles.info}>
        <a className={styles.name} href="personCard">
          Name
        </a>
        <p className={styles.status}>
          <a className={`${styles.exist} ${styles.alive}`} href="filteredByThis">
            Alive
          </a>
          <a className={styles.race} href="filteredByThis">
            Human
          </a>

          <a className={styles.gender} href="filteredByThis">
            Male
          </a>
        </p>
        <div>
          <p className={styles.locationTitle}>Last known location:</p>
          <p className={styles.lastLocation}>Minsk</p>
        </div>
        <div>
          <p className={styles.locationTitle}>First seen in:</p>
          <p className={styles.FirstSeen}>Gorodeya</p>
        </div>
      </div>
    </div>
  );
};
