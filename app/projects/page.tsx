import Image from "next/image";
import Link from "next/link";
import { projectsModal } from "../../data/projectsModal";

const page = () => {
  return (
    <div>
      <p className="block md:hidden text-2xl mb-4">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-10 gap-x-20 self-center mx-20 flex-wrap">
        {projectsModal.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden relative text-2xl rounded-lg flex flex-col items-center justify-center w-full h-40 border border-border"
          >
            <p className="z-10 absolute top-2">{item.title}</p>
            <Image
              className="absolute z-1 rounded-lg group-hover:scale-125 duration-300"
              layout="fill"
              src={item.image}
              alt="/"
            />
            <p className="group-hover:hidden hidden">{item.title}</p>
            <div className="hidden group-hover:block w-full h-full bg-primary absolute opacity-80 rounded-lg border-primary" />
            <div className="flex items-center gap-5 z-50 group-hover:flex">
              <Link
                href={{
                  pathname: `/projects/${item.title}`,
                  query: { id: item.id },
                }}
                className="border-border border p-2 tracking-widest font-serif rounded-md hover:bg-border"
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
