import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);


    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.secondary,
            backgroundColor: theme.buttonColor,
            transition: 'color 0.5s',
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
            transition: 'background-color 0.5s',
            "&:hover": {
                color: theme.buttonColor,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

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

export default Projects
