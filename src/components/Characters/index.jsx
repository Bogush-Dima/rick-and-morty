import clsx from "clsx";
import styles from "components/Characters/style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons, clickPrevOrNextCharactersList } from "store/actions";
import { Person } from "./Person";

export const Characters = () => {
  const dispatch = useDispatch();
  const prev = useSelector((state) => state.characters.info.prev);
  const next = useSelector((state) => state.characters.info.next);
  const isLoading = useSelector((state) => state.characters.isLoading);

  useEffect(() => {
    dispatch(getPersons());
  }, []);

  const persons = useSelector((store) => store.characters.items);

  return (
    <section className={styles.section}>
      <div className={clsx(styles.loader, { [styles.showLoader]: isLoading })}>
        LOADING..............
      </div>
      <div className={styles.characters}>
        {persons.map((person) => (
          <Person person={person} key={person.id} />
        ))}
      </div>
      <div className={styles.btns}>
        <button
          className={clsx(styles.charactersBtn, { [styles.disabled]: !prev })}
          onClick={() => dispatch(clickPrevOrNextCharactersList("prev"))}
          disabled={!prev}
        >
          &lt;
        </button>
        <button
          className={clsx(styles.charactersBtn, { [styles.disabled]: !next })}
          onClick={() => dispatch(clickPrevOrNextCharactersList("next"))}
          disabled={!next}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
