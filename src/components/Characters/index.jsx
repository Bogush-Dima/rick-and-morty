import clsx from "clsx";
import styles from "components/Characters/style.module.css";
import { Filter } from "components/Filter";
import { Loader } from "components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCharacters, setOldFilters } from "store/actions";
import { ArrowBtn } from "./ArrowBtn";
import { Character } from "./Character";
const queryString = require("query-string");

export const Characters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stateCharactersItems = useSelector((state) => state.characters.items);
  const { oldFilters } = useSelector((state) => state);

  useEffect(() => {
    let parsedFilters = queryString.parse(history.location.search);
    
    dispatch(setOldFilters(parsedFilters));

    let isNewFilters =
      queryString.stringify(parsedFilters) ===
      queryString.stringify(oldFilters);

    if (stateCharactersItems.length === 0 || !isNewFilters) {
      dispatch(getCharacters(parsedFilters));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
