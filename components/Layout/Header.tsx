"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navbarLinkModal {
  title: string;
  href: string;
}

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);

  const navbarLink: navbarLinkModal[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/",
    },
  ];
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <div className="NavbarLogoText">Muzaffer C. Kaplan</div>
      <div className="flex gap-6">
        {navbarLink.map((item: navbarLinkModal) => (
          <div
            className={`${
              pathName === item.href
                ? "text-primary"
                : "hover:text-text duration-500"
            }`}
            key={item.title}
          >
            <Link href={item.href} className="text-xl cursor-pointer">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
