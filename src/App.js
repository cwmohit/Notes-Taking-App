import React from "react";
import { Route, Switch } from "react-router-dom";
import Start from "./Start";
import Home from "./Home";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Start" component={Start} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
