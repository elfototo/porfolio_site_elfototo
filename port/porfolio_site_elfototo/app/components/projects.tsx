import ProjectCard from "../components/projectCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-gray-700 text-5xl font-inter-extraBold mb-10 flex items-center justify-center">
        {t("projects.title")}
      </h1>
      <div className="p-2">
        <ProjectCard id={1} />
      </div>
    </>
  );
}
