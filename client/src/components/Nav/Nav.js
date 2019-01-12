import React from "react";
import Button from '@material-ui/core/Button';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      newsImage React App v 0.6
    </a>
    <Button variant="contained" color="primary">
      Sample Button
    </Button>
  </nav>
);

export default Nav;
