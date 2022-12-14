
import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import ProjectPageUI from '../../components/core-ui/project-page/project-page-ui';
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projectsData';

function ProjectPage() {
    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                width: '350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <ProjectPageUI theme={theme}
            classes={classes}
            search={search}
            setSearch={setSearch}
            filteredArticles={filteredArticles}
        />
    )
}

export default ProjectPage
