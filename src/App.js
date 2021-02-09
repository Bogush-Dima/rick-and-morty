import styles from "style.module.css";
import { Characters } from "components/Characters";
import { CharacterInfo } from "components/CharacterInfo";
import { FallbackRedirect } from "components/FallbackRedirect";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
      <Switch>
        <Route path='/characters' component={Characters} />
        <Route path='/:idOfPerson' component={CharacterInfo} />
        <Route path='*' component={FallbackRedirect} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
