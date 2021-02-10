import styles from "components/CharacterInfo/Episodes/style.module.css";

export const Episodes = ({episode: {name, air_date}}) => {
  return (
    <div className={styles.episode}>
      <p className={styles.name}>{name}</p>
      <p className={styles.airDate}>{air_date}</p>
    </div>
  );
};
