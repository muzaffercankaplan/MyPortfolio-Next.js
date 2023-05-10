import Link from "next/link";
import { socialLink } from "../../data/sideBarModal";

const Footer = () => {
  return (
    <div className="flex lg:hidden gap-3 items-center justify-center my-5">
      {socialLink.map((item) => (
        <div className="p-3" key={item.text}>
          <div className="rounded-md hover:text-text">
            <Link target="_blank" className="flex" href={item.link}>
              {/* <p className="SocialLinksText animate-pulse">{item.text}</p> */}
              <div className="">{<item.icon size={32} />}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
