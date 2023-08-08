import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import moweeImg from "@/public/mowee.png";
import eatIsImg from "@/public/eatIs.png";
import decisionerImg from "@/public/decisioner.png";
import queuedImg from "@/public/queued.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Mowee",
    description:
      "My first working expirience. I worked as frontend developer on this startup project for a 3 months. With mowee you can search any movie you want, save it to your account, find info about it, rate it.",
    tags: [
      "React",
      "React Native",
      "Redux",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    imageUrl: moweeImg,
  },
  {
    title: "EatIs",
    description:
      "Project with the same team, I was working at this project for about 7 months. Application, that makes it easier to stick to your meal schedule and look for your calories.",
    tags: [
      "React",
      "React Native",
      "Redux",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    imageUrl: eatIsImg,
  },
  {
    title: "Decisioner",
    description:
      "This is my pet project and course work fo university as well. In this application user can create polls and vote in them.",
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "React Query",
      "Node.js",
      "MongoDB",
    ],
    imageUrl: decisionerImg,
  },
  {
    title: "Queued",
    description:
      "This is pet project on wich I am working now with a team of java-developers. Website for setting queues. Any user can create queues, add managers for it, and stay in queue.",
    tags: [
      "React",
      "Next.js",
      "Zustand",
      "React Query",
      "Java Spring Boot",
      "PostgreSQL",
    ],
    imageUrl: queuedImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Redux",
  "Zustand",
  "React Query",
  "GraphQL",
  "Apollo Client",
  "Express",
  "MongoDB",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Simplicity",
    location: "Kyiv, Ukraine",
    description:
      "I worked as a front-end developer for 9 months developing mobile applications.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - February 2023",
  },
  {
    title: "EVDEV",
    location: "Kyiv, Ukraine",
    description:
      "I worked with animations using Framer Motion for 3 months. From that time my stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "February 2023 - May 2023",
  },
] as const;
