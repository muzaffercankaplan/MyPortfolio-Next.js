import { socialLink } from "../../data/sideBarModal";
import SocialLinks from "../SocialLinks";

const SideBar = () => {
  return (
    <div className="absolute top-1/3 flex flex-col gap-5 z-50">
      {socialLink.map((item) => (
        <div key={item.text}>
          <SocialLinks item={item} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
