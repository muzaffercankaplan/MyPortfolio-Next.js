"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { projectsModal } from "../../../data/projectsModal";
import { projectModal } from "../../../typings";

const Projects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("id");
  const currentProject = useMemo<projectModal | undefined>(() => {
    return page
      ? projectsModal.find((item) => item.id === Number(page))
      : undefined;
  }, [page]);

  useEffect(() => {
    !currentProject ? router.push("error") : "";
  }, []);

  return (
    <>
      <div
        key={currentProject?.id}
        className={currentProject?.framework === "React" ? "relative" : ""}
      >
        <div
          className={`relative ${
            currentProject?.framework === "React"
              ? "w-screen h-[35vh] md:h-[50vh]"
              : "h-screen w-[50vh]"
          } `}
        >
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
              <MdArrowForwardIos
                className="rotate-180 group-hover:rotate-[540deg] duration-500 -ml-2"
                size={16}
              />
            </Link>
          </div>
          {currentProject?.framework === "React" && (
            <div className="absolute top-0 left-0 w-full h-[35vh] md:h-[50vh] bg-primary opacity-50 z-10" />
          )}
          <Image
            className="absolute z-1 items-end"
            layout="fill"
            src={currentProject?.image || ""}
            alt="/"
            loading="lazy"
          />
          <div className="absolute top-[70%] mx-20 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 text-left text-2xl">
              {" "}
              {currentProject?.title}{" "}
            </h2>
            <div className="md:flex gap-2 mb-2 md:mb-0">
              {currentProject?.dependicies.map((depen: string) => (
                <h3 key={depen} className="flex items-center gap-1 capitalize">
                  <VscDebugBreakpointLog color="lightblue" size={12} />
                  {depen}
                </h3>
              ))}
            </div>
          </div>
        </div>
        <div className="text-left mx-20 mt-10 mb-5 md:mb-10">
          <h3 className="mb-4 text-2xl">Project</h3>
          <p className=" leading-7 "> {currentProject?.description} </p>
        </div>
        <div className="space-x-5 mb-10">
          {currentProject?.framework === "React" && (
            <Link
              target="_blank"
              href={currentProject?.demoUrl || ""}
              className="border-border border p-2 tracking-widest font-serif rounded-md hover:bg-border"
            >
              Demo
            </Link>
          )}
          <Link
            target="_blank"
            href={currentProject?.githubUrl || ""}
            className="border-border border p-2 tracking-widest font-serif rounded-md hover:bg-border"
          >
            Github
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
