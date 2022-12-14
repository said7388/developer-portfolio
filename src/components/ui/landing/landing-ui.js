
import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import Typed from 'react-typed';
import { headerData } from '../../../data/headerData';
import { socialsData } from '../../../data/socialsData';
import './landing.css';

import {
    FaFacebook, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';

function LandingUI({ theme, drawerOpen, classes }) {


    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
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
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
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
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social twitter-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.facebook && (
                            <a
                                href={socialsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className='landing--social facebook-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
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
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingUI;