import styles from 'components/CharacterInfo/Episodes/style.module.css'

export const Episodes = ({ episode }) => {
  return <p className={styles.episode}>{episode}</p>;
};