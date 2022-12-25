interface socialLinkModal {
  icon: any;
  link: string;
  color: string;
  text: string;
}

type Props = {
  item: socialLinkModal;
};

// 333
// 0e76a8
// cd486b
const SocialLinks = ({ item }: Props) => {
  return (
    <div className={`SocialLinksContainer rounded-r-md bg-[${item.color}]`}>
      <a target="_blank" className="flex py-1" href={item.link}>
        <p className="SocialLinksText animate-pulse">{item.text}</p>
        <div className="SocialLinksLogo">{item.icon}</div>
      </a>
    </div>
  );
};

export default SocialLinks;
