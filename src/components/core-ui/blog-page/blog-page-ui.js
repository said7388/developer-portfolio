import { Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { headerData } from '../../../data/headerData';
import SingleBlog from '../blog/single-blog/single-blog';
import './blog.css';

const BlogPageUI = ({ theme, classes, filteredArticles, setSearch, search }) => {
  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Blog</title>
      </Helmet>
      <div className="blogPage--header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Blogs</h1>
      </div>
      <div className="blogPage--container">
        <div className="blog--search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." className={classes.search} />
        </div>
        <div className="blogs--container">
          <Grid className="blog-grid" container direction="row" alignItems="center" justifyContent="center">
            {filteredArticles.reverse().map(blog => (
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
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BlogPageUI;