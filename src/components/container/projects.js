import React from 'react';
import { projectsData } from '../../data/projectsData';
import SingleProject from './single-project';

const Projects = () => {

  return (
    <>
      {projectsData.length > 0 && (
        <div className="projects" id="projects" style={{ backgroundColor: '#0F0C41' }}>
          <div className="projects--header">
            <h1 style={{ color: '#1D9BF0' }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map(project => (
                <SingleProject
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
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Projects;