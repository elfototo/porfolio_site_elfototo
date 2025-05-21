import { PiDevicesFill } from "react-icons/pi";
import type { JSX } from "react";

interface Service {
  id: number;
  title: string;
  content: string;
  color: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    id: 1,
    title: "Разработка интерфейсов",
    content:
      "Создаю адаптивные веб-приложения с использованием React/Next.js/React Router и интеграцией с API",
    color: "bg-yellow-500",
    icon: <PiDevicesFill size={70} />,
  },
  {
    id: 2,
    title: "Оптимизация кода",
    content:
      "Создаю адаптивные веб-приложения с использованием React/Next.js/React Router и интеграцией с API",
    color: "bg-green-500",
    icon: <PiDevicesFill size={70} />,
  },
  {
    id: 3,
    title: "Адаптивный дизайн",
    content:
      "Создаю адаптивные веб-приложения с использованием React/Next.js/React Router и интеграцией с API",
    color: "bg-cyan-500",
    icon: <PiDevicesFill size={70} />,
  },
  {
    id: 4,
    title: "Лэндинги",
    content:
      "Создаю адаптивные веб-приложения с использованием React/Next.js/React Router и интеграцией с API",
    color: "bg-purple-500",
    icon: <PiDevicesFill size={70} />,
  },
];

export default function ServiceCard({ value }: { value: string }) {
  const curentService: Service | undefined = services.find(
    (item) => item.title === value
  );
  if (!curentService) return null;

  return (
    <>
      <div
        className={`${curentService.color} w-full h-full flex flex-col items-start justify-center text-white text-2xl p-8 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-default`}
      >
        {curentService.icon}
        <h1 className="font-bold mb-4">{curentService.title}</h1>
        <div className="">
          <p className="text-lg">{curentService.content}</p>
        </div>
      </div>
    </>
  );
}
