import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  vuejs,
  git,
  figma,
  docker,
  threejs,
  foundant,
  pinme,
  gericht,
  piano,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Fitness Coach",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Foundant Technologies",
    icon: foundant,
    iconBg: "#383E56",
    date: "October 10th, 2022 - April 14th, 2023",
    points: [
      "Collaborated with the UI/UX designer to contribute to the Vue.js-based redesign of the company product, resulting in a 20% increase in usability metrics and overall client satisfaction.",
      "Implemented an event-driven microservices environment using AWS, optimizing infrastructure for scalability and efficiency, leading to a 15% decrease in downtime during high-traffic periods.",
      "Leveraged Golang for backend development, seamlessly integrating unit tests to ensure code integrity.",
      "Improved software stability and reduced post-deployment issues by 20% through CI/CD integration.",
    ],
  },
  {
    title: "End-to-End Test Intern",
    company_name: "Foundant Technologies",
    icon: foundant,
    iconBg: "#E6DEDD",
    date: "September 14th, 2021 - October 10th, 2022",
    points: [
      "Developed and maintained 200+ end-to-end automated unit tests using JavaScript, Cypress Test Automation, and BDD practices, ensuring the integrity of new software features and reducing post-release bugs by 20%.",
      "Enhanced user accessibility through the implementation of validation tests using Level Access, ensuring the software's easy accessibility and compliance, resulting in a 10% improvement in overall software accessibility.",
      "Managed and optimized 3 live products, ensuring the applications' seamless behavior from the end user's perspective, leading to an increase in client satisfaction.",
    ],
  },
  {
    title: "Client Services Intern -",
    company_name: "Foundant Technologies",
    icon: foundant,
    iconBg: "#E6DEDD",
    date: "September 16th, 2020 - September 12th, 2021",
    points: [
      "Answered incoming phone calls, chats, and emails while being able to read and address client issues in a positive way.",
      "Updated documentation of client interactions through Salesforce and Zendesk.",
      "Experienced front-end design customizing client sites using HTMLand CSS.",
    ],
  },
  {
    title: "Web Design Intern",
    company_name: "Cafeteros de la Montaña",
    iconBg: "#383E56",
    date: "June 1st, 2020 - June 30th, 2020",
    points: [
      "Implemented self-taught front-end development skills (HTML, CSS, Bootstrap) to completely redesign the company website, enhancing the visual appeal and user-friendliness.",
      "Managed social media accounts, increasing online engagement by 10% during the internship period.",
      "Collaborated with the team to assess and meet employer's needs, implementing a strategic action plan leading to a 100% increase in improved workflow efficiency and enhanced overall customer satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PinMe",
    description:
      "Simple social media app that includes features such as Google Authentication, create, edit, delete and save posts, like, comment on other people's posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pinme,
    source_code_link: "https://github.com/s-swendseid/social-media-app",
    source_code_link: "https://pinmeswendseid.netlify.app/login",
  },
  {
    name: "Modern UI/UX Restaurant",
    description:
      "A fully responsive modern restaurant page built from a Figma design. This single page website features a great landing page with a functional video player, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/s-swendseid/fine-dining-restaurant",
    source_code_link: "https://resturantsiteswendseid.netlify.app/",
  },
  {
    name: "Piano",
    description:
      "One of my first solo projects, a super simple piano built using HTML, CSS, and some simple Javascript. This features audio clips from Interact Archive",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: piano,
    source_code_link: "https://github.com/s-swendseid/playing-piano",
    source_code_link: "https://simplepianoswendseid.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
