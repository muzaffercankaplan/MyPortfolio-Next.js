import Link from "next/link";
import { socialLink } from "../../data/sideBarModal";

const Footer = () => {
  return (
    <div className="flex lg:hidden gap-3 items-center justify-center py-1 mt-3 FooterShadow">
      {socialLink.map((item) => (
        <div className="p-3 " key={item.text}>
          <div className="rounded-md hover:text-text">
            <Link
              target="_blank"
              className="flex hover:scale-125 duration-300"
              href={item.link}
            >
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
