import styles from "style.module.css";
import { Characters } from "components/Characters";
import { Filter } from "components/Filter";
import { CharacterInfo } from "components/CharacterInfo";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Filter />
        <Route exact path='/' component={Characters} />
        <Route path='/:idOfPerson' component={CharacterInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
