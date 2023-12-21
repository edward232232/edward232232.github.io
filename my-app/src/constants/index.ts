import {
  frontend,
  backend,
  cloud,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  troutman,
  kinaxis,
  northplains,
  mtu,
  autotrader,
  microsoft,
  az900,
  ai900,
  aws,
  mcp,
  mcpd,
  aisearch,
  servicebus,
  eventhub,
  postman,
  kusto,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development Project",
    icon: frontend,
    url: "https://github.com/edward232232/dev-portfolio",
    color: "blue-text-gradient",
  },
  {
    title: "Backend Development Project",
    icon: backend,
  },
  {
    title: "Cloud /Devops Project",
    icon: cloud,
  },
  {
    title: "AI Project",
    icon: prototyping,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    title: "Developer Azure Service Support Enginneer",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#333333",
    date: "2022 - Present",
  },
  {
    title: "Service Operations Analyst",
    company_name: "Kinaxis",
    icon: kinaxis,
    iconBg: "#333333",
    date: "2020 - 2022",
  },
  {
    title: "Tier 2-3 Application / AWS Cloud Administrator",
    company_name: "Northplains",
    icon: northplains,
    iconBg: "#333333",
    date: "2011 - 2019",
  },
  {
    title: "Application Analyst Lead",
    company_name: "Troutman Sanders",
    icon: troutman,
    iconBg: "#333333",
    date: "2008 - 2010",
  },

  {
    title: "Tier 1-2 Support Analyst / IT Trainer",
    company_name: "AutoTrader YellowPage",
    icon: autotrader,
    iconBg: "#333333",
    date: "2005 - 2007",
  },
];

const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

const stackList = {
  frontend: [
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      name: "ReactJS",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      name: "Typescript",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
      name: "TailwindCSS",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
      name: "WordPress",
    },
  ],
  backend: [
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      name: "NodeJS",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      name: "Python",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      name: "Flask",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      name: "C sharp",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      name: "Java",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      name: ".NET",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      name: "MySQL",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
      name: "MS SQL",
    },
    {
      img: kusto,
      name: "Kusto",
    },
  ],
  infrastructure: [
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      name: "AWS",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      name: "Azure",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      name: "VS Code",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      name: "GitHub",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      name: "Docker",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      name: "Linux",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg",
      name: "Jupyter",
    },
    {
      img: servicebus,
      name: "Azure Service Bus",
    },
    {
      img: eventhub,
      name: "Azure Event Hubs",
    },
    {
      img: aisearch,
      name: "Azure AI Search",
    },

    {
      img: postman,
      name: "Postman REST API",
    },
  ],
  certs: [
    {
      img: ai900,
      name: "Microsoft Azure AI Fundamentals 2022",
    },
    {
      img: az900,
      name: "Microsoft Azure Fundamentals 2022",
    },
    {
      img: aws,
      name: "AWS Certified Cloud Practitioner 2019",
    },
    {
      img: mcp,
      name: " Microsoft Certified Professional 2013",
    },
    {
      img: mcpd,
      name: "Microsoft Certified Professional Developer 2012",
    },
  ],
};
export { services, technologies, experiences, projects, stackList };
