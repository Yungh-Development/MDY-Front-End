import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ShoppingCartProject } from "./shoppingCartProject/index";

import "./App.css";

export default function App() {
  <div className="">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <ShoppingCartProject />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>;
}
