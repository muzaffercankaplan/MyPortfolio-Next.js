"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/Avatar.jpg";

const About = () => {
  return (
    <header className="md:-mt-10 mx-5">
      <p className="block md:hidden text-2xl mb-4">About</p>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
        }}
      >
        <Image
          className="AboutImage w-48 h-48 mb-4 mx-auto float-none rounded-xl md:w-96 md:h-96 md:float-left md:rounded-full md:mr-[70px]"
          src={profilePic}
          alt="profile"
          priority={true}
        />
      </motion.div>
      <div className="text-start tracking-wider ml-4 sm:mr-4 text-sm leading-6 md:text-lg md:leading-8 ">
        <p className="mb-1">
          As a frontend developer, I am responsible for building and shaping the
          user experience of websites and web applications. I do this by using a
          combination of HTML, CSS, and JavaScript to create the visual and
          interactive elements of these applications.
        </p>

        <p className="mb-1">
          One of my key strengths is my ability to translate design mockups into
          code. I have a strong understanding of how to structure and style HTML
          elements, as well as how to add interactivity with JavaScript. I also
          have experience making my code responsive, so that it looks and works
          well on a variety of devices.
        </p>

        <p className="mb-1">
          I am always looking to stay up-to-date with the latest technologies
          and best practices in the field of frontend development. In my free
          time, I enjoy learning about new frameworks and libraries, such as
          Next.js, Tailwindcss, Typescript.
        </p>

        <p>
          {`Thank you for taking the time to read my introduction. If you have any
          questions or would like to discuss my experience further, please don't
          hesitate to reach out.`}
          {/* <Link href="/contacts" className="">
            Contact
          </Link> */}
        </p>
      </div>
    </header>
  );
};

export default About;
