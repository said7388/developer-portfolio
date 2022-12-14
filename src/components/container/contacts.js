import emailjs from '@emailjs/browser';
import { makeStyles } from '@mui/styles';
import React, { useContext, useRef, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import ContactUI from '../core-ui/contacts/contacts-ui';


const Contacts = () => {
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
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
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
    <ContactUI
      open={open}
      success={success}
      errMsg={errMsg}
      handleClose={handleClose}
      classes={classes}
      handleContactForm={handleContactForm}
      name={name}
      setName={setName}
      form={form}
      email={email}
      setEmail={setEmail}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Contacts;