// icons
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import type { JSX } from "react";

export default function ProjectCard({ id }: { id: number }) {
  const { t } = useTranslation();

  interface Projects {
    id: number;
    title: string;
    content: string;
    github: string;
    website: string;
    tech: string[];
  }

  const projects: Projects[] = [
    {
      id: 1,
      title: t("projects.title"),
      content: t("projects.content"),
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

  const currentProject: Projects | undefined = projects.find(
    (item) => item.id === id
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
          <img
            src="logo_main.webp"
            alt="portfolio image"
            loading="eager"
            className="w-[150px] h-auto mb-2"
          />

          <p className="text-sm mb-2">{currentProject?.content}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black rounded-lg text-white flex justify-center items-center px-4 py-1 gap-2">
              <FaGithub />
              <a href={currentProject?.github}>GitHub</a>
            </div>
            <div className="bg-fuchsia-500 text-white flex justify-center items-center px-4 py-1 gap-2 rounded-lg">
              <FaGlobe />
              <a href={currentProject?.website} target="_blank">
                {t("projects.button")}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {currentProject?.tech?.map((item) => (
              <div
                key={item}
                className={`text-white text-md bg-gray-600 flex items-center gap-2 px-4 py-1 cursor-default rounded-full`}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
