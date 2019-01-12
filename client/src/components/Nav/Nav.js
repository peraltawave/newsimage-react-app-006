import React from "react";
import Button from '@material-ui/core/Button';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      newsImage React App v 0.6
    </a>
    <a className="navbar-brand" href="/">
     Home
    </a> 
    <a className="navbar-brand" href="/books">
      Book List
    </a>
    <a className="navbar-brand" href="/album">
      Album
    </a>

    <a className="navbar-brand" href="/saved">
      Saved
    </a>

    <Button variant="contained" color="secondary" href="http://localhost:3001/api/articles">
      API
    </Button>
  </nav>
);

export default Nav;
