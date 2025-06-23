export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Website",
    description:
      "A fully responsive, single-page e-commerce application built to showcase and sell footwear, mimicking real-world e-commerce behavior. The app uses Zustand for global state management to efficiently handle cart items, filters, and product selections with a lightweight and scalable logic. It features a complete cart system with add/remove functionality, quantity adjustment, auto-updated totals, and persistent state using localStorage. The product filtering system includes category filters (sneakers, boots, formal), price range sliders, brand and size selectors, and a search bar with keyword matching. Styled with Tailwind CSS, the app delivers a responsive mobile-first experience with a flexible grid layout and a hamburger menu for smaller screens. Each product has a dedicated details page with multiple images, sizes, and detailed descriptions. Routing is handled using React Router, covering the home, products, cart, and product detail pages, including a custom 404 route. The UI is composed of reusable components like product cards, a filter sidebar, cart dropdown, and navigation elements, all built with a modular, component-first approach. Performance optimizations include code splitting, lazy loading, and debounced search input for a smoother experience. Planned enhancements include integrating Stripe or PayPal for payments, adding user authentication via Clerk or Firebase, developing an admin dashboard for managing products, enabling wishlist functionality, and implementing pagination and infinite scrolling for larger product catalogs.",
    tools: [
      "Express",
      "MongoDB",
      "React",
      "Nodejs",
      "Tailwind",
      "DaisyUI",
      "Zustand",
    ],
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Dog-Gallery",
    description:
      "The Dog Image Gallery is a simple yet visually engaging React application that fetches and displays random dog images using the Dog CEO API. Built with React and the Fetch API, this project demonstrates the use of functional components, useState, and asynchronous data fetching. Users can click a button to retrieve a new image each time, which makes the experience dynamic and interactive. The app features a clean and responsive design using Tailwind CSS, ensuring a smooth experience across all devices. Upon each request, it fetches data from https://dog.ceo/api/breeds/image/random and updates the UI with a new image. This project can be extended further by allowing users to filter images by breed, load multiple images in a grid layout, save favorite dogs to localStorage, or add loading states during API calls. Overall, the Dog Image Gallery serves as a fun and practical introduction to working with external APIs and managing UI state in React.",

    tools: [
      "React",
      "Tailwind",
      "DaisyUI",
      "Dog API",
      "React Router",
      "React Icons",
      "React Hook Form",
    ],

    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "AI Chatbot BotsVerse(in progress)",
    description:
      "A chatbot application built with React, Tailwind CSS, and DaisyUI, featuring a conversational interface powered by OpenAI's GPT-3.5 model. The app allows users to interact with a chatbot through a text-based interface, providing a seamless and intuitive user experience. The chatbot's responses are generated dynamically based on the user's input, making it feel like a real conversation. The application also includes a user authentication system, allowing users to save their chat history and preferences. The chatbot's responses are generated using the OpenAI API, and the app is deployed using Vercel. The application is designed to be responsive and accessible, ensuring a smooth experience across all devices.",
    tools: [
      "React",
      "Bootstrap",
      "Tailwind",
      "DaisyUI",
      "Zustand",
      "React Router",
      "React Icons",
      "React Hook Form",

      "Express",

      "MongoDB",

      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
  },
  {
    id: 4,
    name: "Newsroom Management",
    description: "",
    tools: ["React", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    role: "Full Stack Developer",
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
// },
