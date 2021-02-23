import React from "react";
import styles from "./style.module.css";
import { CharacterPath } from "store/paths";
import { Characters } from "components/Characters";
import { CharacterInfo } from "components/CharacterInfo";
import { FallbackRedirect } from "components/FallbackRedirect";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Switch>
          <Route path={CharacterPath} component={Characters} />
          <Route path="/:idOfPerson" component={CharacterInfo} />
          <Route path="*" component={FallbackRedirect} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
