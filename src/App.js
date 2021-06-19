import React from "react";

import "./App.css";
import Home from "./App/Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./App/Pages/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
