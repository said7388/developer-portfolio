# Developer Portfolio

### Want to create a professional portfolio but cannot figure out how to? Use Developer Portfolio and create your own personalised portfolio today! our easily customisable, user friendly website is designed to cater to developers and freelancers a like.

---

# Demo :movie_camera:

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yg7pbgnih9nziulfu3u9.gif)

## View live demo [here](https://abusaid.netlify.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Folder Structure](#folder-structure-open_file_folder)
- [Usage](#usage-joystick)
- [Hosting](#hosting-globe_with_meridians)
- [SEO](#seo-spider)
- [Packages Used](#packages-used-package)
- [APIs Used](#apis-used-world_map)
- [Fonts and Images](#fonts-and-images-performing_arts)
- [Upcoming Features](#upcoming-features-construction)
- [Contributors](#contributors-man_technologistwoman_technologist)

---

# Sections :bookmark:

- HOME
- ABOUT
- RESUME
  - EDUCATION
  - SKILLS
  - EXPERIENCE
  - CERTIFICATES
  - PROJECTS
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

## Also check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you are new to react.

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

<br />

# Getting Started :dart:

### Fork and Clone the repo

#### To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Clone with TypeScript

```
git clone -b typescript-version https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```
npm install
```

#### or

```
yarn install
```

### Start the development server

```
npm start
```

#### or

```
yarn start
```

---

# Folder Structure :open_file_folder:

```bash
╭ public
│   ├── _redirects
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   │   └── Bestermind
│   │   │       └── BestermindRegular.ttf
│   │   ├── lottie
│   │   │   └── coding.json
│   │   │   └── development.json
│   │   │   └── education.json
│   │   └── svg
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       └── Social
│   ├── components
│   │   ├── About
│   │   │   ├── About.css
│   │   │   └── About.js
│   │   ├── BackToTop
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.js
│   │   ├── Blog
│   │   │   ├── Blog.css
│   │   │   ├── Blog.js
│   │   │   └── SingleBlog
│   │   │       ├── SingleBlog.css
│   │   │       └── SingleBlog.js
│   │   ├── Contacts
│   │   │   ├── Contacts.css
│   │   │   └── Contacts.js
│   │   ├── Education
│   │   │   ├── Education.css
│   │   │   ├── Education.js
│   │   │   └── EducationCard.js
│   │   ├── Experience
│   │   │   ├── Experience.css
│   │   │   ├── Experience.js
│   │   │   └── ExperienceCard.js
│   │   ├── Landing
│   │   │   ├── Landing.css
│   │   │   └── Landing.js
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── Projects
│   │   │   ├── Projects.css
│   │   │   ├── Projects.js
│   │   │   └── SingleProject
│   │   │       ├── SingleProject.css
│   │   │       └── SingleProject.js
│   │   ├── Skills
│   │   │   ├── Skills.css
│   │   │   └── Skills.js
│   │   ├── Animation
│   │   └── index.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── aboutData.js
│   │   ├── blogData.js
│   │   ├── contactsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   ├── headerData.js
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   ├── socialsData.js
│   │   └── themeData.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Blog
│   │   │   ├── BlogPage.css
│   │   │   └── Index.js
│   │   ├── Home
│   │   │   └── Index.js
│   │   ├── Project
│   │   │   ├── ProjectPage.css
│   │   │   └── Index.js
│   │   └── index.js
│   ├── reportWebVitals.js
│   ├── theme
│   │   ├── images.js
│   │   └── theme.js
│   └── utils
│       └── skillsImage.js
├── .dockerignore
├── .env.example
├── docker-compose.yml
├── Dpckerfile
├── LICENSE
├── README.md
├── package.json
└── yarn.lock
```

---

# Usage :joystick:

### Customize your details for each component in `src/data` [folder](https://github.com/hhhrrrttt222111/developer-portfolio/tree/master/src/data).

Eg:

```javascript
export const headerData = {
  name: "-- YOUR NAME --",
  title: "-- YOUR TITLE --",
  desciption: "-- DESCRIPTION --",
  image: "-- IMAGE --",
  resumePdf: "",
};

// You can also import image and PDF from assets as shown below

import resume from "../assets/pdf/resume.pdf";
import profileImg from "../assets/png/profileImg";

export const headerData = {
  name: "-- YOUR NAME --",
  title: "-- YOUR TITLE --",
  desciption: "-- DESCRIPTION --",
  image: profileImg,
  resumePdf: resume,
};
```

---

#### Data for each component is divided into respective files.

> #### Choose your favourite font from [`src/App.css`](https://github.com/said7388/developer-portfolio/blob/main/src/App.css)

> #### About You - [`src/data/aboutData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/aboutData.js)

> #### Education details - [`src/data/educationData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/educationData.js)

> #### Enter your Projects - [`src/data/projectsData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/projectsData.js)

> #### Add your Skills - [`src/data/skillsData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/skillsData.js)

> #### Experience - [`src/data/experienceData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/experienceData.js)

> #### Your Blogs and Articles - [`src/data/blogData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/blogData.js)

> #### Contact Details - [`src/data/contactsData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/contactsData.js)

> #### Social Media Profiles - [`src/data/contactsData.js`](https://github.com/said7388/developer-portfolio/blob/main/src/data/socialsData.js)

```javascript
// EXAMPLE
export const educationData = [
  {
    id: 1,
    institution: "-- INSTITUTION NAME --",
    course: "-- COURSE NAME --",
    startYear: "2017",
    endYear: "2019",
  },
  //
];
```

---

### Instructions and format for each section can be found inside the data files.

<br />

# Hosting :globe_with_meridians:

## Netlify

|                Site                 |                                                     Docs                                                     |                          Demo                          |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Netlify](https://www.netlify.com/) | [3 ways to deploy React apps to Netlify](https://blog.logrocket.com/3-ways-to-deploy-react-apps-to-netlify/) | [Youtube](https://www.youtube.com/watch?v=sGBdp9r2GSg) |

## Firebase

|                         Site                         |                                                           Docs                                                           |                          Demo                          |
| :--------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Firebase](https://firebase.google.com/docs/hosting) | [Deploy a React App with Firebase](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) | [Youtube](https://www.youtube.com/watch?v=1wZw7RvXPRU) |

## Heroku

|               Site                |                                                                    Docs                                                                     |                          Demo                          |
| :-------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Heroku](https://www.heroku.com/) | [Deploying React App on Heroku from GitHub](https://medium.com/make-it-heady/deploying-create-react-app-on-heroku-from-github-49447561f670) | [Youtube](https://www.youtube.com/watch?v=dn4mmfbletg) |

## Github Pages

|                   Site                    |                                                     Docs                                                      |                  Demo                   |
| :---------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------: |
| [GitHub Pages](https://pages.github.com/) | [Deploying React App on GitHub Pages from GitHub](https://create-react-app.dev/docs/deployment/#github-pages) | [Youtube](https://youtu.be/F8s4Ng-re0E) |

---

# SEO :spider:

### Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

### Add the below code snippet to `public/index.html` with your site info. This step is not mandatory

<br />

```html
<meta name="description" content="--- SITE DESCRIPTION ---" />
<meta property="og:image" content="--- YOUR IMAGE ---" />
<meta property="og:site_name" content="--- YOUR NAME ---" />
<meta property="og:title" content="--- YOUR NAME ---" />
<meta property="og:url" content="--- YOUR SITE URL ---" />
<meta property="og:type" content="website" />
<meta property="og:description" content="--- SITE DESCRIPTION ---" />
<meta property="og:locale" content="---  ---" />
<meta property="og:image" content="--- YOUR IMAGE ---" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta itemprop="name" content="--- YOUR NAME ---" />
<meta itemprop="url" content="--- YOUR SITE URL ---" />
<meta itemprop="description" content="--- SITE DESCRIPTION ---" />
<meta itemprop="thumbnailUrl" content="" />
<link rel="image_src" href="--- YOUR IMAGE ---" />
<meta itemprop="image" content="--- YOUR IMAGE ---" />

<meta name="twitter:site" content="@--- YOUR TWITTER USERNAME ---" />
<meta name="twitter:creator" content="@--- YOUR TWITTER USERNAME ---" />
<meta name="twitter:url" content="--- YOUR SITE URL ---" />
<meta name="twitter:title" content="--- YOUR NAME ---" />
<meta name="twitter:description" content="--- SITE DESCRIPTION ---" />
<meta name="twitter:image" content="--- YOUR IMAGE ---" />
<meta name="twitter:card" content="summary" />
```

---

# Packages Used :package:

|  Client Side Packages  |
| :--------------------: |
|   @material-ui/core    |
|   @material-ui/icons   |
|    @emailjs/browser    |
|      react-lottie      |
|   react-fast-marquee   |
|      react-helmet      |
|      react-icons       |
|      react-reveal      |
|    react-router-dom    |
| react-router-hash-link |
|      react-slick       |
|     slick-carousel     |
|       validator        |

---

# Fonts and Images :performing_arts:

## Icons

- [Material Icons](https://material-ui.com/components/material-icons/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Fonts

- [Poppins](https://fonts.google.com/specimen/Poppins)
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Raleway](https://fonts.google.com/specimen/Raleway)
- [Big Shoulders Text](https://fonts.google.com/specimen/Big+Shoulders+Text)
- [Bestermind](https://www.dafont.com/bestermind.font)
- [Roboto](https://fonts.google.com/specimen/Roboto)

---

<!--
# Contributors :man_technologist::woman_technologist:

<div>
    <table>
        <tr>
            <td align="center"><a href="https://github.com/said7388"><img src="https://i.ibb.co/ZmdNH6x/abu-said.jpg" width="135px;" height="135px;" alt=""/><br /><b>Abu Said</b></a></td>
            <td align="center"><a href="https://github.com/hhhrrrttt222111"><img src="https://hhhrrrttt222111.web.app/static/media/dp.5f7c380f.jpeg" width="135px;" height="135px;" alt=""/><br /><b>Hemanth R</b></a></td>
        </tr>
    </table>
</div> -->

<!--
## Setting Up Contacts form :envelope_with_arrow:

> ### Follow these [instructions](https://github.com/hhhrrrttt222111/developer-portfolio/wiki/Contacts) to connect contacts form with Google Sheet






# Upcoming Features :construction:

- Light/Dark theme toggle
- More illustrations to choose from
- Achievements and Awards section
- More fonts to choose from

<br /><br />

## Raise an issue for...

- Found a bug
- New theme
- Can't find required skill in Skills section
- Add new social media profile
- Add new service
- Add another section


<br /> -->
