import React, { useContext } from 'react';
import education from '../../assets/lottie/education.json';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css';
import EducationCard from './EducationCard';

import { Container } from '@material-ui/core';
import { educationData } from '../../data/educationData';
import AnimationLottie from '../Animation';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <Container className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-image">
                    <AnimationLottie animationPath={education} />
                </div>
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Education
