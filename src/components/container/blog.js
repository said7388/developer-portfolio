import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import BlogUI from '../core-ui/blog/blog-ui';

function Blog() {
    const [blogData, setBlogData] = useState([])
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.secondary,
            backgroundColor: theme.buttonColor,
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.buttonColor,
            backgroundColor: theme.secondary,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.buttonColor,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();


    useEffect(() => {
        fetch("https://dev.to/api/articles?username=said7388")
            .then((response) => response.json())
            .then(data => setBlogData(data))
    }, [])

    return (
        <BlogUI classes={classes} blogData={blogData} />
    )
}

export default Blog
