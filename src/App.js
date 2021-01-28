import styles from "style.module.css";
import { Characters } from "components/Characters";
import { Header } from "components/Header";
import { CharacterInfo } from "components/CharacterInfo";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
