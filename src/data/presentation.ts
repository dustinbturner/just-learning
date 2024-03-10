type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "dustin@dustinbturner.com",
  title: "Hi, I’m Dustin",
  profile: "/profile.webp",
  description:
    "I'm currently learning React, NEXT, and Astro with the goal of being a software engineer by the end of 2024. ",
  socials: [
    {
      label: "Twitter",
      link: "https://www.twitter.com/dustinbturner",
    },
    {
      label: "Github",
      link: "https://github.com/dustinbturner",
    },
    {
      label: "Email",
      link: "mailto:dustin@dustinbturner.com",
    },
  ],
};

export default presentation;
