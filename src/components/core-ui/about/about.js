import React, { useContext } from 'react';
import codings from '../../../assets/lottie/coding.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import AnimationLottie from '../../helper/animation-lottie';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <div className="about" id="about">
                <div className="line-styling">
                    <div className="style-circle"
                        style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle"
                        style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line"
                        style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body">
                    {/* <BsFillCheckCircleFill className="section-icon" /> */}
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>
                            {aboutData.description1}<br /><br />{aboutData.description2}
                        </p>
                    </div>
                    <div className="about-animation">
                        <AnimationLottie animationPath={codings} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
