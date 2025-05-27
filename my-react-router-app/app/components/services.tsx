import ServiceCard from "./serviceCard";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.list", { returnObjects: true }) as {
    title: string;
    content: string;
  }[];

  return (
    <>
      <h1 className="text-white text-5xl font-bold mb-10">
        {t("services.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            content={service.content}
            id={index}
          />
        ))}
      </div>
    </>
  );
}
