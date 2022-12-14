import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projectsData';
import SingleProject from '../../container/single-project';
import './projects.css';

function ProjectsUI({ theme, classes }) {

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
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
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
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

export default ProjectsUI
