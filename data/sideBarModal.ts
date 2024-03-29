import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { sideBarIconModal } from "../typings";

export const socialLink: sideBarIconModal[] = [
  {
    icon: BsGithub,
    link: "https://github.com/muzaffercankaplan",
    color: "#333",
    text: "Github",
  },
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/muzafferckaplan/",
    color: "#0e76a8",
    text: "LinkedIn",
  },
  // {
  //   icon: BsInstagram,
  //   link: "https://github.com/muzaffercankaplan",
  //   color: "#cd486b",
  //   text: "Instagram",
  // },
  {
    icon: BsMedium,
    link: "https://medium.com/@muzafferckaplan",
    color: "#292929",
    text: "Medium",
  },
];
