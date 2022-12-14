import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import { blogData } from '../../../data/blogData';
import './blog.css';
import SingleBlog from './single-blog/single-blog';

const BlogUI = ({classes}) => {
  const { theme } = useContext(ThemeContext);

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
  );
};

export default BlogUI;