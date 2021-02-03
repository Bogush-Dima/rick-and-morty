import clsx from "clsx";
import styles from "components/Characters/style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "store/actions";
import { Person } from "./Person";

export const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const prev = useSelector((state) => state.characters.info.prev);
  const next = useSelector((state) => state.characters.info.next);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const persons = useSelector((store) => store.characters.items);

  return (
    <section className={styles.section}>
      <div className={clsx(styles.loader, { [styles.showLoader]: isLoading })}>
        LOADING..............
      </div>
      <div
        className={clsx(styles.characters, {
          [styles.charactersHidden]: isLoading,
        })}
      >
        {error ||
          persons.map((person) => <Person person={person} key={person.id} />)}
      </div>
      <div className={styles.btns}>
        <button
          className={clsx(styles.charactersBtn, { [styles.disabled]: !prev })}
          onClick={() => dispatch(getPersons({}, prev))}
          disabled={!prev}
        >
          &lt;
        </button>
        <button
          className={clsx(styles.charactersBtn, { [styles.disabled]: !next })}
          onClick={() => dispatch(getPersons({}, next))}
          disabled={!next}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
