import {
    frontend,
    backend,
    ux,
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
    space,
    coverhunt,
    dcc,
    kelhel,
    microsoft,
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Frontend Development Project',
      icon: frontend,
      url: 'https://github.com/edward232232/dev-portfolio',
      color: 'blue-text-gradient',
    },
    {
      title: 'Backend Development Project',
      icon: backend,
    },
    {
      title: 'Cloud /Devops Project',
      icon: cloud,
    },
    {
      title: 'AI Project',
      icon: prototyping,
    },
  ];
  
  const technologies = [
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'Rails',
      icon: rubyrails,
    },
    {
      name: 'graphql',
      icon: graphql,
    },
    {
      name: 'postgresql',
      icon: postgresql,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'docker',
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: 'Developer Azure Service Support Enginneer',
      company_name: 'Microsoft',
      icon: microsoft,
      iconBg: '#333333',
      date: 'Feb 2021 - Feb 2022',
    },
    {
      title: 'Mentor (Volunteer)',
      company_name: 'Microsoft',
      icon: microsoft,
      iconBg: '#333333',
      date: 'Feb 2022 - Present',
    },
    {
      title: 'Junior Software Engineer',
      company_name: 'Kelhel',
      icon: kelhel,
      iconBg: '#333333',
      date: 'May 2022 - Oct 2022',
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Diversity Cyber Council',
      icon: dcc,
      iconBg: '#333333',
      date: 'Sep 2022 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'KomiKult',
      description: 'A comic characters list app that displays Marvel characters.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: komikult,
      repo: 'https://github.com/shaqdeff/KomiKult',
      demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
      id: 'project-2',
      name: 'Leaderboard',
      description:
        'A leaderboard list app that displays scores submitted by different players.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: leaderboard,
      repo: 'https://github.com/shaqdeff/Leaderboard',
      demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
      id: 'project-3',
      name: 'Math Magicians',
      description: 'This is a single-page calculator app built with React',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: math,
      repo: 'https://github.com/shaqdeff/Math-Magicians',
      demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
      id: 'project-4',
      name: 'Movie Metro',
      description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: movie,
      repo: 'https://github.com/shaqdeff/Movie-Metro',
      demo: 'https://movie-metro.netlify.app/',
    },
    {
      id: 'project-5',
      name: 'Nyeusi Fest Site',
      description:
        'This is a demo concert website for a music festival called Nyeusi.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: nyeusi,
      repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
      demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
  ];
  
  export { services, technologies, experiences, projects };
  