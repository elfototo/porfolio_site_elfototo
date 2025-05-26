import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  type SkillCategory = "frontend" | "tools" | "approach" | "design";
  const categories: SkillCategory[] = ["frontend", "tools", "approach", "design"];

  return (
    <div className="w-full flex justify-center flex-col">
      <h1 className="text-gray-700 mx-auto text-5xl font-bold mb-10">
        {t("skills.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {categories.map((category: SkillCategory) => (
          <div key={category}>
            <h1 className="font-bold mb-4">
              {t(`skills.categories.${category}`)}
            </h1>
            <ul>
              {(
                t(`skills.list.${category}`, {
                  returnObjects: true,
                }) as string[]
              ).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
