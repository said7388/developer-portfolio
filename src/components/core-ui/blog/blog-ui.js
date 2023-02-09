import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import BlogCard from './blog-card/blog-card';
import './blog.css';

const BlogUI = ({ classes, blogData }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {blogData.length > 0 && (
        <div
          className="blog" id="blog"
          style={{ backgroundColor: theme.secondary }}>
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData.slice(0, 3).map(blog => (
                <BlogCard
                  theme={theme}
                  blog={blog}
                  key={blog.id}
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
  );
};

export default BlogUI;