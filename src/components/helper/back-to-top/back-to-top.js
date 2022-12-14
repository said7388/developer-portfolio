import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { ThemeContext } from '../../../contexts/theme-context';
import './back-to-top.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '2rem',
            color: theme.primary,
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    );
}

export default BackToTop;
