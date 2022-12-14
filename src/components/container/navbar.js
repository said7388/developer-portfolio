import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import NavbarUI from '../core-ui/navbar/navbar-ui';

const Navbar = () => {
  const { theme, setHandleDrawer, changeTheme, isDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: '2.5rem',
      color: theme.tertiary,
      cursor: 'pointer',
      transform: 'translateY(-10px)',
      transition: 'color 0.3s',
      '&:hover': {
        color: theme.primary,
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
      [t.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
    MuiDrawer: {
      padding: '0em 1.8em',
      width: '14em',
      fontFamily: ' var(--primaryFont)',
      fontStyle: ' normal',
      fontWeight: ' normal',
      fontSize: ' 24px',
      background: theme.secondary,
      overflow: 'hidden',
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      [t.breakpoints.down('sm')]: {
        width: '12em',
      },
    },
    closebtnIcon: {
      fontSize: '2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: theme.primary,
      position: 'absolute',
      right: 40,
      top: 40,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.tertiary,
      },
      [t.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: '2rem auto',
      borderRadius: '78.8418px',
      background: theme.secondary,
      color: theme.primary,
      width: '85%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '0 30px',
      boxSizing: 'border-box',
      border: '2px solid',
      borderColor: theme.primary,
      transition: 'background-color 0.2s, color 0.2s',
      '&:hover': {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0 25px',
        height: '55px',
      },
    },
    drawerLinks: {
      fontFamily: 'var(--primaryFont)',
      width: '50%',
      fontSize: '1.3rem',
      fontWeight: 600,
      [t.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      },
    },
    drawerIcon: {
      fontSize: '1.6rem',
      [t.breakpoints.down('sm')]: {
        fontSize: '1.385rem',
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  };

  return (
    <NavbarUI
      theme={theme}
      shortname={shortname}
      classes={classes}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      open={open}
      changeTheme={changeTheme}
      isDark={isDark}
    />
  );
};

export default Navbar;