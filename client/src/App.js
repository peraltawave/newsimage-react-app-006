import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Team from "./pages/Team";
import Article from "./pages/Article";
import LogInTab from "./components/Form/LogInForm";


import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/team" component={Team} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
