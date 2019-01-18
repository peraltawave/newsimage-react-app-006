import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Album from "./pages/Album";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Team from "./pages/Team";


import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/album" component={Album} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/team" component={Team} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
