import { Container } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import Blog from '../../components/container/blog'
import Contacts from '../../components/container/contacts'
import Landing from '../../components/container/landing'
import Navbar from '../../components/container/navbar'
import Projects from '../../components/container/projects'
import About from '../../components/core-ui/about/about'
import Education from '../../components/core-ui/education/education'
import Experience from '../../components/core-ui/experience/experience'
import Skills from '../../components/core-ui/skills/skills'
import { headerData } from '../../data/headerData'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <Container className='homepage-content-area'>
                {/* <div className="svg-area">
                    <svg
                        className="svg-line"
                        width="2"
                        height="98%"
                        viewBox="0 0 2 8676"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none">
                        <path d="M1 0L0.999621 8676"
                            stroke="url(#paint0_linear_0_175)"
                            strokeWidth="2"
                            style={{ strokeDasharray: [8676, 8676], strokeDashoffset: 0, transitionDuration: '500ms' }}>

                        </path>
                        <defs>
                            <linearGradient
                                id="paint0_linear_0_175" x1="1.5" y1="2.18554e-08"
                                x2="1.49962" y2="8676" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00D991"></stop>
                                <stop offset="0.159375" stopColor="#02836B"></stop>
                                <stop offset="0.294792" stopColor="#B3057F"></stop>
                                <stop offset="0.419792" stopColor="#B90DB3"></stop>
                                <stop offset="0.565625" stopColor="#F43712"></stop>
                                <stop offset="0.711458" stopColor="#601BD7"></stop>
                                <stop offset="0.857292" stopColor="#CDAD07"></stop>
                                <stop offset="1" stopColor="#00D991"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
                <About />
                <Experience />
                <Skills />
                {/* <Certificate /> */}
                <Projects />
                <Education />
                <Blog />
                <Contacts />
            </Container>
        </div >
    )
}

export default HomePage
