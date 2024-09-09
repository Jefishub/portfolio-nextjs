import { Job } from "app/type/types";

export const jobs: Job[] = [
  {
    startdt: new Date('2020-05-01'),
    enddt: new Date('2022-03-15'),
    employer: "Tech Innovations LLC",
    title: "Frontend Developer",
    slug: "frontend-developer-tech-innovations",
    description: "Developed responsive and high-performance web applications using React and Next.js. Worked closely with designers to create visually appealing UIs, and implemented reusable components with Tailwind CSS."
  },
  {
    startdt: new Date('2018-09-01'),
    enddt: new Date('2020-04-30'),
    employer: "Creative Solutions Inc.",
    title: "Junior React Developer",
    slug: "junior-react-developer-creative-solutions",
    description: "Collaborated with the development team to build interactive user interfaces using React. Assisted in the migration of legacy code to modern JavaScript frameworks and participated in code reviews and testing."
  },
  {
    startdt: new Date('2016-06-15'),
    enddt: new Date('2018-08-31'),
    employer: "NextGen Technologies",
    title: "Software Engineer Intern",
    slug: "software-engineer-intern-nextgen",
    description: "Worked as a part of the software development team, gaining hands-on experience with web development technologies. Contributed to front-end development and bug fixing under the supervision of senior engineers."
  },
  {
    startdt: new Date('2022-04-01'),
    enddt: new Date('2024-06-30'),
    employer: "Global Tech Ventures",
    title: "Lead React Engineer",
    slug: "lead-react-engineer-global-tech",
    description: "Led the frontend team in the development of scalable React applications. Introduced Next.js for server-side rendering, improving app performance. Mentored junior developers and conducted code reviews to maintain high-quality standards."
  },
  {
    startdt: new Date('2024-07-01'),
    enddt: new Date('2026-09-30'),
    employer: "Innovative Devs",
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer-innovative-devs",
    description: "Designed and implemented full-stack web applications using React, Node.js, and Next.js. Focused on building scalable backend services and optimized frontend performance for maximum efficiency."
  }
];