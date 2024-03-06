import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'CREFIN Financial App',
        description: "Crefin is an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tags: ['Express', 'MongoDB', 'OpenAI API', 'AWS Services', 'Node Mailer'],
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: ' 2Expedition Travel App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tags: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "MySQL"],
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate App',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. To develop the API, we used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose. For the UI, we utilized NextJS, Formik, TailwindCSS, and other npm libraries. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tags: ['React', 'Stripe', 'Express', 'MongoDB', 'OpenAI API'],
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tags: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
    }
]


// Do not remove any property.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    name: 'Car Pooling System',
    description: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/