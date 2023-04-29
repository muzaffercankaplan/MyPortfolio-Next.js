import Link from "next/link";
import { sideBarIconModal } from "../typings";

type Props = {
  item: sideBarIconModal;
};

const SocialLinks = ({ item }: Props) => {
  return (
    <div className={`SocialLinksContainer rounded-r-md ${item.color}`}>
      <Link target="_blank" className="flex py-1" href={item.link}>
        <p className="SocialLinksText animate-pulse">{item.text}</p>
        <div className="SocialLinksLogo">{<item.icon size={32} />}</div>
      </Link>
    </div>
  );
};

export default SocialLinks;
