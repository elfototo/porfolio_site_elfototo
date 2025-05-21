import ServiceBlock from "./serviceCard";

export default function Services() {
  return (
    <>
      <h1 className="text-white text-5xl font-bold mb-10">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-4 w-full container">
        <ServiceBlock value="Разработка интерфейсов" />
        <ServiceBlock value="Оптимизация кода" />
        <ServiceBlock value="Адаптивный дизайн" />
        <ServiceBlock value="Лэндинги" />
      </div>
    </>
  );
}