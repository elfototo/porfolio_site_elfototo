import { useTranslation } from "react-i18next";
import type { JSX } from "react";
import { FaTools } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaCheck } from "react-icons/fa";

export default function Skills() {
  const { t } = useTranslation();

  type SkillCategory = {
    id: "frontend" | "tools" | "approach" | "design";
    icon: JSX.Element;
  };
  const categories: SkillCategory[] = [
    {
      id: "frontend",
      icon: <SiFrontendmentor size={50} className="mx-auto" />,
    },
    { id: "tools", icon: <FaTools size={50} className="mx-auto" /> },
    { id: "approach", icon: <FaPuzzlePiece size={50} className="mx-auto" /> },
    { id: "design", icon: <FaPaintBrush size={50} className="mx-auto" /> },
  ];

  return (
    <div className="w-full flex justify-center flex-col">
      <h1 className="text-gray-700 mx-auto text-5xl font-bold mb-40">
        {t("skills.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-40">
        {categories.map(({ id, icon }) => (
          <div key={id} className="relative bg-gray-200 p-8 rounded-xl">
            <div className="rounded-xl bg-gray-700 w-[80%] p-10 absolute -top-[60px] left-1/2 transform -translate-x-1/2 text-white">
              {icon}
            </div>
            <div className="">
              <h1 className="mt-14 font-bold text-xl mb-4">
                {t(`skills.categories.${id}`)}
              </h1>
            </div>
            <ul className="">
              {(
                t(`skills.list.${id}`, {
                  returnObjects: true,
                }) as string[]
              ).map((skill, index) => (
                <li key={index} className=" mb-1">
                  <div className="flex items-center">
                    <FaCheck size={14} className="text-green-500 flex-shrink-0 mt-[3px] mr-2" />
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
