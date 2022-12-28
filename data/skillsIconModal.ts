import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript, DiReact } from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skillsIconModal } from "../typings";

export const skillsIcon: skillsIconModal[] = [
  {
    title: "Html",
    percent: 90,
    color: "#FF5733",
    icon: AiOutlineHtml5,
  },
  {
    title: "Css",
    percent: 90,
    color: "#214CE4",
    icon: DiCss3Full,
  },
  {
    title: "Sass",
    percent: 90,
    color: "#CD6799",
    icon: SiSass,
  },
  {
    title: "Javascript",
    percent: 90,
    color: "#F0DB4F",
    icon: DiJavascript,
  },
  {
    title: "Typescript",
    percent: 90,
    color: "#3077C6",
    icon: SiTypescript,
  },
  {
    title: "React",
    percent: 90,
    color: "#60DBFB",
    icon: DiReact,
  },
  {
    title: "Next.js",
    percent: 90,
    color: "#000000",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwindcss",
    percent: 90,
    color: "#37BCF8",
    icon: SiTailwindcss,
  },
  {
    title: "Github",
    percent: 90,
    color: "#000000",
    icon: AiFillGithub,
  },
  {
    title: "Firebase",
    percent: 90,
    color: "#F5840F",
    icon: SiFirebase,
  },
];

export default { skillsIcon };
