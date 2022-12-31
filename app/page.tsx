"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import profilePic from "../public/Avatar.jpg";
const Page = () => {
  return (
    <div className="text-3xl  md:-mt-10">
      <p className="block md:hidden text-2xl mb-4">Home</p>
      <motion.div
        className="box "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          className="mx-auto mb-4 rounded-full object-contain "
          src={profilePic}
          alt="profile"
          width="200"
          height="200"
        />
      </motion.div>
      <motion.div
        className="box "
        initial={{ x: -700, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.4,
          type: "spring",
        }}
      >
        <button className="group text-base text-text uppercase cursor-pointer border-[1px] border-border leading-3 mb-4">
          <a
            href="MuzafferKaplanResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="MuzafferKaplanResume.pdf"
            className="flex items-center px-4 py-1"
          >
            Resume{" "}
            <AiOutlineArrowRight
              className="group-hover:rotate-90 duration-300 ml-2"
              size={24}
            />
          </a>
        </button>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        Hello! I am
        <span className="text-text">
          <Typewriter
            options={{
              strings: [
                "Muzaffer  C.  Kaplan",
                "A  Frontend  Developer",
                "A React Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "<",
              delay: 100,
              deleteSpeed: 100,
            }}
          />
        </span>
      </motion.p>
    </div>
  );
};

export default Page;
