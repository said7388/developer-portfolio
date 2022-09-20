import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import './Blog.css';
import SingleBlog from './SingleBlog/SingleBlog';


function Blog() {

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

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{ backgroundColor: theme.secondary }}>
                    <div className="blog--header">
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Blog
