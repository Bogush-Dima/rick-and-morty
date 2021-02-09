import styles from "components/CharacterInfo/style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPersonInfo } from "store/actions";
import { Episodes } from "./Episodes";

export const CharacterInfo = () => {
  const { idOfPerson } = useParams();
  const dispatch = useDispatch();
  const { personInfo } = useSelector((store) => store);
  const { episodesNames = [] } = personInfo;

  useEffect(() => {
    dispatch(getPersonInfo(idOfPerson));
  }, [dispatch, idOfPerson]);

  const {
    image,
    name,
    status,
    gender,
    species,
    location = { name: "" },
  } = personInfo;

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <img className={styles.img} src={image} alt="img" />
          <div className={styles.text}>
            <p className={styles.name}>{name}</p>
            <p>
              <span>Exist:</span>
              {status}
            </p>
            <p>
              <span>Gender:</span>
              {gender}
            </p>
            <p>
              <span>Species:</span>
              {species}
            </p>
            <p>
              <span>location:</span>
              {location.name}
            </p>
          </div>
        </div>
        <div className={styles.episodes}>
          <span className={styles.episodesTitle}>Episodes:</span>
          <div className={styles.episodesNames}>
            {episodesNames.map((el) => {
              return <Episodes episode={el} key={el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
