import React from 'react';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';



const apiIcon = {
  margin: 0,
  top: 12,
  right: 20,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" >
      newsImage React App v 0.6
    </a>
    <a className="navbar-brand" href="/">
     Home
    </a> 
    <a className="navbar-brand" href="/album">
      Articles
    </a>
    <a className="navbar-brand" href="/saved">
      Saved
    </a>

    <Button  style={apiIcon} variant="contained" size="small" color="primary" href="http://localhost:3001/api/articles">
      API&nbsp; <Settings fontSize="small" />
    </Button>


    


  </nav>
);

export default Nav;
