import React from 'react';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';



const apiButton = {
  margin: 0,
  top: 12,
  right: 20,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
  background: '#3b5998',

};


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    <span className="navbar-brand2" >
      newsImage 
    </span>
    <a className="navbar-brand" href="/">
     Home
    </a> 
    {/* <a className="navbar-brand" href="/album">
      Articles
    </a> */}
    <a className="navbar-brand" href="/article">
      Articles
    </a>

    <a className="navbar-brand" href="/saved">
      Saved
    </a>
    <a className="navbar-brand" href="/team">
    Team</a>

    
  </nav>
);

export default Nav;
