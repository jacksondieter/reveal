import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Create } from "./components/Create";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { Show } from "./components/Show";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/create" />
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/:id">
          <Show />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
