import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import SocialLinks from "../SocialLinks";

interface socialLinkModal {
  icon: any;
  link: string;
  color: string;
  text: string;
}

const SideBar = () => {
  const socialLink: socialLinkModal[] = [
    {
      icon: <BsGithub size={32} />,
      link: "https://github.com/muzaffercankaplan",
      color: "bg-[#333]",
      text: "Github",
    },
    {
      icon: <BsLinkedin size={32} />,
      link: "https://www.linkedin.com/in/muzafferckaplan/",
      color: "bg-[#0e76a8]",
      text: "LinkedIn",
    },
    {
      icon: <BsInstagram size={32} />,
      link: "https://github.com/muzaffercankaplan",
      color: "bg-[#cd486b]",
      text: "Instagram",
    },
  ];
  return (
    <div className="absolute top-1/3 flex flex-col gap-5 z-50">
      {socialLink.map((item: socialLinkModal) => (
        <div key={item.text}>
          <SocialLinks item={item} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
