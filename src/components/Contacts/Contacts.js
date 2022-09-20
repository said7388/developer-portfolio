import emailjs from '@emailjs/browser';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMediumM, FaStackOverflow, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import isEmail from 'validator/lib/isEmail';

import { ThemeContext } from '../../contexts/ThemeContext';

import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `2px solid ${theme.buttonColor}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `2px solid ${theme.primary}`,
            },
        },
        message: {
            border: `2px solid ${theme.buttonColor}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `2px solid ${theme.primary}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.buttonColor,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.primary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.buttonColor,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.primary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.buttonColor,
            },
        },
    }));

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                emailjs.sendForm('service_qxwd33p', 'template_rchyera', form.current, 'Xswf-fBSF_Z-h8fvU')
                    .then((result) => {
                        console.log('success');
                        setSuccess(true);
                        setErrMsg('');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setOpen(false);
                    }, (error) => {
                        console.log(error.text);
                    });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form ref={form} onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>
                                    Name
                                </label>
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='user_name'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Email'
                                    className={classes.label}
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='user_email'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Message'
                                    className={classes.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='message'
                                    className={`form-message ${classes.message}`}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                    type='submit'
                                    className={classes.submitBtn}
                                >
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}

                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                            )}

                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaFacebook aria-label='facebook' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
