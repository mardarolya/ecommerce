import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => <h1>Hats page</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
