import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Album from "./pages/Album";
import Home from "./pages/Home";
import RecipeReviewCard from "./pages/Card";
import NoMatch from "./pages/NoMatch";


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
        <Route exact path="/card" component={RecipeReviewCard} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
