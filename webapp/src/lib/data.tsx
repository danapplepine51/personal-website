import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "/corpcomment.png";
import sharletImg from "/sharlet.png";
import humanposeImg from "/humanposeImg.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "B.S. Computer Science",
    location: "Minneapolis, MN",
    description:
      "I graduated after 4 years of studying. I acheived Bachelor's degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Research Engineer(Intern)",
    location: "Seoul, KR",
    description:
      "I worked as a research engineer intern. I did research on real-time human joints tracking using deep learning.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "M.S. Computer Science",
    location: "Minneapolis, MN",
    description:
      "I graduted after 2.5 years of studtying computer science again. I acheived Master's degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Software QA Engineer",
    location: "Berkeley Heights, NJ",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Current",
  },
  {
    title: "Solutions Architect",
    location: "Ridgefield Park, NJ",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Current",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Stock Data Pipeline",
  //   description:
  //     "Pending",
  //   tags: ["React"],
  //   imageUrl: corpcommentImg,
  // },
  {
    title: "Sharlet",
    description:
      "",
    tags: ["React", "Typescript", "Flask", "Python", "Postgresql", "RestAPI"],
    imageUrl: sharletImg,
  },
  {
    title: "Fast Human Pose Estimation",
    description:
      "",
    tags: ["Pytorch", "Python", "C++"],
    imageUrl: humanposeImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Git",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Spring Boot",
  "Kafka",
  "AWS",
  "Docker"
] as const;