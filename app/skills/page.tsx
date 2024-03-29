"use client";
import { motion } from "framer-motion";
import { skillsIcon } from "../../data/skillsIconModal";
import { skillsIconModal } from "../../typings";

const Skills = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="text-center flex flex-col"
    >
      <p className="block md:hidden text-2xl mb-4">Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-10 gap-x-20 self-center lg:grid-cols-5 mx-5 lg:ml-20 flex-wrap">
        {skillsIcon.map((item: skillsIconModal) => (
          <div
            key={item.title}
            className="group flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border border-border cursor-pointer"
          >
            {<item.icon size={60} color={item.color} />}
            <div className="text-xl absolute hidden group-hover:flex w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32  flex-col justify-center items-center rounded-full bg-thirty">
              {/* <p>{item.percent}%</p> */}
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
