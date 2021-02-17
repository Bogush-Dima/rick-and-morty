import clsx from "clsx";
import styles from "components/Characters/style.module.css";
import { Filter } from "components/Filter";
import { Loader } from "components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCharacters } from "store/actions";
import { ArrowBtn } from "./ArrowBtn";
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
      dispatch(getCharacters(parsedFilters));
    }
  }, [dispatch, history.location.search, stateCharactersItems.length]);

  const { isLoading, error, items } = useSelector(
    ({ characters }) => characters
  );

  return (
    <>
      <Filter />
      {isLoading ? <Loader /> : null}
      <section
        className={clsx(styles.section, {
          [styles.sectionHidden]: isLoading,
        })}
        id="characters"
      >
        <div className={styles.characters}>
          {error ||
            items.map((character) => (
              <Character character={character} key={character.id} />
            ))}
        </div>
        <div className={styles.btns}>
          <ArrowBtn direction="prev" />
          <ArrowBtn direction="next" />
        </div>
      </section>
    </>
  );
};
