import { useTranslation } from "react-i18next";
import type { JSX } from "react";
import { FaTools } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { HiCode } from "react-icons/hi";
import { TbPuzzleFilled } from "react-icons/tb";
import { FaPuzzlePiece } from "react-icons/fa6";




export default function Skills() {
  const { t } = useTranslation();

  type SkillCategory = {
    id: "frontend" | "tools" | "approach" | "design";
    icon: JSX.Element;
    color: string;
  };
  const categories: SkillCategory[] = [
    {
      id: "frontend",
      icon: <HiCode  className="mx-auto w-[80px] h-auto" />,
      color: "bg-purple-500",
    },
    {
      id: "tools",
      icon: <FaTools  className="mx-auto w-[60px] h-auto" />,
      color: "bg-green-500",
    },
    {
      id: "approach",
      icon: <FaPuzzlePiece  className="mx-auto w-[65px] h-auto" />,
      color: "bg-cyan-500",
    },
    {
      id: "design",
      icon: <FaPaintBrush  className="mx-auto w-[60px] h-auto" />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="w-full flex justify-center flex-col">
      <h1 className="text-gray-700 mx-auto text-5xl font-bold mb-40">
        {t("skills.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-y-40 gap-y-4">
        {categories.map(({ id, icon, color }) => (
          <div
            key={id}
            className={`bg-gray-100 flex lg:flex-col group hover:shadow-lg transition duration-300 relative border-1 border-gray-300 rounded-xl`}
          >
            <div
              className={`rounded-xl ${color} lg:w-[80%]  lg:h-32 h-full w-[25%] lg:absolute block lg:-top-[60px] lg:left-1/2 transform lg:-translate-x-1/2 text-white group-hover:rotate-6 transition duration-300 flex items-center justify-center`}
            >
              {icon}
            </div>
            <div className="p-8">
              <h1 className="lg:mt-14 mt-0 font-bold text-xl mb-4">
                {t(`skills.categories.${id}`)}
              </h1>
              <ul className="">
                {(
                  t(`skills.list.${id}`, {
                    returnObjects: true,
                  }) as string[]
                ).map((skill, index) => (
                  <li key={index} className=" mb-1">
                    <div className="flex items-center">
                      <FaCheck
                        size={14}
                        className="text-green-500 flex-shrink-0 mt-[3px] mr-2"
                      />
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
