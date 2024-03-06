import { makeStyles } from '@mui/styles';
import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '../../assets/png/placeholder.png';

const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid #EFF3F4`,
      color: '#EFF3F4',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: '#0F0C41',
        color: '#1D9BF0',
        transform: 'scale(1.1)',
        border: `2px solid ${'#0F0C41'}`,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      key={id}
      className='singleProject'
      style={{ backgroundColor: '#0C0B33' }}
    >
      <div className='projectContent'>
        <h2
          id={name.replace(' ', '-').toLowerCase()}
          style={{ color: '#EFF3F4' }}
        >
          {name}
        </h2>
        <img src={image ? image : placeholder} alt={name} />
        <div className='project--showcaseBtn'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className={classes.iconBtn}
            aria-labelledby={`${name
              .replace(' ', '-')
              .toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-demo`}
          >
            <FaPlay
              id={`${name
                .replace(' ', '-')
                .toLowerCase()}-demo`}
              aria-label='Demo'
            />
          </a>
          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className={classes.iconBtn}
            aria-labelledby={`${name
              .replace(' ', '-')
              .toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-code`}
          >
            <FaCode
              id={`${name
                .replace(' ', '-')
                .toLowerCase()}-code`}
              aria-label='Code'
            />
          </a>
        </div>
      </div>
      <p
        className='project--desc'
        style={{
          background: '#0F0C41',
          color: '#EFF3F4',
        }}
      >
        {desc}
      </p>
      <div
        className='project--lang'
        style={{
          background: '#0F0C41',
          color: '#EFF3F4',
        }}
      >
        {tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;