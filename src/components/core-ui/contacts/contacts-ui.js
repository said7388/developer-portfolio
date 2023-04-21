
import React, { useContext } from 'react';
import { FaGithub, FaLinkedinIn, } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/theme-context';
import { contactsData } from '../../../data/contactsData';
import './contacts.css';

const ContactUI = ({ open, success, errMsg, handleClose, classes, handleContactForm, name, setName, form, email, setEmail, message, setMessage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className='contacts'
      id='contacts'
      style={{ backgroundColor: theme.secondary }}
    >
      <div className='contacts--container'>
              {contactsData.github && (
                <a
                  href="https://github.com/paulinha-19"
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label='GitHub' />
                </a>
              )}
              {contactsData.linkedIn && (
                <a
                  href="https://www.linkedin.com/in/paulaso/"
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label='LinkedIn' />
                </a>
              )}
      </div>
    </div>
  );
};

export default ContactUI;