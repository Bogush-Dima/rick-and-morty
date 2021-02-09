import clsx from "clsx";
import styles from "components/Characters/Character/style.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clickExistInPerson,
  clickSpeciesInPerson,
  clickGenderInPerson,
} from "store/actions";

export const Character = ({
  character: { id, image, name, status, species, gender, location, origin },
}) => {
  const dispatch = useDispatch();


  const clickExist = (event) => {
    event.preventDefault();
    dispatch(clickExistInPerson(status));
  };
  const clickSpecies = (event) => {
    event.preventDefault();
    dispatch(clickSpeciesInPerson(species));
  };
  const clickGender = (event) => {
    event.preventDefault();
    dispatch(clickGenderInPerson(gender));
  };

  return (
    <div className={styles.person}>
      <Link to={`${id}`}>
        <img className={styles.img} src={image} alt="img" />
      </Link>
      <div className={styles.info}>
        <Link className={styles.name} to={`${id}`}>
          {name}
        </Link>
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
            className={clsx(styles.status, styles.species)}
            href="filteredByThis"
            onClick={(event) => clickSpecies(event)}
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
