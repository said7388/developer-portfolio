import { Drawer, Box } from '@mui/material';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaFolderOpen, FaUser, FaCode, FaCodepen } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { IoClose, IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { MdPhone, MdWork } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { HashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

function NavbarUI({ classes, handleDrawerOpen, handleDrawerClose, open, changeTheme, isDark }) {
    return (
        <Box className='navbar'>
            <div className='navbar--container'>
                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <IoClose
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Sobre
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                        <Fade left>
                            <NavLink
                                to='/#experience'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <MdWork className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Experiência
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                        <Fade left>
                            <NavLink
                                to='/#skills'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaCode className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Skills
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                        <Fade left>
                            <NavLink
                                to='/#projetos'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaCodepen className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Projetos
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                        <Fade left>
                            <NavLink
                                to='/#resume'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Educação
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </Box>
    );
}

export default NavbarUI;
