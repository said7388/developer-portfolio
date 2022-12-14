import { makeStyles } from '@mui/styles';
import React from 'react';
import SingleProjectUI from '../core-ui/single-project/single-project-ui';

const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
      '&:hover': {},
    },
  }));

  const classes = useStyles();

  return (
    <SingleProjectUI
      classes={classes}
      id={id}
      name={name}
      desc={desc}
      tags={tags}
      code={code}
      demo={demo}
      image={image}
      theme={theme}
    />
  );
};

export default SingleProject;