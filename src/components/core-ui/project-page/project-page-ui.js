import { Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { headerData } from '../../../data/headerData';
import SingleProject from '../../container/single-project';
import './projectPage.css';

const ProjectPageUI = ({ theme, classes, search, setSearch, filteredArticles }) => {
  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Projects</title>
      </Helmet>
      <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Projects</h1>
      </div>
      <div className="projectPage-container">
        <div className="projectPage-search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
        </div>
        <div className="project-container">
          <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
            {filteredArticles.map(project => (
              <SingleProject
                theme={theme}
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageUI;