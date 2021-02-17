import styles from 'components/Filter/RadioFilterItem/style.module.css';

export const RadioFilterItem = ({
  name,
  value,
  selectFilterValue,
  selectedFilters,
}) => {
  const isChecked = () => {
    if (value === selectedFilters[name]) {
      return true;
    }
    return false;
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.radio}
        type="radio"
        checked={isChecked()}
        name={name}
        value={value}
        onChange={(event) => selectFilterValue(event)}
      />
      <span className={styles.fake}></span>
      <span className={styles.pointName}>{value}</span>
    </label>
  );
};
