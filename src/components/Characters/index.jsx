import styles from "components/Characters/style.module.css";
import { useSelector } from "react-redux";
import { Person } from "./Person";

export const Characters = () => {
  const persons = useSelector((store) => store.characters.items);
  return (
    <section className={styles.section}>
      <div className={styles.characters}>
        {persons.map((person) => (
          <Person person={person} />
        ))}
      </div>
      <div className={styles.btns}>
        <button className={styles.charactersBtn}>&lt;</button>
        <button className={styles.charactersBtn}>&gt;</button>
      </div>
    </section>
  );
};
