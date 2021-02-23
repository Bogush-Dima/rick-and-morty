import React from "react";
import styles from "./style.module.css";

export const EnterNameField = ({ name, selectFilterValue }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.title} htmlFor={styles.input}>
        Character name:
      </label>
      <input
        className={styles.input}
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={selectFilterValue}
      />
    </div>
  );
};
