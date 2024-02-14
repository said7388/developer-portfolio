import ayla from '/public/image/ayla.jpg'
import crefin from '/public/image/crefin.jpg'
import realEstate from '/public/image/real-estate.jpg'
import travel from '/public/image/travel.jpg'


export const projectsData = [
    {
        id: 1,
        projectName: 'CREFIN Financial App',
        projectDesc: 'CREFIN is an AI-driven financial mobile application bot. We are using Flutter and Express in this project. I am responsible for developing API solutions as a backend developer.',
        tags: ['Express', 'MongoDB', 'OpenAI API', 'AWS'],
        code: '/',
        demo: '/',
        image: crefin
    },
    {
        id: 2,
        projectName: ' 2Expedition Travel App',
        projectDesc: 'I have designed and developed a full-stack web application for 2Expedition, a travel agency in Armenia, working solo from requirement analysis to production deployment.',
        tags: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "MySQL"],
        code: 'https://github.com/said7388/jewelry-niche',
        demo: 'https://pandora-web.netlify.app/',
        image: travel
    },
    {
        id: 3,
        projectName: 'AI Powered Real Estate App',
        projectDesc: 'My team built a Real Estate application with AI using OpenAI and Replicate API. I worked with the team as a full-stack developer to develop API and design UI.',
        tags: ['React', 'Tailwind CSS', 'ExpressJS', 'MongoDB', 'OpenAI API'],
        code: 'https://github.com/said7388/Travel-Agency-client',
        demo: 'https://travel-agency-fc58b.web.app/',
        image: realEstate
    },
    {
        id: 4,
        projectName: 'Ayla Networks',
        projectDesc: 'I have contributed to the development of web applications for Ayla Networks, a company that simplifies the development of smart home and IoT solutions.',
        tags: ['React', 'SAAS', 'React Bootstrap', 'Redux'],
        code: '',
        demo: 'https://www.aylanetworks.com/',
        image: ayla
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/