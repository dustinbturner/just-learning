export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Placeholder App",
    techs: ["Python (NextJS)", "react-query", "zod"],
    link: "/",
  },
  {
    title: "Placeholder 2",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    // isComingSoon: true,
  },
];

export default projects;
