import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
   marginRight:  2,
  },
  
}));

function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorEl = React.useRef(null);

  function handleToggle() {
    setOpen(!open);
  }

  function handleClose(event) {
    if (anchorEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={"menuButtonContainer"} >
    <div className={classes.root}>
      {/* <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>U.S.</MenuItem>
          <MenuItem>World</MenuItem>
          <MenuItem>Politics</MenuItem>
          <MenuItem>Business</MenuItem>
          <MenuItem>Sports</MenuItem>
          <MenuItem>Entertainment</MenuItem>
          <MenuItem>Opinion</MenuItem>
        </MenuList>
      </Paper> */}
      
        <Button
          color={"default"}
          buttonRef={anchorEl}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={"menuButton"}
          
        >
          Select Article Type
        </Button>
        <Popper open={open} anchorEl={anchorEl.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>U.S.</MenuItem>
                    <MenuItem onClick={handleClose}>World</MenuItem>
                    <MenuItem onClick={handleClose}>Politics</MenuItem>
                    <MenuItem onClick={handleClose}>Business</MenuItem>
                    <MenuItem onClick={handleClose}>Sports</MenuItem>
                    <MenuItem onClick={handleClose}>Entertainment</MenuItem>
                    <MenuItem onClick={handleClose}>Opinion</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default MenuListComposition;