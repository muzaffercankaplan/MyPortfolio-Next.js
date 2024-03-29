"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { navbarLinkModal } from "../../typings";
type Props = {
  isOpen: boolean;
  setIsOpen: any;
};
const Header: FC<Props> = ({ isOpen, setIsOpen }) => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const pathName = usePathname();

  const navbarLink: navbarLinkModal[] = [
    {
      title: "Home",
      href: "",
      active: "/",
    },
    {
      title: "About",
      href: "about",
      active: "/about",
    },
    {
      title: "Projects",
      href: "projects",
      active: "/projects",
    },
    {
      title: "Skills",
      href: "skills",
      active: "/skills",
    },
    {
      title: "Contact",
      href: "contacts",
      active: "/contacts",
    },
  ];

  return (
    <div className="shadow-2xl flex justify-between px-10 py-5 items-center">
      <motion.div
        initial={{ x: -500, opacity: 1, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="NavbarLogoText"
      >
        Muzaffer C. Kaplan
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="hidden md:flex gap-6"
      >
        {navbarLink.map((item) => {
          const isActive = pathName === item.active;
          return (
            <Link
              className={`relative text-lg ${
                isActive ? "text-primary" : "NavbarLinkText text-thirty"
              }`}
              // href={item.href}
              key={item.title}
              href={item.active}
            >
              {item.title}
            </Link>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.3,
          type: "spring",
        }}
        className="block md:hidden z-50"
      >
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu relative"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex text-xl items-center gap-1"
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            className="absolute -right-8 drop-shadow-2xl bg-border p-8 z-50"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {navbarLink.map((item) => {
              const isActive = pathName === item.active;
              return (
                <Link
                  className={`relative text-lg ${
                    isActive ? "text-primary" : "NavbarLinkText text-thirty"
                  }`}
                  key={item.title}
                  href={item.active}
                >
                  <motion.li variants={itemVariants}>{item.title} </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Header;
