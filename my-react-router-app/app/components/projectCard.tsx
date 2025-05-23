// icons
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import type { JSX } from "react";
interface Technologies {
  title: string;
  color: string;
  icon: JSX.Element;
}

const technologies: Technologies[] = [
  {
    title: "Next.js",
    color: "",
    icon: <FaReact />,
  },
  {
    title: "React",
    color: "",
    icon: <FaReact />,
  },
  {
    title: "Tailwind",
    color: "",
    icon: <FaReact />,
  },
  {
    title: "SWR",
    color: "",
    icon: <FaReact />,
  },
];

interface Projects {
  idCard: number;
  title: string;
  content: string;
  github: string;
  website: string;
  tech: string[];
}

const projects: Projects[] = [
  {
    idCard: 1,
    title: "Давай с нами",
    content:
      "The project is a frontend website built using Next.js. It allows users to search for events in Saint Petersburg by category, date, and popular locations. All events are aggregated on the backend and displayed on the site. The website functions as a web application and is also accessible via a Telegram bot.",
    github: "https://github.com/elfototo/davai-s-nami",
    website: "https://davai-s-nami.vercel.app/",
    tech: [
      "React",
      "Next.js",
      "SWR",
      "Docker",
      "Vercel",
      "Telegram bot",
      "Tailwind Css",
    ],
  },
];

export default function ProjectCard({ idCard }: { idCard: number }) {
  const currentProject: Projects | undefined = projects.find(
    (item) => item.idCard === idCard
  );
  return (
    <>
      <div className="h-auto flex flex-col md:flex-row w-full mx-auto border border-gray-200 shadow-lg rounded-xl overflow-hidden">
        <div
          className="hidden md:block relative flex items-end min-w-[45%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
            background:
              "linear-gradient(90deg, rgba(78,19,179,1) 9%, rgba(245,45,133,1) 100%)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0 left-0 bottom-0 w-full h-full"
            style={{
              backgroundImage: "url('/banner.webp')",
            }}
          ></div>
        </div>

        {/* Mobile img */}
        <div className="md:hidden block">
          <img
            src="portfolio_1.webp"
            alt="portfolio image"
            loading="eager"
            className="w-full h-auto mb-2"
          />
        </div>

        <div className="flex flex-col p-10 justify-center">
          {/* <h2 className="text-[25px] leading-none font-bold mb-2">
            {currentProject.title}
          </h2> */}
          <img
            src="logo_main.webp"
            alt="portfolio image"
            loading="eager"
            className="w-[150px] h-auto mb-2"
          />
          <p className="leading-none font-regular italic mb-2 text-gray-400">
            some details about card
          </p>
          <div className="h-1 w-10 bg-blue-500 mb-2"></div>
          <p className="leading-none font-regular mb-2">
            {currentProject?.content}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black text-white flex justify-center items-center px-4 py-1 gap-2">
              <FaGithub />
              <a href={currentProject?.github}>
                GitHub
              </a>
            </div>
            <div className="bg-fuchsia-500 text-white flex justify-center items-center px-4 py-1 gap-2">
              <FaGlobe />
              <a href={currentProject?.website}>Visit website</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            {technologies.map((item) => (
              <div
                key ={item.title}
                className={` text-white bg-gray-400 flex items-center gap-2 px-4 py-1 cursor-default`}
              >
                {/* <span>{item.icon}</span> */}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
