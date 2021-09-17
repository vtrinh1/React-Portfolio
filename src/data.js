import { SiAndroidstudio, SiBootstrap, SiCplusplus, SiCss3, SiGit, SiHtml5, SiJava, SiJavascript, SiMongodb, SiNextDotJs, SiNodeDotJs, SiPhp, SiR, SiReact, SiSass, SiTypescript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import project1 from './images/project1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'

export const technologyItems = [
  {
    id: 1,
    icon: <SiReact />,
    title: "React.js",
    color: "7cc5d9",
  },
  {
    id: 2,
    icon: <SiNextDotJs />,
    title: "Next.js",
    color: "101522",
  },
  {
    id: 3,
    icon: <SiHtml5 />,
    title: "HTML",
    color: "f06529 ",
  },
  {
    id: 4,
    icon: <SiCss3 />,
    title: "CSS",
    color: "2965f1",
  },
  {
    id: 5,
    icon: <SiNodeDotJs />,
    title: "Node.js",
    color: "68a063",
  },
  {
    id: 6,
    icon: <SiGit />,
    title: "Git",
    color: "f34f29",
  },
  {
    id: 7,
    icon: <SiBootstrap />,
    title: "Bootstrap",
    color: "7711f7",
  },
  {
    id: 8,
    icon: <SiSass />,
    title: "Sass",
    color: "cc6699",
  },
  {
    id: 9,
    icon: <SiAndroidstudio />,
    title: "Android Studio",
    color: "87ba52",
  },
  {
    id: 10,
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "4aa74a",
  },
];

export const languageItems = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: "JavaScript",
    color: "f5de19",
  },
  {
    id: 2,
    icon: <SiJava />,
    title: "Java",
    color: "e66f01",
  },
  {
    id: 3,
    icon: <SiCplusplus />,
    title: "C++",
    color: "00599c",
  },
  {
    id: 4,
    icon: <SiR />,
    title: "R",
    color: "2066b9",
  },
  {
    id: 5,
    icon: <SiPhp />,
    title: "PHP",
    color: "8993c1",
  },
  {
    id: 6,
    icon: <GrMysql />,
    title: "SQL",
    color: "e66f01",
  },
  {
    id: 7,
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "2d79c7",
  },
];

export const projectItems = [
  {
    id: 1,
    img: project1,
    title: "E-Commerce Website",
    subtitle: "HTML, CSS, Javascript, React.js",
    info: "An eCommerce website designed and built from scratch. It makes use of functional reusable react components, react hooks and styled-components. The website has inbuilt category, product, login, register and shopping cart pages.",
    github: "https://github.com/vtrinh1/Online-Store-Website",
    website: "https://github.com/vtrinh1/Online-Store-Website"
  },
  {
    id: 2,
    img: project2,
    title: "Travel Companion",
    subtitle: "HTML, CSS, Javascript, React.js, Material-ui",
    info: "A travel website that fetches API data. Google Maps API & Google Places API, based on the location, data filtering, hooks, and refs Creating a User Interface using Material UI.",
    github: "https://github.com/vtrinh1/Airbnb-Clone",
    website: "https://github.com/vtrinh1/Airbnb-Clone"
  },
  {
    id: 3,
    img: project3,
    title: "Airbnb Clone",
    subtitle: "HTML, CSS, Javascript, Next.js, Tailwind CSS",
    info: "An Airbnb website clone built with Next.js and Tailwind CSS. It features a home and search results page with server side rendering implemented into it. lorem lroem lorem lorem api fetches data ",
    github: "https://github.com/vtrinh1/Airbnb-Clone",
    website: "https://github.com/vtrinh1/Airbnb-Clone"
  },
]