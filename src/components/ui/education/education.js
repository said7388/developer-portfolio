import { Container } from '@mui/material';
import React, { useContext } from 'react';
import education from '../../../assets/lottie/education.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { educationData } from '../../../data/educationData';
import AnimationLottie from '../../helper/animation-lottie';
import EducationCard from './education-card';
import './education.css';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="education" id="resume">
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
        </div>
    )
}

export default Education
