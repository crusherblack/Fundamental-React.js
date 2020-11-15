import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ModalPage from "./pages/ModalPage";
import Form from "./pages/Form";

import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <NavbarComponent />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/modal">
              <ModalPage />
            </Route>
            <Route exact path="/form" component={Form} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
