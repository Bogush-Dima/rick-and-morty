import styles from "components/Characters/Person/Person.module.css";

export const Person = ({ person }) => {
  return (
    <div className={styles.person}>
      <a className={styles.imgLink} href="personCard">
        <img
          className={styles.img}
          src={person.image}
          alt="img"
        />
      </a>
      <div className={styles.info}>
        <a className={styles.name} href="personCard">
          {person.name}
        </a>
        <p className={styles.status}>
          <a
            className={`${styles.exist} ${styles.alive}`}
            href="filteredByThis"
          >
            {person.status}
          </a>
          <a className={styles.race} href="filteredByThis">
            {person.species}
          </a>

          <a className={styles.gender} href="filteredByThis">
            {person.gender}
          </a>
        </p>
        <div>
          <p className={styles.locationTitle}>Last known location:</p>
          <p className={styles.lastLocation}>{person.location.name}</p>
        </div>
        <div>
          <p className={styles.locationTitle}>First seen in:</p>
          <p className={styles.FirstSeen}>{person.origin.name}</p>
        </div>
      </div>
    </div>
  );
};
