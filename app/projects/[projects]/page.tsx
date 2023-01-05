"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { projectsModal } from "../../../data/projectsModal";

const Projects = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("id");
  return (
    <>
      {projectsModal
        .filter((item: any) => item.id == page)
        .map((item) => (
          <div key={item.id} className="relative">
            <div className="w-screen h-[50vh] relative">
              <div className="group tracking-[.5rem] text-[#66FCF1] uppercase cursor-pointer border border-[#45A29E] absolute z-50 left-10 top-10">
                <Link
                  href="/projects"
                  className="px-4 py-1 flex items-center gap-1"
                >
                  <MdArrowForwardIos
                    className="group-hover:rotate-180 duration-500"
                    size={16}
                  />
                  Back
                  <MdArrowForwardIos className="rotate-180 -ml-2" size={16} />
                </Link>
              </div>
              <div className="absolute top-0 left-0 w-full h-[50vh] bg-primary opacity-50 z-10" />
              <Image
                className="absolute z-1"
                layout="fill"
                objectFit="cover"
                src="/Avatar.jpg"
                alt="/"
              />
              <div className="absolute top-[70%] ml-4 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                <h2 className="py-2 text-left text-2xl"> {item.title} </h2>
                <div className="md:flex gap-2">
                  {item.dependicies.map((depen: string) => (
                    <h3 key={depen} className="flex items-center gap-1">
                      <VscDebugBreakpointLog color="lightblue" size={12} />
                      {depen}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-left mx-20 mt-10 mb-10">
              <h3 className="mb-4 text-2xl">Project</h3>
              <p className=" leading-7 "> {item.description} </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Projects;
