import React from "react";
import styles from "./style.module.css";

export const RadioFilterItem = ({
  name,
  value,
  selectFilterValue,
  selectedFilters,
}) => {
  const isChecked = () => value === selectedFilters[name];

  return (
    <label className={styles.label}>
      <input
        className={styles.radio}
        type="radio"
        checked={isChecked()}
        name={name}
        value={value}
        onChange={selectFilterValue}
      />
      <span className={styles.fake}></span>
      <span className={styles.pointName}>{value}</span>
    </label>
  );
};
