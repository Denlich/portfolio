import React from "react";
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
