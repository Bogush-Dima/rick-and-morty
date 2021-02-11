import clsx from "clsx";
import styles from "components/Characters/style.module.css";
import { Filter } from "components/Filter";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCharacters } from "store/actions";
import { Character } from "./Character";
const queryString = require("query-string");

export const Characters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stateCharactersItems = useSelector((state) => state.characters.items);

  useEffect(() => {
    let parsedFilters;
    if (history.location.search) {
      parsedFilters = queryString.parse(history.location.search);
    }
    if (stateCharactersItems.length === 0 || parsedFilters) {
      dispatch(getCharacters(parsedFilters))
    } 
  }, [dispatch, history.location.search, stateCharactersItems.length]);

  const { next, prev } = useSelector(({ characters: { info } }) => info);
  const { isLoading, error, items } = useSelector(
    ({ characters }) => characters
  );

  return (
    <>
      <Filter />
      <section className={styles.section} id="characters">
        <div
          className={clsx(styles.loader, { [styles.showLoader]: isLoading })}
        >
          LOADING..............
        </div>
        <div
          className={clsx(styles.characters, {
            [styles.charactersHidden]: isLoading,
          })}
        >
          {error ||
            items.map((character) => (
              <Character character={character} key={character.id} />
            ))}
        </div>
        <div className={styles.btns}>
          <button
            className={clsx(styles.charactersBtn, { [styles.disabled]: !prev })}
            onClick={() => dispatch(getCharacters({}, prev))}
            disabled={!prev}
          >
            &lt;
          </button>
          <button
            className={clsx(styles.charactersBtn, { [styles.disabled]: !next })}
            onClick={() => dispatch(getCharacters({}, next))}
            disabled={!next}
          >
            &gt;
          </button>
        </div>
      </section>
    </>
  );
};
