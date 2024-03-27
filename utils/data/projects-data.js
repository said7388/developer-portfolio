import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
    {
        id: 1,
        name: "Jp Gadgets",
        description:
            "Building and maintaining an ecommerce application that focus on providing Tech Savvy peeps with products and latest gadgets online",
        tools: [
            "Express",
            "MongoDB",
            "Node Mailer",
            "Typescript",
            "Tailwind",
            "ViteJs",
            "React",
        ],
        role: "Fullstack Developer",
        code: "",
        link: "https://jpgadget.vercel.app/",
        demo: "",
        image: crefin,
    },
    {
        id: 2,
        name: "Trippy App",
        description:
            "An online application that provides users with travel ameneties, locations, and all travel itinerery all in one app",
        tools: [
            "React",
            "Vite",
            "Google Maps",
            "Javascript",
            "Express",
            "MongoDB",
        ],
        role: "Full Stack Developer",
        code: "",
        link: "https://trippy-huas.onrender.com/",
        demo: "",
        image: travel,
    },
    {
        id: 3,
        name: "The Express Trades",
        description:
            "An online crypto market web application built with nodejs reactjs ,typescript and tailwind leveraging tradeview developer tools and kora payment gateway",
        tools: [
            "React",
            "Tailwind",
            "Express",
            "TypeScript",
            "MongoDB",
            "Redux",
            "React Router",
            "Korapay",
            "NodeJs",
            "JWT",
        ],
        code: "",
        link: "https://www.theexpresstrades.com/",
        role: "Full Stack Developer",
        demo: "",
        image: realEstate,
    },
    {
        id: 4,
        name: "Merchant Portal",
        description:
            "My team and I developed Afiari Business Dashboard application called Merchant Portal. As a front-end developer, I worked on creating the dashboard using Typescript, React, Tailwind, Redux, RestAPI, and other necessary npm libraries. We used React Redux to manage the application's state and Afiari Inc RestAPI to communicate and interact with shopping page and database, replicating UI desing with Tailwind CSS",
        tools: [
            "Typescript",
            "Tailwind",
            "Redux",
            "React Router",
            "Azure Dev Ops",
            "Recharts",
            "Ant Design",
        ],
        code: "",
        link: "https://as-app-merchant-portal-staging.azurewebsites.net/",
        demo: "",
        image: ayla,
        role: "Front End Developer",
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
