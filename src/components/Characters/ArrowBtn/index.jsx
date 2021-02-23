import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCharacters } from "store/actions";
import { CharacterPath } from "store/paths";
const queryString = require("query-string");

export const ArrowBtn = ({ direction }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { next = "", prev = "" } = useSelector(
    ({ characters: { info } }) => info
  );
  const getDirectionLink = () => {
    switch (direction) {
      case "prev":
        return prev;
      case "next":
        return next;
      default:
        return "";
    }
  };
  const directionLink = getDirectionLink();

  const addPageToHistorySerch = (directionLink) => {
    const page = queryString.stringify(
      queryString.parse(directionLink.split("?")[1])
    );
    history.push({
      pathname: CharacterPath,
      search: page,
    });
  };

  return (
    <button
      className={clsx(styles.charactersBtn, {
        [styles.disabled]: !directionLink,
      })}
      onClick={() =>
        dispatch(getCharacters({}, addPageToHistorySerch(directionLink)))
      }
      disabled={!directionLink}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
};
