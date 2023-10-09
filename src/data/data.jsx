import { nanoid } from "nanoid";
import axoltol from '../assets/axolotl_beats.jpg'
import reinforce from '../assets/reinforce.jpg'
import denogres from '../assets/denogres.png'
import {
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaAws,
} from "react-icons/fa";


export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#about", text: "about" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Masterfully versed in HTML & CSS, designing intuitive and visually compelling websites that prioritize user experience.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript, adept at creating interactive web solutions prioritizing user-centric design and flawless functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in React, with a track record of designing and implementing seamless front-end experiences rooted in a component-focused framework.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proven proficiency in Node.js, adept at developing robust and efficient server-side applications, leveraging its asynchronous capabilities for high-concurrency solutions.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Deep-seated knowledge in Python, specializing in crafting reliable backend infrastructures and dynamic web applications with a keen eye for performance and scalability.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: "Broad experience with AWS, consistently harnessing its suite of services to deliver secure, cost-effective, and innovative cloud-based solutions tailored to business needs.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: axoltol,
    url: "https://github.com/cat-snake-52/axolotl-beats",
    github: "https://github.com/cat-snake-52/axolotl-beats",
    title: "Axolotl-Beats 2.0",
    tech: "React.js, Node.js, Express, Spotify API, Webpack",
    text: "Axolotl Beats allows users to interact with the Spotify API to create extremely customized 'dynamic' playlists.",
  },
  {
    id: nanoid(),
    img: reinforce,
    url: "https://github.com/TaskCorp/ReinForce/",
    github: "https://github.com/TaskCorp/ReinForce",
    title: "ReInForce",
    tech: "React.js, Redux, Node.js, TypeScript, PostGreSQL, Webpack",
    text: "ReinForce is a task monitor that encourages skill reinforcement.",
  },
  {
    id: nanoid(),
    img: denogres,
    url: "https://github.com/open-source-labs/DenoGres",
    github: "https://github.com/open-source-labs/DenoGres",
    title: "DenoGres",
    tech: "Fresh.js, Deno, TypeScript, PostGreSQL, Electron",
    text: "PostGreSQL + Deno. An open source ORM for the Deno Framework. 200+ stars on GitHub!",
  },
];
