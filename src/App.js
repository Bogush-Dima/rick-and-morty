import styles from "App.module.css";
import { Characters } from "components/Characters";
import { Header } from "components/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
