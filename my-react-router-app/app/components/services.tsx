import ServiceCard from "./serviceCard";

export default function Services() {
  return (
    <>
      <h1 className="text-white text-5xl font-bold mb-10">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full">
        <ServiceCard value="Разработка интерфейсов" />
        <ServiceCard value="Оптимизация кода" />
        <ServiceCard value="Адаптивный дизайн" />
        <ServiceCard value="Лэндинги" />
      </div>
    </>
  );
}