import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Haletale',
        description: "Haletale​ is a real state property rental management app that creates affordable and flexible housing solutions to facilitate an easy transition for international students and newcomers​ ​to the country, which is accomplished by providing co-living solutions for landlords allowing them to rent out their properties faster and generate higher income from tenants. ",
        tools: ['Ruby On Rails', 'React', 'PostgreSQL', 'Sidekiq', 'ContextAPI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: 'https://haletale.com',
        image: crefin,
    },
    {
        id: 2,
        name: 'Lets Chatly',
        description: 'A real-time messaging platform aimed at enhancing team communication and collaboration within an organization. Provide real-time messaging & reactions from channels to individuals.',
        tools: ['Ruby On Rails', 'Vue', 'PostgreSQL', 'Sidekiq', 'Pinia', 'Action Cable'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        link: '',
        image: travel,
    },
    {
        id: 3,
        name: 'MapleHR',
        description: 'MapleHR is an HR system that automates almost all the processes of an IT company. Due to its dynamic nature, it can be fit into any company policy.',
        tools: ['Ruby On Rails', 'React', 'PostgreSQL', 'Sidekiq', 'RSpec', 'Redux', 'Multi-Tendency', 'Swagger'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: 'https://maplehr.io/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Hostel Management System',
        description: "Developed a hostel management system for Pakistan's Client to manage hostel operations efficiently, including room assignments, rent management, employee oversight, and maintenance requests. The system allows users to check the status of their rent payments and submit maintenance requests.",
        tools: ['Node', 'React', 'Express', 'MongoDB', 'BullMQ'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: '',
        image: ayla,
    },
    {
        id: 5,
        name: 'Limpar',
        description: "A US company which manages all the data of the US.",
        tools: ['Ruby On Rails', 'JQuery', 'Bootstrap', 'Elastic Search', 'Postgres', 'Sidekiq'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: '',
        image: ayla,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },