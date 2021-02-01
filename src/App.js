import styles from "style.module.css";
import { Characters } from "components/Characters";
import { Filter } from "components/Filter";
import { CharacterInfo } from "components/CharacterInfo";

function App() {
  return (
    <div className={styles.wrapper}>
      <Filter />
      <Characters />
    </div>
  );
}

export default App;
