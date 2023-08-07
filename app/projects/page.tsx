"use client";

import Image from "next/image";
import Link from "next/link";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { projectsModal } from "../../data/projectsModal";

const Page = () => {
  return (
    <div>
      <p className="block md:hidden text-2xl mb-4">Projects</p>
      <div className="">
        {projectsModal.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden relative text-2xl rounded-lg flex flex-col items-center justify-center w-screen h-screen"
          >
            <Image
              className="absolute top-0 z-1 rounded-lg group-hover:scale-105 duration-300"
              fill
              loading="lazy"
              priority={true}
              src={item.image}
              alt={item.title}
            />
            <div className="z-10 bg_gradient bg-opacity-90 shadow-sm rounded-xl px-5 py-2">
              <h2 className="py-2 text-left text-2xl"> {item?.title} </h2>
            </div>
            <div className="space-x-5 my-10 z-10">
              {item?.framework === "React" && (
                <Link
                  target="_blank"
                  href={item?.demoUrl || ""}
                  className="hover:border-border hover:bg-text hover:text-primary border p-2 tracking-widest font-serif rounded-md bg-border"
                >
                  Demo
                </Link>
              )}
              <Link
                target="_blank"
                href={item?.githubUrl || ""}
                className="hover:border-border hover:bg-text hover:text-primary border p-2 tracking-widest font-serif rounded-md bg-border"
              >
                Github
              </Link>
            </div>
            <div className="z-10 bg_gradient bg-opacity-90 shadow-sm rounded-xl p-5 text-base">
              <div className="md:flex gap-2 mb-2 md:mb-0">
                {item?.dependicies.map((depen: string) => (
                  <h3
                    key={depen}
                    className="flex items-center gap-1 capitalize"
                  >
                    <VscDebugBreakpointLog color="lightblue" size={12} />
                    {depen}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
