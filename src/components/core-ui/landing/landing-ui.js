
import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { Box } from '@mui/material';
import Typed from 'react-typed';
import { headerData } from '../../../data/headerData';
import './landing.css';
import '../../core-ui/about/about.css';
import fotoPerfil from "../../../assets/png/portfolio.jpg"

function LandingUI({ theme, classes }) {
    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h1>Paula Soares</h1>
                        <Typed
                            strings={['Frontend Developer Jr.']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>
                            Apaixonada por programação e em busca de crescimento profissional.
    
                        </p>
                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href="https://drive.google.com/file/d/19QRUHXsjgDZOxlUqBZjFpRRzTzar4BkS/view?usp=sharing"
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className={classes.resumeBtn}>
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className={classes.contactBtn}>
                                    Contato
                                </button>
                            </NavLink>
                        </div>
                      
                    </div>
                    <div className='about-photo'>
                        <img
                            src={fotoPerfil}
                            alt='foto perfil'
                            className='landing--img'
                            style={{
                                // opacity: `${drawerOpen ? '0' : '1'}`,
                                borderColor: theme.primary,
                            }}
                        />
                    </div>
                    {/* <Box sx={{ mt: 5 }}>
                            {contactsData.linkedIn && (
                                <a
                                    href="https://www.linkedin.com/in/paulaso/"
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedin
                                        className='landing--social linkedin-icon'
                                        style={{ color: theme.primary }}
                                        aria-label='LinkedIn'
                                    />
                                </a>
                            )}
                            {contactsData.github && (
                                <a
                                    href="https://github.com/paulinha-19"
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGithub
                                        className='landing--social'
                                        style={{ color: theme.primary }}
                                        aria-label='GitHub'
                                    />
                                </a>
                            )}
                        </Box> */}
                </div>
            </div>
        </div>
    );
}

export default LandingUI;