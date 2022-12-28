import { skillsIcon } from "../../data/skillsIconModal";
import { skillsIconModal } from "../../typings";

const Skills = () => {
  return (
    <div className="text-center flex flex-col">
      <p className="block md:hidden text-2xl mb-4">Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-10 gap-x-20 self-center lg:grid-cols-5 md:ml-36 lg:ml-20 flex-wrap">
        {skillsIcon.map((item: skillsIconModal) => (
          <div
            key={item.title}
            className="group flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-border cursor-pointer"
          >
            {<item.icon size={60} color={item.color} />}
            <div className="text-xl absolute hidden group-hover:flex w-24 h-24 lg:w-32 lg:h-32  flex-col justify-center items-center rounded-full bg-thirty">
              <p>{item.percent}%</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
