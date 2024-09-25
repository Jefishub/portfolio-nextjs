import { Job } from "app/type/types";

export const jobs: Job[] = [
  {
    startdt: new Date('2022-11-01'),
    enddt: null,
    employer: "Software Point",
    title: "Software Designer",
    slug: "software-point-software-designer",
    description: `Coding and configurating a Laboratory Information Management System (LIMS) - LabVantage
    for our clients based on their requests. Designing new features and fixing existing bugs.`,
    keywords: ['Java', 'Javascript', 'SQL', 'LIMS']
  },
  {
    startdt: new Date('2021-11-01'),
    enddt: new Date('2022-7-30'),
    employer: "CGI",
    title: "Consultant",
    slug: "cgi-consultant",
    description: `Mobile application development with Flutter/Dart
    Mobile application testing
    Accessibility implementation`,
    keywords: ['Flutter', 'Java', 'Javascript', 'SQL']
  },
  {
    startdt: new Date('2021-04-01'),
    enddt: new Date('2021-10-30'),
    employer: "Inbot Oy",
    title: "Junior Full-Stack Developer",
    slug: "inbot-junior-full-stack-developer",
    description: `Developing a web application for our client where bots collected 
    LinkedIn data and the platform refined it with AI to generate algorithmic insights 
    on influence flows and to discover relevant connection chains. My tasks included 
    working in the frontend building the pages and functional components based on given 
    designs, API calls, and visualization for data. In the backend building API endpoints, 
    algorithms for collecting and processing data, database queries and combining these together.`,
    keywords: ['Typescript', 'Javascript', 'Python', 'SQL', 'Elasticsearch']
  },
  {
    startdt: new Date('2021-01-01'),
    enddt: new Date('2021-03-30'),
    employer: "Inbot Oy",
    title: "Full-Stack Developer Intern",
    slug: "inbot-full-stack-developer-intern",
    description: `Working and learning web development tools as intern`,
    keywords: ['Typescript', 'Javascript', 'Python', 'SQL', 'Elasticsearch']
  }
];