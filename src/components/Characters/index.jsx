import styles from 'components/Characters/Characters.module.css'
import { Person } from './Person'

export const Characters = () => {
  return (
    <section className={styles.section}>
      <Person />
      <Person />
      <Person />
      <Person />
    </section>
  )
}