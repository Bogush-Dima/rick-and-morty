import clsx from "clsx";
import styles from "components/Characters/Person/style.module.css";
import { useDispatch } from "react-redux";
import {
  clickExistInPerson,
  clickRaceInPerson,
  clickGenderInPerson,
} from "store/actions";

export const Person = ({
  person: { image, name, status, species, gender, location, origin },
}) => {
  const dispatch = useDispatch();

  const clickExist = (event) => {
    event.preventDefault();
    dispatch(clickExistInPerson(status));
  };
  const clickRace = (event) => {
    event.preventDefault();
    dispatch(clickRaceInPerson(species));
  };
  const clickGender = (event) => {
    event.preventDefault();
    dispatch(clickGenderInPerson(gender));
  };

  return (
    <div className={styles.person}>
      <a className={styles.imgLink} href="personCard">
        <img className={styles.img} src={image} alt="img" />
      </a>
      <div className={styles.info}>
        <a className={styles.name} href="personCard">
          {name}
        </a>
        <p>
          <span
            className={clsx(styles.status, styles.exist, {
              [styles.alive]: status === "Alive",
              [styles.dead]: status === "Dead",
              [styles.unknown]: status === "unknown",
            })}
            href="filteredByThis"
            onClick={(event) => clickExist(event)}
          >
            {status}
          </span>
          <span
            className={clsx(styles.status, styles.race)}
            href="filteredByThis"
            onClick={(event) => clickRace(event)}
          >
            {species}
          </span>
          <span
            className={clsx(styles.status, styles.gender)}
            href="filteredByThis"
            onClick={(event) => clickGender(event)}
          >
            {gender}
          </span>
        </p>
        <div>
          <p className={styles.locationTitle}>Last known location:</p>
          <p className={styles.lastLocation}>{location.name}</p>
        </div>
        <div>
          <p className={styles.locationTitle}>First seen in:</p>
          <p className={styles.FirstSeen}>{origin.name}</p>
        </div>
      </div>
    </div>
  );
};
